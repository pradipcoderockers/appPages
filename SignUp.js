import React from "react";
import { Container, Content, List, ListItem, Drawer, Text, Header, Title, Button, Left, Right, Body, Icon,Separator} from 'native-base';
import { AsyncStorage,AppRegistry,StyleSheet,ImageBackground,WebView,Linking,View,TouchableOpacity,TextInput,Image,ScrollView,Keyboard} from 'react-native';
import { NavigationActions } from 'react-navigation';
export default class SignUp extends React.Component 
{
	gotoBack = () =>{
	this.props.navigation.dispatch(NavigationActions.back())
	}
	state = {isLoggedIn: false,email:null,org_name:null,first_name:null,last_name:null,conf_email:null,web_address:null,sector:null,team_size:null} 
	validateEmail = (email) => {
	 var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
	}
   doRegister = () => 
   {
		var email = this.state.email;
		console.log(email);
		var org_name = this.state.org_name;
		var first_name = this.state.first_name;
		var last_name = this.state.last_name;
		var conf_email = this.state.conf_email;
		var web_address = this.state.web_address;
		var sector = this.state.sector;
		var team_size = this.state.team_size;
		
		if(!first_name)
		{
			alert("Please Enter First Name");
			return false;
		}
		if(!last_name)
		{
			alert("Please Enter Last Name");
			return false;
		}
		if(!this.validateEmail(email)) 
		{
			alert("Please Enter Valid Email id");
			return false;
		}
		if(!this.validateEmail(conf_email))
		{
			alert("Please Enter Valid Confirm Email");
			return false;
		}
		if(!org_name)
		{
			alert("Please Enter Organization Name");
			return false;
		}
		if(!web_address)
		{
			alert("Please Enter Website Name");
			return false;
		}
		if(!sector)
		{
			alert("Please Enter Sector");
			return false;
		}
		if(!team_size)
		{
			alert("Please Enter Team Size");
			return false;
		}
		if(conf_email!=email)
		{
			alert("Email and Confrim email should be same");
			return false
		}
		console.log('siup section goes here');
		const {navigate} = this.props.navigation;
		this.props.navigation.navigate('Thanks');
		
   }
    render() {
        return (
            <Container>
                <Header>
                    <Left><Button transparent onPress={() =>this.gotoBack()}><Icon name="ios-arrow-back" /></Button></Left>
                    <Body><Title>Register</Title></Body><Right><Button transparent></Button></Right>
                </Header>
                 <Content>
                 <ScrollView>
                   <Image style={styles.logoImg} source={require('./img/logo.jpg')} /> 
                    <View style = {styles.container}>
					<TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "First Name"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText={(first_name) => this.setState({first_name})}/>
					 <TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Last Name"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText={(last_name) => this.setState({last_name})}/> 
				    <TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Email"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText={(email) => this.setState({email})}/> 
					 <TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Email Confirmation"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText={(conf_email) => this.setState({conf_email})}/> 
				  	 <TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Organization"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText={(org_name) => this.setState({org_name})}/>  
					  <TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Web Address"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText={(web_address) => this.setState({web_address})}/>  
					<TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Sector"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText={(sector) => this.setState({sector})}/>
					 <TextInput style = {styles.input}
					   underlineColorAndroid = "transparent"
					   placeholder = "Team Size"
					   placeholderTextColor = "#000000"
					   autoCapitalize = "none"
					   onChangeText={(team_size) => this.setState({team_size})}/>  
					<TouchableOpacity style = {styles.submitButton} onClick = {() => this.doRegister()}>
					   <View style = {styles.submitButton}>
						<Text style = {styles.submitButtonText}> Register </Text>
					   </View>
					</TouchableOpacity>
			     </View>
                 </ScrollView>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
  container: {paddingTop: 30,  margin: 15,flex: 1},
  forgetPassword:{fontSize :13, marginTop:20, textAlign:'center'},
  footer :{position: 'absolute',bottom: 10,justifyContent: 'center', paddingLeft:12},
  footerText:{fontSize :13, textAlign:'center' },
  input: {padding:10,marginBottom: 10,height: 60,borderColor: '#f0f2f5',backgroundColor: '#ffffff',borderWidth: 2},
  textinput:{padding:10,marginBottom: 10,height: 120,borderColor: '#000000',backgroundColor: '#ffffff',borderWidth: 2},
  submitButton:{backgroundColor: '#20a8d8',padding: 10,height: 60,justifyContent: 'center'},
  submitButtonText:{color:'white',backgroundColor:'#20a8d8',padding:10,borderRadius:0,padding:10,height:45,textAlign:'center',fontWeight: 'bold'},
  backgroundImage:{flex: 1,alignSelf: 'stretch',width: null},
  logoImg:{flexDirection: 'row',justifyContent: 'center', marginTop:20,alignItems: 'center',resizeMode: 'cover', alignSelf: 'center'},
})
