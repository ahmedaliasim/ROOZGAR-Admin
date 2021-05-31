import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Color from '../constants/color';
//import Buttonz from '../components/buttons';

const DisableVendor = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: 'white' }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View>
          <Text
            style={styles.text1}>
            Welcome to Disable Vendors Page 
          </Text>
          <View style={styles.paddingHeader}> 
          <View style={styles.buttonz}>
          <Button
            onPress={() => navigation.navigate('AdminDashboard')}
            title="Back"
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
  
  text1: {
     fontSize: 25,
     textAlign: 'center',
     marginBottom: 16,
  },
  paddingHeader: {
    marginTop: 200,  
  },

});
export default DisableVendor;
