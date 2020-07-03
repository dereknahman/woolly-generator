import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import SubmitScreen from "./src/screens/SubmitScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";
import Colors from "./constants/Colors";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: Colors.accentColor,
          inactiveTintColor: Colors.mainColor,
        }}
        style={styles.tabText}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Generate" }}
        />
        <Tab.Screen
          name="Submit"
          component={SubmitScreen}
          options={{ title: "Submit" }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{ title: "Favourite" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabText: {
    fontSize: 10,
  },
});

export default App;
