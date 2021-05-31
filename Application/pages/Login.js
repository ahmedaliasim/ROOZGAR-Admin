import React,{useState} from 'react';
import {TextInput} from 'react-native-paper';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Image,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../components/buttons';
import { useDispatch } from 'react-redux';



const Login = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')
  const [enableshift,setenableShift] = useState(false)
  const dispatch = useDispatch();

  const sendCred = async (props)=>{
    fetch("http://192.168.0.105:3000/signin",{
      method:"POST",
      headers: {
       'Content-Type': 'application/json'
     },
     body:JSON.stringify({
       "email":email,
       "password":password
     })
    })
    .then(res=>res.json())
    .then(async (data)=>{
      if(data.employee){
           try {
             await AsyncStorage.setItem('token',data.token)
             await AsyncStorage.setItem('employee', JSON.stringify(data.employee));
              try {
                var employee = await AsyncStorage.getItem('employee');
                if (employee !== null){
                  employee = JSON.parse(employee);
                  const profile = {
                    employeeName: employee.name,
                    profileImage: employee.picture
                  };
                  dispatch({type: "STORE_EMPLOYEE_DATA", payload: profile});
                }
              } catch (e) {
                  console.log("Error: "+e);
              }
             props.navigation.navigate("DashboardScreen")
           } catch (e) {
             console.log("error hai",e)
              Alert(e)
           }
          }
          else if(data.error) {
            Alert.alert("Error",data.error);
    }
    })
 }

  return (
   
    <KeyboardAvoidingView behavior="position" style={styles.root} enabled={enableshift}>
  
      <Image
         style={styles.menuIcon1}
         source={require('../Images/rozgaar.png')}
      />
      <TextInput
        label='Email'
        mode="outlined"
        value={email}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"green"}}} 
        onChangeText={(text)=>setEmail(text)}
     
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>{setPassword(text)}}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"green"}}} 
     
      />
      <Button 
        mode="contained"
        style={styles.inputStyleButton}
        title= "Login"
       onPress={() => sendCred(props)}>
      </Button>

      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20
      }}
      onPress={()=>props.navigation.navigate("SignUp")}
      >dont have a account ?</Text>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
   
  );
};
const styles=StyleSheet.create({
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

export default Login;