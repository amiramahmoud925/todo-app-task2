import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PATHS } from "./Router";
import Home from "../pages/Home";
import TodoDetails from "../pages/TodoDetails";

const { Navigator, Screen } = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={PATHS.HOME}
        component={Home}
        options={{
          headerTitle: "Todo App",
        }}
      />
      <Screen name={PATHS.DETAILS} component={TodoDetails} />
    </Navigator>
  );
};

export default StackNavigator;
