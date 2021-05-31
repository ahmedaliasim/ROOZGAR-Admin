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



  const BlockedVendorConfirm  = ({navigation,route})=>{
    const getDetails = (type)=>{
       if(route.params){
          switch(type){
              case "userName":
                  return route.params.userName
              case "phone":
                 return route.params.phone
              case "email":
                return route.params.email          
             case "firstName":
                  return route.params.firstName
            case "lastName":
                  return route.params.lastName
             case "cnic":
                  return route.params.cnic
                  case "image":
                  return route.params.image
          }
       }
       return ""
    }

  const [email,setEmail] = useState(getDetails("email"))
  const [image,setImage] = useState(getDetails("image"))
  const [phone,setPhone] = useState(getDetails("phone"))
  const [enableshift,setenableShift] = useState(false)
  const [userName,setName] = useState(getDetails("userName"))
  const [firstName,setFirstName] = useState(getDetails("firstName"))
  const [lastName,setLastName] = useState(getDetails("lastName"))
  const [cnic,setcnic] = useState(getDetails("cnic"))



  const blocked= async ()=>{
    fetch("http://192.168.0.105:3000/blockvendor",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
      userName,
       email,
       phone,
       cnic,
       firstName,
       lastName,
       image
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
        source={{uri:image}}
        /> 
     </View> 
             <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > Welcome {userName} </Text>

     
         <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > FirstName:  {firstName}</Text>

<Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > lastName: {lastName} </Text>

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

<Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > Cnic:  {cnic} </Text>
     

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

export default BlockedVendorConfirm;