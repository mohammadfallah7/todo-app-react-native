import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks";
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleTheme } = useTheme();

  const readAllTodos = useQuery(api.todos.readAllTodos);
  const createTodo = useMutation(api.todos.createTodo);
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  console.log(readAllTodos);

  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Mohammad</Text>

      <TouchableOpacity onPress={toggleTheme}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => createTodo({ text: "Hello World" })}>
        <Text>Create todo</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => clearAllTodos()}>
        <Text>Clear All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
