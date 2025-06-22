import { View, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "../../styles";

const TodoItem = ({ todo, onDelete, onToggleCompleted }) => {
  return (
    <View style={styles.todoItem}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "500", textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
          {todo.title}
        </Text>
        <Text style={{ fontSize: 14, color: "grey" }}>{todo.description}</Text>
      </View>

      <TouchableOpacity onPress={() => onToggleCompleted(todo.id)} style={{ marginRight: 10 }}>
        <Feather name="check-circle" size={22} color={todo.completed ? "green" : "gray"} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Feather name="trash" size={22} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

