import { useRoute } from "@react-navigation/native";
import { View, Text } from "react-native";

const TodoDetails = () => {
  const { todo } = useRoute().params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "90%",
          padding: 20,
          height: "50%",
          borderRadius: 20,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{fontSize: 30, fontWeight: '800', marginBottom: 20}}>{todo.title}</Text>
        <Text>{todo.description}</Text>
      </View>
    </View>
  );
};

export default TodoDetails;
