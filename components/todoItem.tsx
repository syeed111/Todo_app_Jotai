import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { useAtom } from "jotai";
import { atom } from "jotai";
import { todosAtom } from "./addTodo";
import { textInputAtom } from "./addTodo";

interface TodoItemProps {
  item: {
    item: string;
    id: string;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const [todos, setTodos] = useAtom(todosAtom);
  const [textInput, setTextInput] = useAtom(textInputAtom);

  const deleteHandler = (key: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== key);
    });
  };
  const updateHandler = (key: string, value: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== key);
    });
    setTextInput(value);
  };

  const [toggle, setToggle] = useState(false);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  const checkBox = !toggle ? "check-box-outline-blank" : "check-box";

  //name=check-box -- checked
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <MaterialIcons
          name={checkBox}
          size={24}
          color="black"
          onPress={changeToggle}
        />
        <Text style={styles.itemText}>{item.item}</Text>
      </View>
      <View style={styles.icons}>
        <MaterialIcons
          name="edit-note"
          size={24}
          color="black"
          onPress={() => updateHandler(item.id, item.item)}
        />
        <MaterialIcons
          name="delete-forever"
          size={24}
          color="black"
          onPress={() => deleteHandler(item.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  itemText: {
    marginLeft: 10,
    width: 360,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 10,
  },
});

export default TodoItem;
