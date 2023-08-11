import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Home } from '../app/Home';
import { Result } from '../app/Result';

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Home: undefined
    Result: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation> 

export function StackComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}