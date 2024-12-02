import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import StipendRankings from '../screens/StipendRankings';
import Details from '../screens/Details';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4CAF50',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen
        name="Stipend Rankings"
        component={StipendRankings}
        options={{ title: 'Stipend Rankings' }}
      />
      <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }} />
    </Stack.Navigator>
  );
};

export default Navigation;
