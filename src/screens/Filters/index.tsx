import { setCurrentFilter, setRateFilterValue } from "@/store/app";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, ScrollView, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Container, FilterItemLabel, OptionsContainer } from "./styles";
import { RootState } from "@/store";
import { filterOptions } from "@/constants/filter-options";
import theme from "@/config/theme";
import { DetectPlatform } from "@/utils/detect-platform";
import {
  Box,
  FilterButtons,
  FilterOptions,
  Header,
  Rating,
  Text,
} from "@/components";

export const Filters: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [rate, setRate] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("");
  const { currentFilter, rateFilterValue } = useSelector(
    (state: RootState) => state.app
  );

  const handleFilter = () => {
    dispatch(setRateFilterValue(rate));
    dispatch(setCurrentFilter(selectedFilter));
    navigation.goBack();
  };

  const handleClear = () => {
    setSelectedFilter("");
    dispatch(setRateFilterValue(0));
    dispatch(setCurrentFilter(""));
    navigation.goBack();
  };

  useEffect(() => {
    Platform.OS === "ios" &&
      navigation.setOptions({
        header: ({
          navigation,
        }: NativeStackScreenProps<AppNavigatorParamList>) => (
          <Header navigation={navigation} title="Filters" />
        ),
      });
  }, []);

  useEffect(() => {
    setRate(rateFilterValue);
    setSelectedFilter(currentFilter);
  }, [currentFilter, rateFilterValue]);

  return (
    <SafeAreaView>
      <Container>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <FilterItemLabel>
            <Text
              marginTop={14}
              marginLeft={20}
              marginBottom={10}
              color={theme.colors.grey["600"]}
              size={DetectPlatform(13, 14)}
              lineHeight={18}
              textTransform={DetectPlatform("uppercase", "none")}
              weight={DetectPlatform("regular", "medium")}
            >
              Sort by
            </Text>
          </FilterItemLabel>
          <FilterOptions
            options={filterOptions}
            selectedFilter={selectedFilter}
            onSelect={setSelectedFilter}
          />
          <FilterItemLabel marginTop={DetectPlatform(0, 16)}>
            <Text
              marginTop={14}
              marginLeft={20}
              marginBottom={10}
              color={theme.colors.grey["600"]}
              size={DetectPlatform(13, 14)}
              lineHeight={18}
              textTransform={DetectPlatform("uppercase", "none")}
              weight={DetectPlatform("regular", "medium")}
            >
              Filter by
            </Text>
          </FilterItemLabel>
          <Box style={{ flexGrow: 1 }}>
            <OptionsContainer paddingTop={30} paddingBottom={30} center>
              <Rating
                onPress={setRate}
                spaceBetweenStars={16}
                size={38}
                rate={rate}
              />
            </OptionsContainer>
          </Box>
          <Box paddingTop={16} paddingBottom={24}>
            <FilterButtons onClear={handleClear} onFilter={handleFilter} />
          </Box>
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
};
