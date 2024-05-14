import { StyleSheet, Text, Alert, TextInput, View, Button } from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

interface Todo {
  item: string;
  id: string;
}

export const todosAtom = atomWithStorage<Todo[]>("todos", []);
export const textInputAtom = atom<string>("");

// Define an atom for the text input

const AddTodo = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [textInput, setTextInput] = useAtom(textInputAtom);

  const changeHandler = (val: string) => {
    setTextInput(val);
  };

  const addTodo = (text: string) => {
    if (text.length > 2) {
      setTodos((prevTodos) => {
        return [{ item: text, id: Math.random().toString() }, ...prevTodos];
      });
      setTextInput("");
    } else {
      Alert.alert("Empty todo", "There must be some text", [
        { text: "Okey", onPress: () => console.log("Alert dismissed") },
      ]);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        multiline
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={textInput}
      />
      <Button
        title="Add todo"
        color="coral"
        onPress={() => addTodo(textInput)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    marginBottom: 15,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddTodo;
