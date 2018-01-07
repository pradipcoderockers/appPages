import React, { Component } from "react";
import userpermissionPage from "./userpermissionPage";
import { DrawerNavigator} from "react-navigation";
import  LogSection   from "./LogSection";
import  SignUp   from "./SignUp";
import  Dashboard   from "./Dashboard";
import  Thanks   from "./thanks";
const DashboardMain = DrawerNavigator(
  {
    Home: { screen: userpermissionPage },
    LogSection: { screen: LogSection },
    SignUp: { screen: SignUp },
    Dashboard: { screen: Dashboard },
    Thanks: { screen: Thanks }
    
   },
);
//right
export default DashboardMain;
