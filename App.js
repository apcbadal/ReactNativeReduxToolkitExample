import React from 'react'

import {store} from "./src/app/store";
import { Provider } from 'react-redux';
import Counter from "./src/features/counter/counter";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MyProfileScreen from "./src/features/profile/myprofile";
import {NavigationContainer} from "@react-navigation/native";
import { persistStore } from 'redux-persist';
import {PersistGate} from "redux-persist/integration/react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditProfileScreen from "./src/features/profile/editprofile";
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createMaterialBottomTabNavigator();
let persistor = persistStore(store);
const Stack = createStackNavigator()

const ProfileStack = ({ navigation }) => (
    <Stack.Navigator screenOptions={{
        safeAreaInsets: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },

        headerShown: true }}>
        <Stack.Screen
            name={"My Profile"}
            component={MyProfileScreen}
            options={{
                headerTitle: false,
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',

                headerStyle: {
                    backgroundColor: '#EBEDFF',
                    shadowColor: '#fff',
                    elevation: 0,
                    height: 45,
                },
            }}
        />

        <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#EBEDFF',
                    shadowColor: '#fff',
                    elevation: 0,
                    height: 45,
                },
            }}
        />
    </Stack.Navigator>
        )

const App=()=>
{

    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>{
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Counter} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>}
            </NavigationContainer>
            </PersistGate>
        </Provider>
        )

}

export default App;
