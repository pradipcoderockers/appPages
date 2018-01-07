import React, { Component } from 'react';
import { StatusBar ,AppRegistry,Dimensions,StyleSheet,ImageBackground,Image,View,TouchableOpacity,ScrollView} from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
export default class dashboardscreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right />
        </Header>
         <Content style={styles.container}  >
        <Image style={styles.canvas} source={require('./img/C7jX58aWkAEKtfH.png')} />
         <View style = {styles.textView}>
          <Text style={styles.WelcomeMessage}>Welcome to the <Text style={styles.textName}>work.Management </Text>app 
	      We’ll have your team up and running in a few short steps</Text>
         </View>
          <Text style={styles.messageSecond}>Please complete the setup information in the following setup pages.</Text>
          <Grid style={{margin:30,marginTop:10,marginRight:20}} >
			<Col style={styles.signUpButton}>
			 <TouchableOpacity>
			   <Text style = {styles.signUpText}>Start</Text>
			   </TouchableOpacity>
			</Col>
		  </Grid>
         </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  canvas: {resizeMode: 'contain',height:260,width:'100%'},
  textView:{marginTop:20,padding:10},
  messageSecond:{marginTop:20,padding:10,fontSize:15,fontWeight:'bold',color:'#c6c6c6'},
  container:{flex: 1,backgroundColor: '#ecf0f1'},
  WelcomeMessage:{ fontSize:25,fontWeight:'bold'},
  signUpButton:{borderColor:'#20a8d8',justifyContent: 'center',height: 50,backgroundColor: '#20a8d8',borderWidth:1, marginRight:10},
  signUpText:{color:'#ffffff',fontWeight:'bold',textAlign:'center'},
  textName:{fontWeight:'bold', fontSize:30, color:'#37c6fb'}
})
AppRegistry.registerComponent('dashboardscreen', () => HomeScreen);
