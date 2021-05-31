import React from 'react';
import Colors from '../constants/color';
// import Dashboard from './Dashboard';
// import Services from './Services/MyServices';
import AdminDashboard from './AdminDashboard';
import Blocked from './Blocked';
import CurrentClient from './CurrentClients';
import CurrentVendors from './CurrentVendors';
import CurrentServices from './CurrentServices';
import UnVerifiedVendors from './UnVerifiedVendors';
import BlockedServicesList from './BlockedServicesList';




// import EditService from './Services/EditService';
// import Appointments from './Appointments/AppointmentsOverview';
// import Payments from './Payments/PaymentsOverview';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerContent } from '../components/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DashboardScreen = (props) => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
      {/* <Drawer.Screen name="Dashboard" component={Dashboard} 
        options={{
          headerShown: true,
          headerTintColor: Colors.secondary,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
          headerLeft: null,
          headerRight: () => (
            <Icon name="briefcase-plus" size={28} color={'white'}/>
          )
        }}
      /> */}
      <Drawer.Screen name="Dashboard" component={AdminDashboard} 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary,
           },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
 },
          headerLeft: null,
          // headerRight: () => (
          //   <Icon name="briefcase-plus" size={28} color={'white'}/>
          // )
        }}
      />
       <Drawer.Screen name="Blocked" component={Blocked} 
         options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary,
           },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
 },
          headerLeft: null,
          // headerRight: () => (
          //   <Icon name="briefcase-plus" size={28} color={'white'}/>
          // )
        }}
      />
    
<Drawer.Screen name="UnVerifiedVendors" component={UnVerifiedVendors} 
         options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.primary,
           },
           headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
 },
          headerLeft: null,
          // headerRight: () => (
          //   <Icon name="briefcase-plus" size={28} color={'white'}/>
          // )
        }}
      />


    </Drawer.Navigator>
  )
}

export default DashboardScreen;