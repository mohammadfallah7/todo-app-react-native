import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks";
import { createSettingsStyles } from "@/styles";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import StatCard from "./stat-card";

export const ProgressStats = () => {
  const { colors } = useTheme();
  const allTodos = useQuery(api.todos.readAllTodos);

  const settingsStyles = createSettingsStyles(colors);
  const totalTodosCount = allTodos ? allTodos.length : 0;
  const completedTodosCount = allTodos
    ? allTodos.filter((t) => t.isCompleted).length
    : 0;
  const activeTodosCount = totalTodosCount - completedTodosCount;

  return (
    <LinearGradient
      style={settingsStyles.section}
      colors={colors.gradients.surface}
    >
      <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>

      <View style={settingsStyles.statsContainer}>
        <StatCard
          totalTodosCount={totalTodosCount}
          type="total"
          label="Total Todos"
        />
        <StatCard
          totalTodosCount={completedTodosCount}
          type="completed"
          label="Completed"
        />
        <StatCard
          totalTodosCount={activeTodosCount}
          type="active"
          label="Active"
        />
      </View>
    </LinearGradient>
  );
};
