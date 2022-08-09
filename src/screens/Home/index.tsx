import { FightersList } from "@/components/FightersList";
import Slider from "@/components/Slider";
import { FighterService } from "@/services/FighterService";
import { UniverseService } from "@/services/UniverseService";
import { Fighter } from "@/types/Fighter";
import { Universe } from "@/types/Universe";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Container } from "./styles";

export const Home: React.FC = () => {
  const [universe, setUniverse] = useState<Universe[]>([]);
  const [fighters, setFighters] = useState<Fighter[]>([]);
  const [loading, setLoading] = useState(false);
  const { bottom } = useSafeAreaInsets();

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
      .getFighters()
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
  }, []);

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
