import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}