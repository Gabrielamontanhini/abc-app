import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons'
import { colorPallette, firstColor } from "../../constants/colors";
import { TinyHeader } from "../../components/headerComponents/TinyHeader";
import { OptionsView, StyledSafeArea } from "../Inicial/Inicial";
import { UserView } from "../../components/userComponent/userView";
import { Card } from "../../components/cardComponent/Card";

export default function Profile() {
    const opções = [{id: 1,
        label: "Minhas Culturas"
    }, {id: 2, label:"Fórum"}]
    return (
        <StyledSafeArea>
            <TinyHeader />
            <UserView />
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

