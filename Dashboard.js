import React, { Component } from "react";
import DashboardScreen from "./DashboardScreen";
import newHome from "./newHome";
import SideBar from "./SideBar";
import { DrawerNavigator} from "react-navigation";

const Dashboard = DrawerNavigator(
  {
    Home: { screen: DashboardScreen },
    //  Chat: { screen: SideBar },
    newHome2: { screen: newHome }
   },
  {
    headerMode: 'screen',
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentComponent: props => <SideBar {...props} />
  }
);
//right
export default Dashboard;