import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-web'

const Login = ({navigation}) => {
    const [name, setName] = useState("")

    let  handlePressStarted = () => {
        navigation.navigate("TodoList", {name : name})
    }
  return (
    <View style={styles.containerLogin}>
        <Image source={require("../../assets/images/logo.png")} style={{width : '150px', height : '150px'}}/>
        <Text style={{fontSize : '25px', fontWeight : 'bold'}}>MANAGE YOUR TASK</Text>
        <View style={styles.viewInput}>
            <Ionicons name='mail' size={30} style={{ marginLeft  :'10px', width : '10%'}}/>
            <TextInput placeholder='Enter your name'
            style={{width : '90%', height : '100%', outlineWidth : '0px'}}
            value={name}
            onChangeText={setName}
            />
        </View>
        <TouchableOpacity style={styles.viewBtnStarted} onPress={handlePressStarted}>
            <Text style={{fontSize : '18px', fontWeight : 'bold', color : 'white'}}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    containerLogin : {
        width : '100%',
        height : '100%',
        display  :'flex',
        flexDirection : 'column',
        justifyContent : 'space-around',
        alignItems : 'center',
        paddingHorizontal : '20px'
    },
    viewInput : {
        width : '100%',
        height : '60px',
        display  :'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : '1px',
        borderColor : 'black',
        borderRadius : '10px'
    },
    viewBtnStarted : {
        width : '50%',
        height : '60px',
        display  :'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor  :'#2c99ab',
        borderRadius : '10px'
    }
})