import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";
import { useDispatch } from "react-redux";
import { markAsCompleted, removeTodo } from "../Redux/slices/todos.slice";

const TodoItem = ({ todo }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity style={styles.todoItem} activeOpacity={0.7}>
      <Text
        onPress={() => navigate(PATHS.DETAILS, { todo })}
        style={{
          fontSize: 20,
          fontWeight: "500",
          textDecorationLine: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Feather
          name="trash"
          size={20}
          color="red"
          onPress={() => dispatch(removeTodo(todo.id))}
        />
        
        <AntDesign
          name={todo.completed ? "checkcircle" : "checkcircleo"}
          size={20}
          color="green"
          onPress={() => dispatch(markAsCompleted(todo.id))}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
