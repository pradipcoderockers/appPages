import React from "react";
import { Container, Content, List, ListItem, Drawer, Text, Header, Title, Button, Left, Right, Body, Icon,
    Separator} from 'native-base';
import { AsyncStorage,AppRegistry,StyleSheet,ImageBackground,WebView,Linking,View,TouchableOpacity,TextInput,Image,ScrollView,Keyboard} from 'react-native';
import { NavigationActions } from 'react-navigation';
export default class Thanks extends React.Component 
{
	gotoBack = () =>
	{
		this.props.navigation.dispatch(NavigationActions.back())
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
						 <Text style ={styles.forgetPassword} >Thanks</Text>
						 <Text style ={styles.forgetPassword} >Your application has been successfully submitted</Text>
						 <Text style ={styles.forgetPassword} >An email will be sent once your account is approved</Text>
						 <Text style ={styles.forgetPassword} >Please follow instructions within an email.</Text>
						 <Text style = {styles.submitButtonText}> Back </Text>
					</View> 
                   </ScrollView>
                </Content>
            </Container>
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
   bottom: 10,justifyContent: 'center', paddingLeft:12
   },

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
logoImg:{flexDirection: 'row',
    justifyContent: 'center', marginTop:20,
    alignItems: 'center',resizeMode: 'cover', alignSelf: 'center',
  },
})
