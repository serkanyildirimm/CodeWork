import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Jobs from './src/pages/Jobs/Jobs'
import Details from './src/pages/Details/Details'
import Favorites from './src/pages/Favorites/Favorites'


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const JobStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Jobs" component={Jobs} />
      <Stack.Screen name="DetailsScreen" component={Details} />
    </Stack.Navigator>
  )
}

const Router = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'tomato',
        },
        drawerActiveBackgroundColor: '#3C0B7F',
        drawerActiveTintColor: 'white',
        drawerStyle: {
          backgroundColor: '#e8eaf6'
        },
        headerTintColor: 'white',
      }} >
        <Drawer.Screen name='JobsScreen' component={JobStack} />
        <Drawer.Screen name='FavoritesScreen' component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default Router;