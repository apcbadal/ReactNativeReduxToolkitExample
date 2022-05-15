import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {changeProfile} from "../profileSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyProfileScreen=({navigation})=>{
    const profile = useSelector((state) => state.profile.details)
    const dispatch = useDispatch()
    const handleProfileDetails=()=>{
        navigation.navigate("EditProfile")
        /*const obj={};
        obj.name="Anshu";
        obj.email="apcbadal@gmail.com"
        dispatch(changeProfile(obj))*/

}
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.bodyContent}>
                <Text style={styles.name}>{profile?.name}</Text>
                <Text style={styles.name}>{profile?.email}</Text>
                <Text style={styles.info}>{profile?.title}</Text>
                <Text style={styles.description}>{profile?.description}</Text>
                </View>
            </View>
                <View style={styles.bodyContent}>

                    <TouchableOpacity onPress={handleProfileDetails} style={styles.buttonContainer}>
                        <Text>Edit Profile</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor: "#00BFFF",
        height:200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'center',
        position: 'absolute',
        marginTop:130
    },
    name:{
        fontSize:22,
        color:"#FFFFFF",
        fontWeight:'600',
    },
    body:{
        marginTop:40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
    },
    info:{
        fontSize:16,
        color: 'black',
        marginTop:10
    },
    description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
    },
});
export default MyProfileScreen
