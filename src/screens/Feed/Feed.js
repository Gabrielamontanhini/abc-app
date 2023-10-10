import { StyleSheet, View, Text, FlatList } from "react-native";
import { Circle } from "../../components/circleComponent/Circle";
import { OptionsView, StyledSafeArea } from "../Inicial/Inicial";
import { UserView } from "../../components/userComponent/userView";
import { TinyHeader } from "../../components/headerComponents/TinyHeader";
import { Card } from "../../components/cardComponent/Card";

export default function Feed() {
    const opções = [
        {
          id: 1,
          "label": "Soja"
        },
        {
            id: 2,
          "label": "Milho"
        },
        {
            id: 3,
          "label": "Açaí"
        },
        {
            id: 4,
          "label": "Mandioca"
        },
        {
            id: 5,
          "label": "Algodão"
        },
        {
            id: 6,
          "label": "Cacau"
        }
    ]
    return(
        <StyledSafeArea>
        <TinyHeader />
        <OptionsView>
            <Text>Minhas culturas</Text>
            <FlatList 
            data={opções}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Card data={item} />}/>
        </OptionsView>



    </StyledSafeArea>
)}

