import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTasks from "../pages/CompletedTasks";
import StackNavigator from "./StackNavigator";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const { Navigator, Screen } = createBottomTabNavigator();

export const PATHS = {
  HOME: "Home Page",
  COMPLETED_TASKS: "Completed Tasks",
  DETAILS: "Todo Details",
};

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitleStyle: {
            color: "red",
            textTransform: "uppercase",
            width: "100%",
          },
          tabBarStyle: {
            position: "absolute",
            bottom: 30,
            width: "90%",
            marginHorizontal: "5%",
            borderRadius: 10,
            height: 80,
            borderWidth: 1,
            borderColor: "#ccc",
          },
          tabBarItemStyle: {
            paddingVertical: 10,
          },
        }}
      >
        <Screen
          name={PATHS.HOME}
          component={StackNavigator}
          options={{
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "red" : color,
                  textTransform: "uppercase",
                }}
              >
                Home
              </Text>
            ),
            tabBarIcon: ({ color, focused, size }) => (
              <AntDesign
                name="home"
                size={size}
                color={focused ? "red" : color}
              />
            ),
          }}
        />
        <Screen
          name={PATHS.COMPLETED_TASKS}
          component={CompletedTasks}
          options={{
            headerBackTitle: "Back",
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  color: focused ? "red" : color,
                  textTransform: "uppercase",
                }}
              >
                Completed Tasks
              </Text>
            ),
            tabBarIcon: ({ color, focused, size }) => (
              <FontAwesome5
                name="tasks"
                size={size}
                color={focused ? "red" : color}
              />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
