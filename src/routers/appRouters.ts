import { HomeScreen, LoginScreen, ProfileScreen, RegisterScreen } from "../screens";
import React from "react";


interface AppRouterParams {
  [key: string]: {
    screen: React.ComponentType<any>;
    name: string;
    requireLogin: boolean;
    options?: any;
    existInBottomTab?: boolean;
  };
}

const appRouters: AppRouterParams = {
  home: {
    name: "Home",
    screen: HomeScreen,
    requireLogin: false,
    existInBottomTab: true,

  },
  login: {
    name: "Login",
    screen: LoginScreen,
    requireLogin: false,
    existInBottomTab: false,
    options: {
      headerShown: false
    }
  },
  register: {
    name: "Register",
    screen: RegisterScreen,
    requireLogin: false,
    existInBottomTab: false

  },
  profile: {
    name: "Profile",
    screen: ProfileScreen,
    requireLogin: true,
    existInBottomTab: true
  }
};

export default appRouters;
