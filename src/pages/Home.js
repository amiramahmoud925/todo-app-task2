import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";
import FilterTabs from "../components/FilterTabs";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTodos } from "../Redux/slices/todos.slice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35, fontWeight: "bold", marginBottom: 19 }}>
        Todo App
      </Text>

      <TodoForm />

      <FilterTabs />

      <Todos />
    </View>
  );
};

export default Home;
