import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const AddJob = ({route, navigation}) => {
    const [job, setJob] = useState("")
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        setJob(route.params.job)
        setIsUpdate(route.params.isUpdate)
    }, [JSON.stringify(route.params)])

    let handlePressBtnFinish = () => {
        navigation.navigate("TodoList", {job : {job : job, isChecked : false}})
    }
  return (
    <View style={styles.containerAddJob}>
        <View style={styles.viewHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name='chevron-back-circle-outline' size={30}/>
            </TouchableOpacity>
            <View style={styles.viewUser}>
                <Ionicons name='person-outline' size={30}/>
                <View style={styles.viewUserInfo}>
                    <Text style={{fontSize  :'20px', fontWeight : 'bold'}}>{`Hi ${name}`}</Text>
                    <Text style={{fontSize  :'15px', color : 'gray'}}>Have a great day a head</Text>
                </View>
            </View>
        </View>
        <Text style={{fontSize : '30px', fontWeight : 'bold'}}>{
            isUpdate ? "EDIT YOUR JOB" : "ADD YOUR JOB"
        }</Text>
        <View style={styles.viewAddJob}>
            <Ionicons name='book-outline' size={25} style={{width : '10%', marginLeft : '10px'}}/>
            <TextInput placeholder='Input put your job' style={{height : '100%', width : '90%', outlineWidth : '0px'}}
            value={job}
            onChangeText={setJob}
            />
        </View>
        <TouchableOpacity style={styles.viewBtnFinish} onPress={handlePressBtnFinish}>
            <Text style={{fontSize : '18px', fontWeight : 'bold', color : 'white'}}>{
                isUpdate ? "EDIT" : "FINISH"
            }</Text>
        </TouchableOpacity>
        <Image source={require("../../assets/images/logo.png")} style={{width : '150px', height : '150px',marginBottom : '30px', marginTop : '20px'}}/>
    </View>
  )
}

export default AddJob

const styles = StyleSheet.create({
    containerAddJob : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingHorizontal : '20px'
    },
    viewHeader : {
        width : '100%',
        height : '10%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    viewUser : {
        width : '70%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    viewAddJob : {
        width : '100%',
        height : '60px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        borderWidth : '1px',
        borderColor : 'black',
        borderRadius : '10px',
        marginBottom  :'40px',
        marginTop : '20px'
    },
    viewBtnFinish : {
        width : '50%',
        height : '60px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor  :'#2c99ab',
        borderRadius : '10px'
    }
})