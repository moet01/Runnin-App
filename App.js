import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/welcome';
import RunScreen from './screens/runScreen';
  const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="Welcome" 
      options={{ headerShown: false }} 
      component={Welcome} />
      <Stack.Screen name="Run" 
      options={{ headerShown: false }} 
      component={RunScreen} />
   </Stack.Navigator>
</NavigationContainer>
      
  
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
