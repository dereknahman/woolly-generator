import * as React from "react";
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
          labelStyle: {
            fontSize: 15,
            fontWeight: "600",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Generate" }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{ title: "Favourites" }}
        />
        <Tab.Screen
          name="Submit"
          component={SubmitScreen}
          options={{ title: "Submit" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
