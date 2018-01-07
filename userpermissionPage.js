import React, { Component } from 'react';
import { StatusBar ,AppRegistry,Dimensions,StyleSheet,ImageBackground,Image,View,TouchableOpacity,ScrollView} from "react-native";
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
const marginTop = '50%';
const window = Dimensions.get('window');
import { AsyncStorage,} from 'react-native';
export default class dashboardscreen extends Component {
 state = {isLoggedIn:false}
  componentWillMount() 
  {
      if(this.state.isLoggedIn=='yes') 
	  {
		const {navigate} = this.props.navigation;
        this.props.navigation.navigate('Dashboard');
	  } 
  }	
  signupPage =()=>{
    const {navigate} = this.props.navigation;
    this.props.navigation.navigate('SignUp',{ name: 'Sign Up' })
  }

  loginPage =()=>{
    const {navigate} = this.props.navigation;
    this.props.navigation.navigate('LogSection', {name:'Log In'})
  }
  render() {
	 
    return (
      <Container>
      <ScrollView>
      <ImageBackground source={require('./img/bg-1.png')}  style={styles.backgroundImage}>
		<Image style={styles.logoImg} source={require('./img/logo.png')} />
		<Content>
		<View style={styles.welcomeBox}  >
			<Text style={styles.welcomeText} >Welcome to Work.Managements</Text>
			<Text style={styles.quotes} >Let us help you to find exciting ways to communicate, collaborate </Text>
		</View>
		 <Grid style={{margin:30,marginBottom:5}} >
                        <Col style={styles.signUpButton}><TouchableOpacity onPress={this.signupPage} ><Text style = {styles.signUpText}>Sign Up</Text></TouchableOpacity></Col>
                        <Col style={styles.LogINButton} ><TouchableOpacity onPress={this.loginPage}><Text style = {styles.LogInText}>Log In</Text></TouchableOpacity></Col>
                    </Grid>
		 <Grid style={{margin:30,marginTop:10,marginRight:20}} >
			<Col style={styles.signUpButton}><TouchableOpacity onPress={this.loginPage} ><Text style = {styles.signUpText}>Login With Touch ID</Text></TouchableOpacity></Col>
		</Grid>
		 <Grid style={{margin:15,marginBottom:1}} ><Col><Text style ={styles.footerText}>@2017 The Openmarket Europe Ltd all right reserved</Text></Col></Grid>
       </Content>
      </ImageBackground>
      </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

   footerText:{textAlign:'center',fontSize :12,alignSelf:'center'},
   TouchIdText:{textAlign:'center',backgroundColor: '#20a8d8',padding:15,color:'#ffffff',fontWeight:'bold'},
   buttonSection:{width:null,flexDirection:'row' },
   signup:{justifyContent: 'flex-start'},
   signUpButton:{borderColor:'#20a8d8',justifyContent: 'center',height: 50,backgroundColor: '#20a8d8',borderWidth:1, marginRight:10},
   signUpText:{color:'#ffffff',fontWeight:'bold',textAlign:'center',},
   login:{backgroundColor: '#ffffff'},
   LogINButton:{borderColor:'#20a8d8',borderWidth:1,justifyContent: 'center',height: 50,},
   LogInText:{fontWeight:'bold',color:'#000000',textAlign:'center',},
   rightLogiN:{alignSelf: 'flex-end', },
   backgroundImage:{flex: 1,
   alignSelf: 'stretch',
   justifyContent: 'center',textAlign:'center',height:null,
   width:null, flexGrow:1,},
   logoImg:{flexDirection: 'row',justifyContent: 'center', marginTop:60,alignItems: 'center',resizeMode: 'cover', alignSelf: 'center',
  },
  welcomeBox:{marginTop,padding:10,backgroundColor:'rgba(0,0,0,0)', justifyContent: 'center',},
  welcomeText:{ alignItems: 'center',alignSelf: 'center', fontSize:22,fontWeight: 'bold',},
  quotes:{textAlign: 'center',margin:30,fontSize:15,marginTop:10,},
  forgetPassword:{fontSize :13, marginTop:20, textAlign:'center' },
  input: {padding:10,marginBottom: 10,height: 60,borderColor: '#f0f2f5',backgroundColor: '#ffffff',borderWidth: 2,},
  textinput:{padding:10,marginBottom: 10,height: 120,borderColor: '#000000',backgroundColor: '#ffffff',borderWidth: 2,},
  submitButton: {padding: 10,height: 60, justifyContent: 'center',},
  submitButtonText:{color: 'white',backgroundColor:'#20a8d8',padding:10,borderRadius:0,padding:10,height:45,textAlign:'center', fontWeight: 'bold',},
   backgroundImage:{flex: 1, alignSelf: 'stretch',width: null,},
 
})

AppRegistry.registerComponent('dashboardscreen', () => dashboardscreen);
