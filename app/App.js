import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Home from './src/screen/home/Home'
import Menu from './src/screen/menu/Menu';


const Tab = createBottomTabNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='home' component={Home} />
                <Tab.Screen name='menu' component={Menu} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}




export default App;


