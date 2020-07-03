import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();

function App(props) {
  console.log(props);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Generate Woolly" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
