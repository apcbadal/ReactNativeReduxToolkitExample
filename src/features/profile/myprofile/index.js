import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Button, Text, View} from "react-native";
import {changeProfile} from "../profileSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyProfileScreen=()=>{
    const profile = useSelector((state) => state.profile.details)
    const dispatch = useDispatch()
    const handleProfileDetails=()=>{
        const obj={};
        obj.name="Anshu";
        obj.email="apcbadal@gmail.com"
        dispatch(changeProfile(obj))

}
useEffect(async () => {
    const root = await AsyncStorage.getItem('root')
    console.log(root)
},[])
    return(
        <View>
            <Text>{profile?.name}</Text>
            <Text>{profile?.email}</Text>
            <Button title={"Change Profile"}
                    onPress={()=>handleProfileDetails()}
            >
            </Button>
        </View>
    )
}

export default MyProfileScreen
