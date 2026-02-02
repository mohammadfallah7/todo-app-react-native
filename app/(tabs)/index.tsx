import { EmptyState, Header, LoadingSpinner, TodoInput } from "@/components";
import TodoCard from "@/components/home/todo-card";
import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks";
import { createHomeStyles } from "@/styles";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { colors } = useTheme();
  const allTodos = useQuery(api.todos.readAllTodos);

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient
      style={homeStyles.container}
      colors={colors.gradients.background}
    >
      <StatusBar style={colors.statusBarStyle} />

      <SafeAreaView style={homeStyles.safeArea}>
        {allTodos ? (
          <>
            <Header />
            <TodoInput />
            <FlatList
              data={allTodos}
              renderItem={({ item }) => <TodoCard todo={item} />}
              keyExtractor={(item) => item._id}
              style={homeStyles.todoList}
              contentContainerStyle={homeStyles.todoListContent}
              ListEmptyComponent={<EmptyState />}
            />
          </>
        ) : (
          <LoadingSpinner />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}
