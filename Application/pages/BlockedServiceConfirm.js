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


const BlockedServiceConfirm = ({navigation,route})=>{

    const getDetails = (type)=>{
        if(route.params){
           switch(type){
               case "vendorName":
                   return route.params.vendorName
               case "availibility":
                  return route.params.availibility
               case "title":
                 return route.params.title          
              case "description":
                   return route.params.description
             case "price":
                   return route.params.price
                   case "category":
                    return route.params.category
                    case "hearts":
                      return route.params.hearts
                      case "numComments":
                        return route.params.numComments
                        case "image":
                  return route.params.image
           }
        }
        return ""
     }
 
   const [vendorId,setVendorId] = useState(getDetails("vendorId"))
   //const [password,setPassword]=useState(getDetails("password"));
   const [vendorName,setVendorName] = useState(getDetails("vendorName"))
   const [availibility,setAvailibility] = useState(getDetails("availibility"))
   const [enableshift,setenableShift] = useState(false)
   const [title,setTitle] = useState(getDetails("title"))
   const [description,setDescription] = useState(getDetails("description"))
    const [price,setPrice] = useState(getDetails("price"))
  //  const [cnic,setcnic] = useState(getDetails("cnic"))
  const [category,setCategory] = useState(getDetails("category"))
  const [hearts,setHearts] = useState(getDetails("hearts"))
  const [numComments,setNumComments] = useState(getDetails("numComments"))
  const [image,setImage] = useState(getDetails("image"))



   const blocked= async ()=>{
     fetch("http://192.168.0.105:3000/blockservice",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        vendorName,availibility,title,description,price,image,category,hearts,numComments
      })
     })
     .then(res=>res.json())
     .then(async (data)=>{
            try {
              await AsyncStorage.setItem('token',data.token)
              Alert.alert(`${title} Blocked`)
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
       
       
       > Welcome {vendorName} </Text>
 
       <Text
       style={{
         fontSize:20,marginLeft:18,marginTop:20
       }}
       
       
       >Your Account Has Been Blocked</Text>
          <Text
       style={{
         fontSize:20,marginLeft:18,marginTop:20
       }}
       
       
       > Title:  {title}</Text>
 
 <Text
       style={{
         fontSize:20,marginLeft:18,marginTop:20
       }}
       
       
       > Description: {description} </Text>
 
 <Text
       style={{
         fontSize:20,marginLeft:18,marginTop:20
       }}
       
       
       > Price:  {price} </Text>
       
       {/* <Text
       style={{
         fontSize:20,marginLeft:18,marginTop:20
       }}
       
       
       > Phone:  {phone} </Text>
 
 <Text
       style={{
         fontSize:20,marginLeft:18,marginTop:20
       }}
       
       
       > Cnic:  {cnic} </Text> */}
      
 
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
 


const styles = StyleSheet.create({
root:{
    flex:1
},
mycard:{
    margin:3
},
cardContent:{
flexDirection:"row",
padding:8
},
mytext:{
fontSize:18,
marginTop:3,
marginLeft:5
},

    root:{
       flex:1,
    },
    inputStyle:{
      marginLeft:18,marginRight:18,marginTop:18
    },
    inputStyleButton:{
      marginLeft:8,marginRight:8,marginTop:8
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
        height: 150,
        alignSelf: 'center',
      }
  })
  
export default BlockedServiceConfirm