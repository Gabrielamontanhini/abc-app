import { Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Card } from "../../components/cardComponent/Card";
import styled from "styled-components";
import { colors } from "../../constants/colors";
import { FlatList } from "react-native-gesture-handler";
import { BigHeader } from "../../components/headerComponents/BigHeader";
import { TinyHeader } from "../../components/headerComponents/TinyHeader";

import { OptionsView, StyledSafeArea } from "../../styles";

export default function Inicial() {
    const opções = [{id: 1,
        label: "Área do Agricultor"
    }, {id: 2, label:"Informativos Gerais"}, {id: 3, label: "Capacitação"}]
    return (
      <StyledSafeArea>
            <BigHeader />
            <OptionsView>
                <FlatList 
                data={opções}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Card data={item} />}/>
            </OptionsView>
        </StyledSafeArea>
    )
}



