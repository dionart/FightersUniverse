import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../Text";

import { Container, IconsContainer } from "./styles";
import { FilterIcon } from "../FilterIcon";
import { BackIcon } from "../BackIcon";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import theme from "@/config/theme";

interface HeaderProps {
  navigation: NativeStackNavigationProp<AppNavigatorParamList>;
  canGoBack?: boolean;
  hasFilter?: boolean;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({
  navigation,
  title = "Fighters",
  canGoBack = true,
  hasFilter = false,
}) => {
  const activeFilter = useSelector(
    (state: RootState) => state.app.currentFilter
  );

  const handleFilterIconColor = () => {
    return activeFilter ? theme.colors.blue["300"] : theme.colors.grey["500"];
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white" }} edges={["top"]}>
      <Container>
        <IconsContainer hasGoBack={canGoBack}>
          {canGoBack && <BackIcon onPress={() => navigation.goBack()} />}
          {hasFilter && (
            <FilterIcon
              fillColor={handleFilterIconColor()}
              onPress={() => navigation.navigate("Filters")}
            />
          )}
        </IconsContainer>
        <Text marginTop={14} size={34} lineHeight={41} weight="bold">
          {title}
        </Text>
      </Container>
    </SafeAreaView>
  );
};
