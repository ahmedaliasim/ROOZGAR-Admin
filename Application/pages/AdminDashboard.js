import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Color from '../constants/color';
//import Buttonz from '../components/buttons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AdminDashboard = ({ navigation }) => {


const logout = async() => {

  
  try{
    await AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => {
      navigation.navigate('SignUp');
    });
  } catch(e) {
    Alert.alert("Error:",e);
  }


  
}


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, padding: 16 }}>
        
        <View>
           {/* <TouchableOpacity onPress={() => navigation.navigate('UnVerifiedVendors')}>
            <Image
              style={styles.menuIcon}
              source={require('../Images/viewclients.png')}
            />
          </TouchableOpacity>  */}
             <TouchableOpacity onPress={() => navigation.navigate('CurrentAdmin')}>
            <Image
              style={styles.menuIcon3}
              source={require('../Images/viewadmin.png')}
            />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('CurrentClient')}>
            <Image
              style={styles.menuIcon1}
              source={require('../Images/curentclient.png')}
            />
          </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('CurrentVendors')}>
            <Image
              style={styles.menuIcon2}
              source={require('../Images/viewvendors.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('CurrentServices')}>
            <Image
              style={styles.menuIcon2}
              source={require('../Images/currentservices.png')}
            />
          </TouchableOpacity>
       
        
          <View style={styles.paddingHeader}>
            <View style={styles.buttonz}>
              <Button
                onPress={() => {logout(navigation)} }
                title="Logout"
                color={Color.accent}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonz: {
    padding: 10,
  },

  paddingHeader: {
    marginTop: 200,
  },
  menuIcon: {
    marginBottom: 13,
    width: 320,
    height: 39,
    alignSelf: 'center',
  },
  menuIcon1: {
    marginBottom: 13,
    width: 320,
    height: 36,
    alignSelf: 'center',
  },
  menuIcon2: {
     marginBottom: 13,
    width: 315,
    height: 38,
    alignSelf: 'center',
  },
  menuIcon3: {
    marginBottom: 13,
    width: 320,
    height: 40,
    alignSelf: 'center',
  },
});

export default AdminDashboard;
