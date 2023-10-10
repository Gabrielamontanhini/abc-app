import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

import Profile from '../screens/Profile/Profile';
import Feed from '../screens/Feed/Feed';
import Inicial from '../screens/Inicial/Inicial';
import { Culturas } from '../screens/Culturas/Culturas';

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen
            name='Inicial'
            component={Inicial}
            options={{
                tabBarIcon: ({size}) => <Feather name='home' size={size}/>,
                tabBarLabel: 'Inicio'
            }}
            />
            <Tab.Screen
            name='Feed'
            component={Feed}
            options={{
                tabBarIcon: ({size}) => <Feather name='activity' size={size}/>,
                tabBarLabel: 'Feed'
            }}
            />
            <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon: ({size}) => <Feather name='plus' size={size}/>,
                tabBarLabel: 'Perfil'
            }}
            />
        </Tab.Navigator>
    )
}