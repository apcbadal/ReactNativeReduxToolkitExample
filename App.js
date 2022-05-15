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
const Tab = createMaterialBottomTabNavigator();
let persistor = persistStore(store);
const App=()=>
{
    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>{
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Counter} />
                <Tab.Screen name="Profile" component={MyProfileScreen} />
            </Tab.Navigator>}
            </NavigationContainer>
            </PersistGate>
        </Provider>
        )

}

export default App;
