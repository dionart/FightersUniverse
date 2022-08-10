import { FightersList } from "@/components/FightersList";
import { Header } from "@/components/Header";
import Slider from "@/components/Slider";
import { AppNavigatorParamList } from "@/navigators/AppNavigator/app-navigator-param-list";
import { FighterService } from "@/services/FighterService";
import { UniverseService } from "@/services/UniverseService";
import { RootState } from "@/store";
import { Fighter } from "@/types/Fighter";
import { Universe } from "@/types/Universe";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import { Container } from "./styles";

export const Home: React.FC = () => {
  const [universe, setUniverse] = useState<Universe[]>([]);
  const [fighters, setFighters] = useState<Fighter[]>([]);
  const [loading, setLoading] = useState(false);
  const universeToFilter = useSelector(
    (state: RootState) => state.app.selectedUniverse
  );
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    Platform.OS === "ios" &&
      navigation.setOptions({
        header: ({
          navigation,
        }: NativeStackScreenProps<AppNavigatorParamList>) => (
          <Header hasFilter canGoBack={false} navigation={navigation} />
        ),
      });
  }, []);

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
      .getFighters(universeToFilter)
      .then((response) => {
        setFighters(response);
      })
      .catch((error) => {
        console.log(Object.entries(error));
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
  }, [universeToFilter]);

  return (
    <SafeAreaView edges={["bottom"]}>
      <Container>
        <FightersList
          universe={universe}
          loading={loading}
          onRefresh={handleRefresh}
          fighters={fighters}
        />
      </Container>
    </SafeAreaView>
  );
};
