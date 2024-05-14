import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useAtom } from "jotai";
import { atom } from "jotai";
import Header from "../../components/header";
import TodoItem from "../../components/todoItem";
import AddTodo from "../../components/addTodo";
import { todosAtom } from "../../components/addTodo";

export default function App() {
  const [todos, setTodos] = useAtom(todosAtom);
  // const pressHandler = (key: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((item) => item.id !== key);
  //   });
  // };

  // const updateHandler = (key: string, value: string) => {
  //   setTextInput(value);
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter((item) => item.id !== key);
  //   });
  // };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />

        <View style={styles.content}>
          <AddTodo />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <TodoItem item={item} />}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
