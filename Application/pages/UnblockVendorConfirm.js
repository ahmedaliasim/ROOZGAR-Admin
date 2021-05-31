import React from 'react';
import { StyleSheet, Text, View ,Image,Linking,Platform,Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card} from 'react-native-paper'
import { MaterialIcons,Entypo} from '@expo/vector-icons'
import Button from '../components/buttons';

const UnBlockVendorConfirm = (props)=>{

   const {_id,userName,email,password,phone,image} = props.route.params.item
  //console.log(route.params)
  
   const deleteEmploye = ()=>{
       fetch("http://192.168.0.105:3000/unblockvendor",{
           method:"post",
           headers:{
            'Content-Type': 'application/json'
           },
           body:JSON.stringify({
               id:_id
           })
       })
       .then(res=>res.json())
       .then(deletedEmp=>{
           Alert.alert(`${deletedEmp.userName} Unblocked`)
           props.navigation.navigate("CurrentVendors")
       })
       .catch(err=>{
        Alert.alert("someting went wrong")
       })
   }
   const openDial=()=>{
        if(Platform.OS === "android"){
           Linking.openURL(`tel:${phone}`)
        }else{
           Linking.openURL(`telprompt:${phone}`)
        }
   }
  return (
    <View style={styles.root}>
    <LinearGradient
     colors={["#233329","#63d471"]}
     style={{height:"20%"}}
     />
     <View style={{alignItems:"center"}}>
         <Image
        style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}
        source={{uri:image}}
        /> 
     </View>
     <View style={{alignItems:"center",margin:15}}>
         <Title>{userName}</Title>
         
     </View>
     <Card style={styles.mycard} onPress={()=>{
         Linking.openURL(`mailto:${email}`)
     }}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={32} color="#006aff" />
          <Text style={styles.mytext}>{email}</Text>
        </View>
     </Card>
     <Card style={styles.mycard} onPress={()=>openDial()}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={32} color="#006aff" />
          <Text style={styles.mytext}>{phone}</Text>
        </View>
     </Card>
     {/* <Card style={styles.mycard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={32} color="#006aff" />
          <Text style={styles.mytext}>{salary}</Text>
        </View>
     </Card> */}
     
         
         <View style={{flexDirection:"row",justifyContent:"space-around",padding:5}}>  
        
        <Button 
         icon="delete"
         mode="contained"
         theme={theme}
         title = "UnBlock Confirm"
          onPress={() => deleteEmploye()}>
            
        </Button>

            
        
     </View>
    

  </View>
)
}

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
  
export default UnBlockVendorConfirm