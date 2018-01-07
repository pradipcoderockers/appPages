import React, { Component } from 'react';
import { AppRegistry,StyleSheet,ImageBackground,WebView,Linking,View,TouchableOpacity,TextInput,Image,} from 'react-native';
//import Orientation from 'react-native-orientation';
import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
import { DrawerNavigator} from "react-navigation";
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

//const width = '80%';
const marginTop = '50%';

export default class LoginHome extends Component {
  

  componentDidMount() {
 //   Orientation.addOrientationListener(this._orientationDidChange)
  }

  componentWillUnmount() {
   // Orientation.removeOrientationListener(this._orientationDidChange)
  }

  _orientationDidChange(orientation) {
   // console.log(orientation)
  }

   //source={require('./img/logo.jpg')}
  render() {
      const url = 'http://www.LafayetteProperties.net';
    return (
      <ImageBackground source={require('./img/bg-1.png')}  style={styles.backgroundImage}>
      <Image style={styles.logoImg} source={require('./img/logo.png')} />
			<View style={styles.welcomeBox}  >
				<Text style={styles.welcomeText} >Welcome to Work.Managements</Text>
				<Text style={styles.quotes} >Let us help you to find exciting ways to communicate, collaborate </Text>
				<View style={styles.buttonSeCTION}>
			  <View style={styles.signUp}>
			  <TouchableOpacity>
                     <Text style = {styles.signUpText}>
                      Sign Up
                     </Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{backgroundColor: 'powderblue',flex:1 }}/>
                  <View style={styles.login}> 
                  <TouchableOpacity  style = {styles.rightLogiN}>
                     <Text style = {styles.LogInText}>
                      Log In
                     </Text>
                  </TouchableOpacity>
                 </View>
      </View>
	 <View style={{flex:1 ,marginTop:80}} ><Text style={styles.TouchIdText}>Login With Touch ID</Text></View>
    </View>
    <View style ={styles.footer}>
			<Text style ={styles.footerText}>@2017 The Openmarket Europe Ltd all right reserved</Text>
       </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  footer :{
    flex: 1,position: 'absolute',
    bottom: 10,justifyContent: 'center'},
    footerText:{textAlign:'center',fontSize :12,alignSelf:'center',paddingLeft:40},
  TouchIdText:{textAlign:'center',backgroundColor: '#20a8d8',padding:15,color:'#ffffff',fontWeight:'bold'},
  buttonSeCTION:{width:null, alignSelf: 'stretch',flex:1,flexDirection:'row' },
  signUp:{justifyContent: 'flex-start'},
  signUpText:{padding:55,paddingTop:15,width:null,paddingBottom:15,color:'#ffffff',backgroundColor: '#20a8d8',borderColor:'#20a8d8',borderWidth:1,fontWeight:'bold'},
  rightsignUp:{alignSelf: 'flex-end', },
  login:{backgroundColor: '#ffffff',justifyContent: 'flex-end',},
  LogInText:{padding:55,paddingTop:15,width:null,paddingBottom:15,color:'#000000',borderColor:'#20a8d8',borderWidth:1,fontWeight:'bold'},
  rightLogiN:{alignSelf: 'flex-end', },
  backgroundImage:{flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',textAlign:'center',height:null,
    width:null, flexGrow:1,},
   container: {
    justifyContent: 'center',textAlign:'center'
      // paddingTop: 30,  margin: 15,flex: 1
   },
   logoImg:{flexDirection: 'row',
    justifyContent: 'center', marginTop:60,
    alignItems: 'center',resizeMode: 'cover', alignSelf: 'center',
  },
  welcomeBox:{marginTop,padding:10,backgroundColor:'rgba(0,0,0,0)', justifyContent: 'center',},
  welcomeText:{
    alignItems: 'center',alignSelf: 'center', fontSize:22,fontWeight: 'bold',

  },
  quotes:{textAlign: 'center',margin:30,fontSize:15,marginTop:10,},
//


   forgetPassword:{fontSize :13, marginTop:20, textAlign:'center' },

   
   input: {padding:10,
       marginBottom: 10,
      height: 60,
      borderColor: '#f0f2f5',
      backgroundColor: '#ffffff',
      borderWidth: 2,
   },
   textinput:{padding:10,
      marginBottom: 10,
      height: 120,
      borderColor: '#000000',
      backgroundColor: '#ffffff',
      borderWidth: 2,},
      
   submitButton: {
      backgroundColor: '#20a8d8',
      padding: 10,
      height: 60, justifyContent: 'center',
   },
   submitButtonText:{
      color: 'white',
      backgroundColor:'#20a8d8',
      padding:10,
      borderRadius:0,
      padding:10,
      height:45,
      textAlign:'center', fontWeight: 'bold',
      
   },
   backgroundImage:{
	  flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
 
})

AppRegistry.registerComponent('LoginHome', () => LoginHome);
