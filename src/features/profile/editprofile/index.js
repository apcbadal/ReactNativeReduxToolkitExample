import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {changeProfile} from "../profileSlice";

const EditProfileScreen=({navigation})=>{
    const profile = useSelector((state) => state.profile.details)

    const [name, setName] = useState(profile?.name);
    const [email, setEmail] = useState(profile?.email);
    const [title, setTitle] = useState(profile?.title);
    const [description, setDescription] = useState(profile?.description);
    const dispatch = useDispatch()
    const handleProfileDetails=()=>{
        const obj={};
        obj.name=name;
        obj.email=email;
        obj.title=title;
        obj.description=description
        dispatch(changeProfile(obj))
        navigation.goBack(0)

    }
    return(
        <View style={styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputs}
                placeholder="Name"
                keyboardType="default"
                underlineColorAndroid="transparent"
                onChangeText={text => setName(text)}
                value={name}
            />
        </View>
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="default"
            underlineColorAndroid="transparent"
            onChangeText={text => setEmail(text)}
            value={email}
        />
    </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Title"
                    keyboardType="default"
                    underlineColorAndroid="transparent"
                    onChangeText={text => setTitle(text)}
                    value={title}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    multiline={true}
                    placeholder="Description"
                    keyboardType="default"
                    underlineColorAndroid="transparent"
                    onChangeText={text => setDescription(text)}
                    value={description}
                />
            </View>
            <View style={styles.bodyContent}>

                <TouchableOpacity onPress={handleProfileDetails} style={styles.buttonContainer}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default EditProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        marginTop:5,
        alignItems: "center",
        marginLeft: 45,
    },
    inputContainer: {
        borderBottomColor: "#fff8dc",
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 35,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        flex: 1
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
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
