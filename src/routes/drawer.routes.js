import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import TabRoutes from './tab.routes'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen 
            name="Inicial"
            component={TabRoutes}
            options={{
                drawerIcon: ({size}) => <Feather name='home' size={size}/>
            }}/>
             <Drawer.Screen 
            name="Área do Agricultor"
            component={TabRoutes}
            options={{
                drawerIcon: ({size}) => <Feather name='home' size={size}/>
            }}/>
             <Drawer.Screen 
            name="Informativos Gerais"
            component={TabRoutes}
            options={{
                drawerIcon: ({size}) => <Feather name='home' size={size}/>
            }}/>
               <Drawer.Screen 
            name="Capacitação"
            component={TabRoutes}
            options={{
                drawerIcon: ({size}) => <Feather name='home' size={size}/>
            }}/>
             <Drawer.Screen 
            name="Fórum"
            component={TabRoutes}
            options={{
                drawerIcon: ({size}) => <Feather name='home' size={size}/>
            }}/>
        </Drawer.Navigator>
    )
}