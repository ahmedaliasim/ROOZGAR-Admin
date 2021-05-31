import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,FlatList,Alert,TouchableOpacity} from 'react-native';
import {Card,FAB} from 'react-native-paper'
import {useSelector,useDispatch} from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import Button from '../components/buttons';

const CurrentClient = ({navigation,route})=>{


    const [isDisabled,setIsDisabled] = useState(false)
    //  const [data,setData] = useState([])
    //  const [loading,setLoading]= useState(true)
    const dispatch  = useDispatch()
    const {data,loading} =  useSelector((state)=>{
        return state
    })

    console.log(data,loading)
   
     const fetchData = ()=>{
        fetch("http://192.168.0.105:3000/getclient")
        .then(res=>res.json())
        .then(results=>{
    
            // setData(results)
            // setLoading(false)
          dispatch({type:"ADD_DATA",payload:results})
          dispatch({type:"SET_LOADING",payload:false})

        }).catch(err=>{
            Alert.alert("someting went wrong")
        })
     }

     const alertBlock = () => {

        Alert.alert("blocked successfully")

     }

     const alertunBlock = () => {

        Alert.alert("Unblocked successfully")

     }

     const deleteEmploye = ()=>{
        fetch("http://192.168.0.105:3000/delete",{
            method:"post",
            headers:{
             'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                id:_id
            })
        })
        .then(res=>res.json())
        .then(deletedEmp=>{
            Alert.alert(`${deletedEmp.name} deleted`)
            props.navigation.navigate("CurrentClients")
        })
        .catch(err=>{
         Alert.alert("someting went wrong")
        })
    }
    
     useEffect(()=>{
          fetchData() 
     },[])

    
     const starfunc = () => {

        if(isDisabled){

            setIsDisabled(false)
        }
        else{

            setIsDisabled(true)
        }

     }
    const renderList = ((item)=>{
          return(
            <Card style={styles.mycard}
            
            onPress={()=>navigation.navigate("ClientProfile", {item})}
           //onPress = {() => console.log("item data", item)}
            >
            <View style={styles.cardView}>
                 <Image
                style={{width:60,height:60,borderRadius:30}}
                source={{uri:item.image}}
                
                />
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.userName}</Text>   
                    <Text style={styles.text}>{item.email}</Text> 
                  
                </View>
                {/* <View style= {styles.fab1}>
            <TouchableOpacity  onPress={()=>navigation.navigate("BlockedEmp", {item})}>
                <Image source={require('../Images/Block-512.png')} style= {styles.fab} />
                </TouchableOpacity>
                </View> 
                 <View style= {styles.fab1}>
            <TouchableOpacity onPress = {alertunBlock}>
                <Image source={require('../Images/Block-512off.png')} style= {styles.fab} />
                </TouchableOpacity>
                </View>  */}
               
{/* 
{/* 
                <FAB  onPress={()=>navigation.navigate("Create")}
                    style={styles.fab}
                    small={false}
                    icon= { isDisabled ? "disabled" : "enabled" }
                    theme={{colors:{accent:"#006aff"}}}
        
                />
                 */}
                 {/* <TouchableOpacity onPress = {starfunc}>

                <AntDesign name={ isDisabled ? "staro" : "star" } size={24} color="black" />
                </TouchableOpacity> */}
            </View>
            
           </Card>
          )
    })
    
    
   return(
       <View style={{flex:1}}>
    
        <FlatList
              data={data}
              renderItem={({item})=>{
                return renderList(item)
              }}
              keyExtractor={item=>item._id}
              onRefresh={()=>fetchData()}
              refreshing={loading}
              />
        
        <Button 
        mode="contained"
        style={styles.inputStyleButton}
        onPress={()=>navigation.navigate("BlockedClientList")}
       title= "Blocked Clients">

      </Button>
           
          
       </View>
     
   ) 
}

const styles = StyleSheet.create({
    mycard:{
        margin:5,
       
    },
    cardView:{
         flexDirection:"row",
         padding:6
    },
    text:{
        fontSize:18,
    },
    fab: {
     
        marginTop:10,
        marginBottom: 10,
        width: 50,
        height: 50,
        
        marginLeft: 30
        
      },
      fab1: {
     
        justifyContent: "center",
        alignSelf: 'center',
        
        
      },
})

export default CurrentClient;