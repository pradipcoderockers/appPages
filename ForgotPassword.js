import React, { Component } from 'react';
import Dashboard from './Dashboard';
import { AppRegistry,StyleSheet,ImageBackground,Text,WebView,Linking,View,TouchableOpacity,TextInput,Image,} from 'react-native';
export default class forgotpassword extends Component {
	state = {
    isLoggedIn: false //true //
  } 
static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
    headerStyle:{ backgroundColor: '#07142d'},
    headerTitleStyle:{ color: '#ffffff',fontSize:20},
    headerTintColor: '#ffffff',
  });
state = {
  email: '',
   }
   handleEmail = (text) =>{
      this.setState({ email: text })
   }
   validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
   forgotPass = (email) => 
   {
		if (!this.validateEmail(email)) 
		{
			alert("Please Enter Valid Email id");
			return false;
		}
		else 
		{
			//alert('email: ' + email + ' password: ' + password)
		}
		 this.setState({isLoggedIn: true});
		 return false;
		 fetch('https://api-test.work.management/api/login', {
		  method: 'POST',
		  headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			email: email,
			password: password,
		  }),
		})
		.then(function(response){
			return response.json();   
		})
		.then(function(data){ 
			
		});
   }
  render() {
      const url = 'http://www.LafayetteProperties.net';
      if(this.state.isLoggedIn)
      {
		  return <Dashboard/>
	  }
    return (<View  style={styles.container}>
      <Image style={styles.logoImg} source={require('./img/logo.jpg')} />
		    <View style = {styles.container}>
					<TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Enter Email Id"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					<TouchableOpacity
					   style = {styles.submitButton}
					   onPress = {
						  () => this.forgotPass(this.state.email)
					   }>
					   <View style = {styles.submitButton}>
						<Text style = {styles.submitButtonText}> Reset </Text>
					   </View>
					</TouchableOpacity>
          <Text style ={styles.forgetPassword}>Forgotten password?</Text>
          <Text style ={styles.forgetPassword} >I dont have a Work.Management account</Text>
		 </View>
     <View style ={styles.footer}>
					 
					  <Text style ={styles.footerText} >@2017 The Openmarket Europe Ltd all right reserved</Text>
            </View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 30,  margin: 15,flex: 1
   },
   forgetPassword:{fontSize :13, marginTop:20, textAlign:'center'},

   footer :{
    position: 'absolute',
    bottom: 10,justifyContent: 'center', paddingLeft:12},

    footerText:{fontSize :13, textAlign:'center' },
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
 logoImg:{paddingTop:50,marginTop: 100,marginLeft:30}
})

AppRegistry.registerComponent('forgotpassword', () => forgotpassword);
