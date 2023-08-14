import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Home } from '../app/Home';
import { Result } from '../app/Result';
import { Details } from '../app/Details';
import { History } from '../app/History';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home: undefined
    Result: undefined
    Details: undefined
    History: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation> 

export function StackComponent() {
    const config = {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    animation: 'slide_from_right'
                }}
            >
                <Stack.Screen 
                    name='Home'
                    component={Home} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name='Result' 
                    component={Result} 
                    options={{
                        headerShown: false,
                    }}  
                />
                <Stack.Screen 
                    name='Details' 
                    component={Details} 
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name='History' 
                    component={History} 
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}