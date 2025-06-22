import { View, Text, FlatList } from "react-native";
import { styles } from "../../styles";
import React from "react";

const CompletedTasks = ({ route }) => {
  const todos = route?.params?.todos || [];

  const completed = todos.filter(todo => todo.completed);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 12 }}>
        Completed Tasks
      </Text>

      <FlatList
        data={completed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ padding: 8, fontSize: 16 }}>
            ✅ {item.title}
          </Text>
        )}
      />
    </View>
  );
};

export default CompletedTasks;

