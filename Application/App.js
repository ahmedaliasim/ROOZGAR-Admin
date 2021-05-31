import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image , StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignUp from './pages/SignUp';
import AdminDashboard from './pages/AdminDashboard';
import ClientsComplaints from './pages/ClientsComplaints';
import CurrentClient from './pages/CurrentClients';
import DisableVendor from './pages/DisableVendor';
import Profile from './pages/Profile';
import Login from './pages/Login';
import UpdateProfile from './pages/UpdateProfile';
import BlockedEmpConfirm from './pages/BlockedEmpConfirm';
import CurrentAdmin from './pages/CurrentAdmin';
import ClientProfile from './pages/ClientProfile';
import BlockedClientConfirm from './pages/BlockedClientConfirm';
import CurrentVendors from './pages/CurrentVendors';
import VendorProfile from './pages/VendorProfile';
import BlockedVendorConfirm from './pages/BlockedVendorConfirm';
import BlockedEmpList from './pages/BlockedEmpList';
import UnblockEmpConfirm from './pages/UnblockEmpConfirm';
import BlockedClientList from './pages/BlockedClientList';
import BlockedVendorList from './pages/BlockedVendorList';
import DashboardScreen from './pages/DashboardScreen';
import LoadingScreen from './pages/LoadingScreen';
import UnblockVendorConfirm from './pages/UnblockVendorConfirm';
import UnblockClientConfirm from './pages/UnblockClientConfirm';
import CurrentServices from './pages/CurrentServices';
import ServiceProfile from './pages/ServiceProfile';
import VendorServiceList from './pages/VendorServiceList';
import UnVerifiedVendors from './pages/UnVerifiedVendors';

import BlockedServiceConfirm from './pages/BlockedServiceConfirm';
import BlockedServicesList from './pages/BlockedServicesList';
import Blocked from './pages/Blocked';



import CustomSidebarMenu from './CustomSidebarMenu';
import Color from './constants/color';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers/reducer'

const store  = createStore(reducer)

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const myOptions = {
  title: ' Welcome to Rozgaar ',
  headerTintColor: '#fff',
  headerStyle: {
              backgroundColor: Color.primary,
             },
             headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
   },
}
const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require('./Images/PicsArt_03-21-12.29.59.png')}
          style={{ width: 50, height: 50, marginLeft: 7 }}
        />
      </TouchableOpacity>
    </View>
  );
};

// function firstScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator initialRouteName="FirstPage">
//       <Stack.Screen
//         name="SignUp"
//         component={SignUp}
//         options={{
//           title: ' Welcome to Rozgaar ',
         
//           headerStyle: {
//             backgroundColor: Color.primary,
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function secondScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="AdminDashboard"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: Color.primary,
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <Stack.Screen
//         name="AdminDashboard"
//         component={AdminDashboard}
//         options={{
//           title: 'Admin Dashboard',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

// function thirdScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="ClientsComplaints"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: Color.primary,
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <Stack.Screen
//         name="ClientsComplaints"
//         component={ClientsComplaints}
//         options={{
//           title: 'ClientsComplaints',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function forthScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="CurrentClients"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: Color.primary,
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <Stack.Screen
//         name="CurrentClients"
//         component={CurrentClients}
//         options={{
//           title: 'CurrentClients',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function fifthScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="CurrentVendors"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: Color.primary,
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <Stack.Screen
//         name="CurrentVendors"
//         component={CurrentVendors}
//         options={{
//           title: 'CurrentVendors',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function sixthScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="DisableVendor"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerStructure navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: Color.primary,
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//       <Stack.Screen
//         name="DisableVendor"
//         component={DisableVendor}
//         options={{
//           title: 'DisableVendor',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function seventhScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator initialRouteName="Login">
//       <Stack.Screen
//         name="Login"
//         component={Login}
//         options={{
//           title: ' Welcome to Rozgaar ',
         
//           headerStyle: {
//             backgroundColor: Color.primary,
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }
// function eigthScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator initialRouteName="Profile">
//       <Stack.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           title: ' Welcome to Profile',
         
//           headerStyle: {
//             backgroundColor: Color.primary,
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

function App() {
  return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContentOptions={{
//           activeTintColor: '#66c238',
//           itemStyle: { marginVertical: 5 },
//         }}
//         drawerContent={(props) => <CustomSidebarMenu {...props} />}>
         
//         <Drawer.Screen
//           name="SignUp"
//           options={{ drawerLabel: 'SignUp' }}
//           component={firstScreenStack}
//         />
//          <Drawer.Screen
//           name="Profile"
//           options={{ drawerLabel: 'Profile' }}
//           component={eigthScreenStack}
//         />
//          <Drawer.Screen
//           name="Login"
//           options={{ drawerLabel: 'Login' }}
//           component={seventhScreenStack}
//         />
//         <Drawer.Screen
//           name="AdminDashboard"
//           options={{ drawerLabel: 'Admin Dashboard' }}
//           component={secondScreenStack}
//         />
//         <Drawer.Screen

//           name="ClientsComplaints"
//           options={{  drawerLabel: () => null }}
//           component={thirdScreenStack} 
//         />
//         <Drawer.Screen
//           name="CurrentClients"
//           options={{  drawerLabel: () => null }}
//           component={forthScreenStack}
//         />
//         <Drawer.Screen
//           name="CurrentVendors"
//           options={{  drawerLabel: () => null }}
//           component={fifthScreenStack}
//         />
//         <Drawer.Screen
//           name="DisableVendor"
//           options={{  drawerLabel: () => null }}
//           component={sixthScreenStack}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
<View style={styles.container}>
     
<Stack.Navigator>
<Stack.Screen
   name="LoadingScreen"
   component={LoadingScreen}
   options={{headerShown: false}}
    />
<Stack.Screen 
   name="SignUp"
   component={SignUp}
   options={{...myOptions,title:"Welcome To Rozgaar"}} 
   />
    <Stack.Screen 
   name="Login"
   component={Login}
   options={{...myOptions,title:" Login"}} 
   />
   <Stack.Screen
   name="AdminDashboard"
   component={AdminDashboard}
   options={{...myOptions,title:"Welcome To Admin Dashboard "}} 
    />
  <Stack.Screen 
  name="CurrentClient" 
  component={CurrentClient}
   options={{...myOptions, title:" Current Clients"}} />
 
  <Stack.Screen
   name="Profile"
   component={Profile}
   options={{...myOptions,title:" Employee Profile"}} 
    />
   <Stack.Screen
   name="UpdateProfile"
   component={UpdateProfile}
   options={{...myOptions,title:"Update Profile"}} 
    />
     <Stack.Screen
   name="BlockedEmpConfirm"
   component={BlockedEmpConfirm}
   options={{...myOptions,title:" Blocked Profile"}} 
    />
     <Stack.Screen
   name="CurrentAdmin"
   component={CurrentAdmin}
   options={{...myOptions,title:" Employee Profile"}} 
    />
    <Stack.Screen
   name="ClientProfile"
   component={ClientProfile}
   options={{...myOptions,title:" Client Profile"}} 
    />
    <Stack.Screen
   name="BlockedClientConfirm"
   component={BlockedClientConfirm}
   options={{...myOptions,title:" Blocked Client Profile"}} 
    />
     <Stack.Screen
   name="CurrentVendors"
   component={CurrentVendors}
   options={{...myOptions,title:" Current Vendor Profile"}} 
    />
     <Stack.Screen
   name="VendorProfile"
   component={VendorProfile}
   options={{...myOptions,title:" Vendor Profile"}} 
    />
       <Stack.Screen
   name="BlockedVendorConfirm"
   component={BlockedVendorConfirm}
   options={{...myOptions,title:" Confirm"}} 
    />
       <Stack.Screen
   name="BlockedEmpList"
   component={BlockedEmpList}
   options={{...myOptions,title:" Blocked Employee Profile"}} 
    />
       <Stack.Screen
   name="UnblockEmpConfirm"
   component={UnblockEmpConfirm}
   options={{...myOptions,title:" UnBlocked Employee Profile"}} 
    />
      <Stack.Screen
   name="BlockedClientList"
   component={BlockedClientList}
   options={{...myOptions,title:" Blocked Client Profile"}} 
    />
      <Stack.Screen
   name="BlockedVendorList"
   component={BlockedVendorList}
   options={{...myOptions,title:" Blocked Vendor Profile"}} 
    />
      <Stack.Screen
   name="DashboardScreen"
   component={DashboardScreen}
   options={{headerShown: false}}
    />
       <Stack.Screen
   name="UnblockVendorConfirm"
   component={UnblockVendorConfirm}
   options={{...myOptions,title:" UnBlocked Vendor Profile"}} 
    />   
     <Stack.Screen
    name="UnblockClientConfirm"
    component={UnblockClientConfirm}
    options={{...myOptions,title:" UnBlocked Client Profile"}} 
     />
       <Stack.Screen
    name="CurrentServices"
    component={CurrentServices}
    options={{...myOptions,title:" Services List"}} 
     />
          <Stack.Screen
    name="ServiceProfile"
    component={ServiceProfile}
    options={{...myOptions,title:" Service Profile"}} 
     />
         <Stack.Screen
    name="VendorServiceList"
    component={VendorServiceList}
    options={{...myOptions,title:" Vendor Service List"}} 
     />
          <Stack.Screen
    name="UnVerifiedVendors"
    component={UnVerifiedVendors}
    options={{...myOptions,title:" UnVerified Vendors"}} 
     />
      

<Stack.Screen
    name="BlockedServiceConfirm"
    component={BlockedServiceConfirm}
    options={{...myOptions,title:" Confirm"}} 
     />


<Stack.Screen
    name="BlockedServicesList"
    component={BlockedServicesList}
    options={{...myOptions,title:" Blocked Services List"}} 
     />
<Stack.Screen
    name="Blocked"
    component={Blocked}
    options={{...myOptions,title:" Blocked"}} 
     />

</Stack.Navigator>



</View>
  );
}


export default ()=>{
  return (
    <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
    </Provider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
