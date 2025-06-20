import { View, Text, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { styles } from "../../styles";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <View style={styles.todoItem}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>{todo.title}</Text>
        <Text style={{ fontSize: 14, fontWeight: "500", color: "grey" }}>
          {todo.description}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(todo.id)}>
  <Feather name="trash" size={22} color="red" />
           </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
