import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';


export function DrawerContent(props) {
  const { employeeName, profileImage } = useSelector(state => state.profile);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image
                source = {{
                  uri: profileImage
                }}
                size = {50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
              <Title style={styles.title}>{employeeName}</Title>
                {/* <Caption style={styles.caption}>@omarfarooq.khan</Caption> */}
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
               icon={({ color, size }) => (
                 <MaterialIcons name="handyman" color={color} size={size} />
               )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate('AdminDashboard');
              }}
            />
             <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="book-online" color={color} size={size} />
              )}
              label="Blocked"
              onPress={() => {
                props.navigation.navigate('Blocked');
              }}
            />

          <DrawerItem
             
             icon={({ color, size }) => (
               <MaterialIcons name="support-agent" color={color} size={size} />
             )}
             label="UnVerifiedVendors"
             onPress={() => {
               props.navigation.navigate('UnVerifiedVendors');
             }}
           />

          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Logout"
          onPress={async() => {
            try{
              await AsyncStorage.removeItem('token');
              await AsyncStorage.removeItem('email');
              props.navigation.replace('Login');
            } catch(e) {
              Alert.alert("Error:",e);
            }
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  }
});
