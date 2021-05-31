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

  const UpdateProfile  = ({navigation,route})=>{
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
  const [modal,setModal] = useState(false)
  const [enableshift,setenableShift] = useState(false)
  const [name,setName] = useState(getDetails("name"))

  const sendCred= async ()=>{
     fetch("http://10.0.2.2:3000/signup",{
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


    const updateDetails = ()=>{
        fetch("http://192.168.0.105:3000/update",{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id:route.params._id,
                name,
                email,
                phone,
                password,
                picture,
                
            })
        })
        .then(res=>res.json())
        .then(data=>{
            Alert.alert(`${data.name} is updated successfuly`)
            navigation.navigate("AdminDashboard")
        })
        .catch(err=>{
          Alert.alert("someting went wrong")
      })
    }



  const pickFromGallery = async ()=>{
    const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if(granted){
         let data =  await ImagePicker.launchImageLibraryAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })
          if(!data.cancelled){
              let newfile = { 
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}` 
                
            }
              handleUpload(newfile)
          }
    }else{
       Alert.alert("you need to give up permission to work")
    }
 }
 const pickFromCamera = async ()=>{
    const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
    if(granted){
         let data =  await ImagePicker.launchCameraAsync({
              mediaTypes:ImagePicker.MediaTypeOptions.Images,
              allowsEditing:true,
              aspect:[1,1],
              quality:0.5
          })
        if(!data.cancelled){
            let newfile = { 
              uri:data.uri,
              type:`test/${data.uri.split(".")[1]}`,
              name:`test.${data.uri.split(".")[1]}` 

          }
            handleUpload(newfile)
        }
    }else{
       Alert.alert("you need to give up permission to work")
    }
 }


 const handleUpload = (image)=>{
      const data = new FormData()
      data.append('file',image)
      data.append('upload_preset','rozgaarApp')
      data.append("cloud_name","ahmed123")

      fetch("https://api.cloudinary.com/v1_1/ahmed123/image/upload",{
          method:"post",
          body:data
      }).then(res=>res.json()).
      then(data=>{
          setPicture(data.url)
          setModal(false)
      }).catch(err=>{
          Alert.alert("error while uploading")
      })
      
 }

 
  return (
  
   <KeyboardAvoidingView behavior="position" style={styles.root} enabled={enableshift}>
     <ScrollView>
     <Image
              style={styles.menuIcon1}
              source={require('../Images/rozgaar.png')}
            />
             <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      > Welcome {name} </Text>

      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      
      >Update Your Account</Text>
       <TextInput
                label='Name'
                style={styles.inputStyle}
                value={name}
                onFocus={()=>setenableShift(false)}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
      <TextInput
        label='Email'
        mode="outlined"
        value={email}
        style={styles.inputStyle}
        theme={{colors:{primary:"blue"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={null}
        onChangeText={(text)=>{setPassword(text)}}
        style={styles.inputStyle}
        theme={{colors:{primary:"blue"}}}
     
      />
       <TextInput
                label='phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text =>setPhone(text)}
            />
     
      <Button 
             style={styles.inputStyle}
             icon={picture==""?"upload":"check"}
              mode="contained" 
              theme={theme}
              title = "Upload Picture"
              onPress={() => setModal(true)}>
                    
             </Button>
            
          
          
             
     
             
             <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button icon="camera"
                         theme={theme}
                        mode="contained"
                        title="camera"
                         onPress={() => pickFromCamera()}>
                                
                        </Button>
                        <Button 
                        icon="image-area"
                         mode="contained"
                         theme={theme}
                         title="gallery"
                          onPress={() => pickFromGallery()}>
                                
                        </Button>
                  </View>
                <Button 
                 theme={theme}
                 title="cancel"
                onPress={() => setModal(false)}>
                        
                </Button>
              </View>
             </Modal>
<View>
     

      <Button 
             style={styles.inputStyleButton}
             
              mode="contained" 
              title = "Update details"
              onPress={() => updateDetails()}>
                   
             </Button>
             </View>    
     
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

export default UpdateProfile;