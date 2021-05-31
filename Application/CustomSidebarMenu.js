import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Image
        source={require('./Images/rozgaar.png')}
        style={styles.sideMenuProfileIcon}
      />
      <View style = {styles.text}>
      <Text> Admin Console </Text>  
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

      </DrawerContentScrollView>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 150,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    alignSelf: 'center',
  },

});

export default CustomSidebarMenu;
