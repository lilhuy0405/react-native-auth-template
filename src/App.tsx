/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import {appRouters} from './routers';
import withAuth from './HOCs/withAuth';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {Object.keys(appRouters).map((key: string) => {
            const router = appRouters[key];

            return (
              <Stack.Screen
                key={key}
                name={router.name}
                component={withAuth(router.screen)}
                options={router?.options}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default App;
