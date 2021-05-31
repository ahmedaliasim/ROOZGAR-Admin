import React,{ useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import Colors from '../constants/color';

const LoadingScreen = (props) => {
  const dispatch = useDispatch();
  const detectLogin = async() => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
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
      props.navigation.replace("DashboardScreen");
    }
    else
        props.navigation.replace("Login");
        
  }

  useEffect(()=>{
   detectLogin();
  },[]);

  return (
   <View style={styles.loading}> 
    <ActivityIndicator size="large" color="green" />
   </View>
  );
};

const styles= StyleSheet.create({
    loading:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: Colors.primary
    }
});

export default LoadingScreen;
