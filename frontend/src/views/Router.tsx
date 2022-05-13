import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useAuth } from '../contexts/auth.context';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { ProfileScreen } from './ProfileScreen';
import { RegisterScreen } from './RegisterScreen';
import { SettingsScreen } from './SettingsScreen';
import { StatisticsScreen } from './StatisticsScreen';
import { ScanScreen } from './ScanScreen';

// const AuthGate: React.FC = ({ children }) => {
//   const { state } = useAuth();
  
//   if (state.isAuthenticated) {
//     return children;
//   }

//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Register"
//         component={RegisterScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

const Stack = createNativeStackNavigator();

const Router: React.FC = () => (
  <NavigationContainer>
    {/* <AuthGate> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Scan"
          component={ScanScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    {/* </AuthGate> */}
  </NavigationContainer>
);

export default Router;
