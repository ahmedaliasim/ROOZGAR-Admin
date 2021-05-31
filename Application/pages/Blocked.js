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


const Blocked = ({ navigation }) => {




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
             <TouchableOpacity onPress={() => navigation.navigate('BlockedServicesList')}>
            <Image
              style={styles.menuIcon1}
              source={require('../Images/blockedservices.png')}
            />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('BlockedClientList')}>
            <Image
              style={styles.menuIcon1}
              source={require('../Images/blockedclients.png')}
            />
          </TouchableOpacity>

           <TouchableOpacity onPress={() => navigation.navigate('BlockedVendorList')}>
            <Image
              style={styles.menuIcon2}
              source={require('../Images/blockedvendors.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('BlockedEmpList')}>
            <Image
              style={styles.menuIcon2}
              source={require('../Images/blockedemployee.png')}
            />
          </TouchableOpacity>
    
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

export default Blocked;
