import { useSelector } from "react-redux";
import { styles } from "../../styles";
import TodoItem from "../components/TodoItem";
import { FlatList, Text, View } from "react-native";

const CompletedTasks = () => {
  const todos = useSelector((state) =>
    state.todosState.todos.filter((todo) => todo.completed)
  );

  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No completed tasks</Text>
        </View>
      ) : (
        <FlatList
          data={todos}
          style={styles.todosContainer}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem todo={item} />}
        />
      )}
    </View>
  );
};

export default CompletedTasks;
