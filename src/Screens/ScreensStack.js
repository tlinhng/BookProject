// File ScreensStack.js (Không cần đặt Home trong StackNavigator)
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Categories from "./Categories";
import Search from "./Search";
import Bookmarks from "./Bookmarks";
import ProfileScreens from "./ProfileScreens";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default class ScreensStack extends React.Component {
  render() {
    let iconcolor = "#FF8C00";
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ size }) => {
            let iconame;
            route.name == "Home"
              ? (iconame = "home")
              : route.name == "Categories"
              ? (iconame = "bars")
              : route.name == "Search"
              ? (iconame = "search1")
              : route.name == "Quotes"
              ? (iconame = "book")
              : route.name == "Profile"
              ? (iconame = "profile")
              : null;
            return <AntDesign name={iconame} size={size} color={iconcolor} />;
          },
        })}
        tabBarOptions={{
          showLabel: true,
          activeTintColor: iconcolor,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Quotes" component={Bookmarks} />
        <Tab.Screen name="ProfileScreens" component={ProfileScreens} />
      </Tab.Navigator>
    );
  }
}
