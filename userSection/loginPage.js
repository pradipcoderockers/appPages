import React, { Component } from 'react';
import { StatusBar ,AppRegistry} from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
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
        <Content padder>
      
        </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('dashboardscreen', () => HomeScreen);