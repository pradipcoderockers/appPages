import React from "react";
import { Container, Content, List, ListItem, Drawer, Text, Header, Title, Button, Left, Right, Body, Icon,
    Separator} from 'native-base';
import { AsyncStorage,AppRegistry,StyleSheet,ImageBackground,WebView,Linking,View,TouchableOpacity,TextInput,Image,ScrollView,Keyboard} from 'react-native';
import { NavigationActions } from 'react-navigation';
export default class LogSection extends React.Component 
{
gotoBack = () =>{
this.props.navigation.dispatch(NavigationActions.back())
}
state = {isLoggedIn: false,email:null,password:null} 
   handleEmail = (text) => {
	  console.log(text); 
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   validateEmail = (email) => {
     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
   doLogin = (email, password) => 
   {
		if(!this.validateEmail(email)) 
		{
		 
			alert("Please Enter Valid Email id");
			return false;
		}
		else 
		{
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
			 .then((response) => { return response.json() } ) 
			 .catch((error) => 
			 {
				 alert('Please enter valid email id or password')
				 return false;
			 })
			 .then((response) => 
			 {
				console.log('pradip',response.username)
				if(response.username)
				{
					AsyncStorage.setItem("isLoggedIn", 'yes');
					AsyncStorage.setItem("userDetail", JSON.stringify(response));
					const {navigate} = this.props.navigation;
					this.props.navigation.navigate('Dashboard');
				}
				else
				{
					alert('Please enter valid email id or password')
					return false;	
				}
			    
			 })
		}
   }
render() {
        return (
            <Container>
                <Header>
                    <Left><Button transparent onPress={() =>this.gotoBack()}><Icon name="ios-arrow-back" /></Button></Left>
                    <Body><Title>Log In</Title></Body><Right><Button transparent></Button></Right>
                </Header>
                 <Content>
                 <ScrollView>
                   <Image style={styles.logoImg} source={require('./img/logo.jpg')} /> 
                   
                    <View style = {styles.container}>
					<TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Enter Email Id"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText = {this.handleEmail}/>
					 <TextInput  secureTextEntry={true} style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Enter Password"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText = {this.handlePassword}/>
					<TouchableOpacity
					   style = {styles.submitButton}
					   onClick = {
						  () => this.doLogin(this.state.email,this.state.password)
					   }>
					   <View style = {styles.submitButton}>
						<Text style = {styles.submitButtonText}> Sign In </Text>
					   </View>
					</TouchableOpacity>
          <Text style ={styles.forgetPassword}>Forgotten password?</Text>
          <Text style ={styles.forgetPassword} >I dont have a Work.Management account</Text>
         
		 </View>
                   </ScrollView>
                </Content>
                
            </Container>
        );
    }
}
const styles = StyleSheet.create({
  container: {paddingTop: 30,margin: 15,flex: 1},
  forgetPassword:{fontSize :13, marginTop:20, textAlign:'center'},
  footer :{position: 'absolute',bottom: 10,justifyContent: 'center', paddingLeft:12},
  footerText:{fontSize :13, textAlign:'center' },
  input: {padding:10,marginBottom: 10,height:60,borderColor: '#f0f2f5',backgroundColor:'#ffffff',borderWidth: 2,},
  textinput:{padding:10,marginBottom: 10,height: 120,borderColor: '#000000',backgroundColor: '#ffffff',borderWidth: 2,},
  submitButton: {backgroundColor: '#20a8d8',padding: 10,height: 60, justifyContent: 'center',},
  submitButtonText:{color: 'white',backgroundColor:'#20a8d8',padding:10,borderRadius:0,padding:10,height:45,textAlign:'center', fontWeight: 'bold',},
  backgroundImage:{flex: 1,alignSelf: 'stretch',width: null,},
  logoImg:{flexDirection: 'row',justifyContent: 'center', marginTop:60,alignItems: 'center',resizeMode: 'cover', alignSelf: 'center',},
})
