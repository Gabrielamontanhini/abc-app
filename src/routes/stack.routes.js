import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicial from "../pages/Inicial";
import Agricultor from "../pages/Agricultor";
import Informativos from "../pages/Informativos";
import Capacitação from "../pages/Capacitação";
import Fórum from "../pages/Fórum";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inicial"
                component={Inicial}
                options={{
                    title: "Página Inicial"
                }} />
            <Stack.Screen
                name="Agricultor"
                component={Agricultor}
                options={{
                    title: "Área do Agricultor"
                }} />
            <Stack.Screen 
            name="Informativos"
            component={Informativos}
            options={{
                title: "Informativos"
            }}/>
            <Stack.Screen
            name="Capacitação"
            component={Capacitação}
            options={{
                title: "Capacitações"
            }} />
            <Stack.Screen 
            name="Fórum"
            component={Fórum}
            options={{
                title: "Fóruns de dúvidas e experiências"
            }}/>
        </Stack.Navigator>
    )
}