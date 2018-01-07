import React, { Component } from 'react';
import { AppRegistry,StyleSheet,ImageBackground,WebView,Linking,View,TouchableOpacity,TextInput,Image,StatusBar} from 'react-native';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Team Feeds", "Projects", "Task", "Time", "Expenses", "Leave", "Reports","My Shifts"];
export default class SideBar extends Component {
  render() {
    return (
      <Container>
<View style={styles.topmenu} ></View>
<View  style={styles.container} >

<Image
  source={{
    uri: 'https://www.logogarden.com/wp-content/uploads/lg-index/Example-Logo-6.jpg',
   // cache: 'only-if-cached',
  }}
  style={styles.ProfileImage}/>
  <Text style={styles.headline}>Profile Name</Text>
</View>


        <Content style={styles.containerlist}>
       
          <List  style={styles.list}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem style={styles.ListItem}
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text style={styles.textItem} >{data}</Text>
                </ListItem>
              );
            }}
          />
          <ListItem noBorder style={styles.ListItemLogOut}>
          <Text>Log Out</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    ProfileImage:{borderRadius:35,width:70,height:70,borderColor:'#bcbcbc',borderWidth:1},
    topmenu:{marginTop:20},
    container:{
        backgroundColor: '#fff', paddingLeft:15,paddingBottom:5
    },
    containerlist:{backgroundColor: '#f4f4f4',margin:0,padding:0},
    backgroundImage:{
       // flex: 1,
    //     alignSelf: 'stretch',
        width: 100
    },
    textItem:{margin:0,padding:0,fontSize:14},
    list:{margin:0,backgroundColor: '#f4f4f4',padding:0},
    ListItem:{backgroundColor: '#f4f4f4',marginLeft:0,paddingLeft:20,marginTop:0},
    ListItemLogOut:{backgroundColor: '#f4f4f4'},    headline: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#000000', position: 'absolute',top:25, left:120, fontSize:14,fontWeight:'bold'
      }
});
AppRegistry.registerComponent('SideBar', () => SideBar);