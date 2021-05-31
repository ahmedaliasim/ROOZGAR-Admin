import React,{useState} from 'react';
import { TextInput} from 'react-native-paper';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/buttons';

//const SignUp = (props) => {

  const BlockedEmpConfirm  = ({navigation,route})=>{
    const getDetails = (type)=>{
       if(route.params){
          switch(type){
              case "name":
                  return route.params.name
              case "phone":
                 return route.params.phone
              case "email":
                return route.params.email
              case "picture":
                  return  route.params.picture
              case "password":
                return  route.params.password  
          }
       }
       return ""
    }

  const [email,setEmail] = useState(getDetails("email"))
  const [password,setPassword]=useState(getDetails("password"));
  const [picture,setPicture] = useState(getDetails("picture"))
  const [phone,setPhone] = useState(getDetails("phone"))
  const [enableshift,setenableShift] = useState(false)
  const [name,setName] = useState(getDetails("name"))

  

  const blocked= async ()=>{
    fetch("http://192.168.0.105:3000/blockemp",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       name,
       email,
       password,
       phone,
       picture
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
           try {
             await AsyncStorage.setItem('token',data.token)
             navigation.navigate("AdminDashboard")
           } catch (e) {
             console.log("error hai",e)
           }
    }).catch(err=>{
     Alert.alert("Empty Field")
 })
 }





 

 
  return (
  
   <KeyboardAvoidingView behavior="position" style={styles.root} enabled={enableshift}>
     <ScrollView>
     <View style={{alignItems:"center"}}>
         <Image
        style={{width:140,height:140,borderRadius:140/2,marginTop:10}}
        source={{uri:picture}}
        /> 
     </View>
             <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > Welcome {name} </Text>

      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      >Your Account Has Been Blocked</Text>
         <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > Name:  {name} </Text>

<Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > Email:  {email} </Text>
      
      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > Phone:  {phone} </Text>
     

      <Button 
             style={styles.inputStyleButton}
             
              mode="contained" 
              title = "Block Confirm"
              onPress={() => blocked()}>
                   
             </Button>
              
     
      </ScrollView>
      </KeyboardAvoidingView>
   
  );
  
};
const theme = {
  colors:{
      primary:"#006aff"
  }
}

const styles=StyleSheet.create({
  root:{
     flex:1,
  },
  inputStyle:{
    marginLeft:18,marginRight:18,marginTop:18
  },
  inputStyleButton:{
   flexDirection:"row",justifyContent:"space-around",padding:5
  },
  modalView:{
      position:"absolute",
      bottom:2,
      width:"100%",
      backgroundColor:"white"

  },
  modalButtonView:{
      flexDirection:"row",
      justifyContent:"space-around",
      padding:10
  },
  menuIcon1: {
      marginTop:10,
      marginBottom: 10,
      width: 200,
      height: 180,
      alignSelf: 'center',
    }
})

export default BlockedEmpConfirm;