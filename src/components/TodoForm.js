import { Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/slices/todos.slice";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title) return;
    const todo = {
      id: Math.random().toString(),
      title,
      description,
      completed: false,
    };

    dispatch(addTodo(todo));

    setTitle("");
    setDescription("");

  };


  return (
    <>
      <TextInput
        placeholder="Enter title"
        style={styles.input}
        onChangeText={(val) => setTitle(val)}
        value={title}
      />

      <TextInput
        placeholder="Enter description"
        style={styles.input}
        onChangeText={(val) => setDescription(val)}
        value={description}
      />

      <TouchableOpacity
        style={styles.submitBtn}
        activeOpacity={0.7}
        onPress={handleSubmit}
      >
        <Text style={{ ...styles.text, fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
    </>
  );
};

export default TodoForm;
