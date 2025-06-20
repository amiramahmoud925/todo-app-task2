import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";
import { useState } from "react";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import { useNavigation } from "@react-navigation/native";
import { PATHS } from "../routes/Router";

const Home = () => {
  const { navigate } = useNavigation();
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    console.log(todo);
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
        Todo App
      </Text>

      <TodoForm onSubmit={handleAddTodo} />

      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.filterBtn}
          activeOpacity={0.7}
          onPress={() => navigate(PATHS.DETAILS, { name: 'Amira', age: 22 })}
        >
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} activeOpacity={0.7}>
          <Text style={styles.filterText}>In Progress</Text>
        </TouchableOpacity>
      </View>

      {todos.length > 0 && (
        <Todos todos={todos} onDelete={handleDeleteTodo} />
      )}
    </View>
  );
};


export default Home;
