import { FightersList, Header } from "@/components";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { FighterService } from "@/services/FighterService";
import { UniverseService } from "@/services/UniverseService";
import { RootState } from "@/store";
import { Fighter, Universe } from "@/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useMemo, useState } from "react";
import { Alert, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import { Container } from "./styles";

export const Home: React.FC = () => {
  const [universe, setUniverse] = useState<Universe[]>([]);
  const [fighters, setFighters] = useState<Fighter[]>([]);
  const [loading, setLoading] = useState(false);
  const { selectedUniverse, currentFilter, rateFilterValue } = useSelector(
    (state: RootState) => state.app
  );
  const navigation = useNavigation();

  const filteredData = useMemo(() => {
    let filteredValidFighters = fighters.filter((fighter) => {
      return fighter.objectID !== "NaN";
    });

    if (rateFilterValue) {
      filteredValidFighters = filteredValidFighters.filter((fighter) => {
        return fighter.rate === rateFilterValue;
      });
    }

    if (currentFilter === "") {
      return filteredValidFighters;
    }

    return filteredValidFighters.sort((a, b) => {
      let formattedA = a[currentFilter as keyof Fighter];
      let formattedB = b[currentFilter as keyof Fighter];

      if (Number(formattedA)) {
        formattedA = Number(formattedA);
      }

      if (Number(formattedB)) {
        formattedB = Number(formattedB);
      }

      return formattedA == formattedB ? 0 : formattedA > formattedB ? 1 : -1;
    });
  }, [fighters, currentFilter, rateFilterValue]);

  useEffect(() => {
    Platform.OS === "ios" &&
      navigation.setOptions({
        header: ({
          navigation,
        }: NativeStackScreenProps<AppNavigatorParamList>) => (
          <Header hasFilter canGoBack={false} navigation={navigation} />
        ),
      });
  }, [rateFilterValue]);

  const getUniversesList = () => {
    setLoading(true);
    const universeService = new UniverseService();

    universeService
      .getUniverses()
      .then((response) => {
        setUniverse(response);
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getFightersList = () => {
    setLoading(true);
    const fighterService = new FighterService();

    fighterService
      .getFighters(selectedUniverse)
      .then((response) => {
        setFighters(response);
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRefresh = () => {
    getUniversesList();
    getFightersList();
  };

  useEffect(() => {
    getUniversesList();
    getFightersList();
  }, [selectedUniverse]);

  return (
    <SafeAreaView edges={["bottom"]}>
      <Container>
        <FightersList
          universe={universe}
          loading={loading}
          onRefresh={handleRefresh}
          fighters={filteredData}
        />
      </Container>
    </SafeAreaView>
  );
};
