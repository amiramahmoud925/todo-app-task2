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
  const [filter, setFilter] = useState("ALL");

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "IN_PROGRESS") return !todo.completed;
    return true;
  });

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
        Todo App
      </Text>

      <TodoForm onSubmit={handleAddTodo} />
      <View style={styles.dividerLine} />

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter("ALL")}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter("COMPLETED")}>
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter("IN_PROGRESS")}>
          <Text style={styles.filterText}>In Progress</Text>
        </TouchableOpacity>
      </View>

      {filteredTodos.length > 0 && (
        <Todos
          todos={filteredTodos}
          onDelete={handleDeleteTodo}
          onToggleCompleted={handleToggleCompleted}
        />
      )}
    </View>
  );
};

export default Home;
