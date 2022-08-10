import { Box } from "@/components/Box";
import Button from "@/components/Button";
import { Header } from "@/components/Header";
import { Radio } from "@/components/Radio";
import { Rating } from "@/components/Rating";
import { Row } from "@/components/Row";
import { Text } from "@/components/Text";
import { setCurrentFilter } from "@/store/app";
import theme from "@/config";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import {
  Container,
  FilterItem,
  FilterItemLabel,
  OptionsContainer,
} from "./styles";

const FilterOptions = [
  { name: "Name" },
  { name: "Price" },
  { name: "Rate" },
  { name: "Downloads" },
];

export const Filters: React.FC = () => {
  const navigation = useNavigation();
  const [rate, setRate] = useState(-1);
  const [selectedFilter, setSelectedFilter] = useState("");
  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(setCurrentFilter(selectedFilter));
  };

  const handleClear = () => {
    setSelectedFilter("");
    dispatch(setCurrentFilter(""));
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

  return (
    <SafeAreaView>
      <Container>
        <FilterItemLabel>
          <Text
            marginTop={14}
            marginLeft={20}
            marginBottom={10}
            color="#85858B"
            size={Platform.OS === "ios" ? 13 : 14}
            lineHeight={18}
            textTransform={Platform.OS === "ios" ? "uppercase" : "none"}
            weight={Platform.OS === "ios" ? "regular" : "medium"}
          >
            Sort by
          </Text>
        </FilterItemLabel>
        <OptionsContainer paddingLeft={20}>
          {FilterOptions.map((filter, index) => (
            <FilterItem key={index}>
              <Text
                marginLeft={Platform.OS === "android" ? 26 : 0}
                size={17}
                lineHeight={22}
                weight="regular"
              >
                {filter.name}
              </Text>
              <Radio
                onSelect={() =>
                  setSelectedFilter(
                    filter.name === selectedFilter ? "" : filter.name
                  )
                }
                selected={selectedFilter === filter.name}
              />
            </FilterItem>
          ))}
        </OptionsContainer>
        <FilterItemLabel marginTop={Platform.OS === "android" ? 16 : 0}>
          <Text
            marginTop={14}
            marginLeft={20}
            marginBottom={10}
            color="#85858B"
            size={Platform.OS === "ios" ? 13 : 14}
            lineHeight={18}
            textTransform={Platform.OS === "ios" ? "uppercase" : "none"}
            weight={Platform.OS === "ios" ? "regular" : "medium"}
          >
            Filter by
          </Text>
        </FilterItemLabel>
        <Box style={{ flex: 1 }}>
          <OptionsContainer paddingTop={30} paddingBottom={30} center>
            <Rating
              onPress={setRate}
              spaceBetweenStars={16}
              size={38}
              rate={rate}
            />
          </OptionsContainer>
        </Box>
        <Box
          style={{ width: "100%", flexDirection: "row" }}
          paddingLeft={36}
          paddingRight={36}
          paddingBottom={36}
        >
          <Button
            onPress={handleClear}
            style={{ width: "50%", marginRight: 15 }}
            backgroundColor={
              Platform.OS === "ios"
                ? theme.colors.grey["50"]
                : theme.colors.white
            }
          >
            <Text
              color={
                Platform.OS === "ios"
                  ? theme.colors.text
                  : theme.colors.grey["900"]
              }
            >
              Reset
            </Text>
          </Button>
          <Button
            onPress={handleFilter}
            style={{ width: "50%" }}
            backgroundColor={
              Platform.OS === "ios"
                ? theme.colors.blue["400"]
                : theme.colors.white
            }
          >
            <Text
              color={
                Platform.OS === "ios"
                  ? theme.colors.white
                  : theme.colors.grey["900"]
              }
            >
              Apply
            </Text>
          </Button>
        </Box>
      </Container>
    </SafeAreaView>
  );
};
