import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks";
import { calculateProgress } from "@/lib";
import { createHomeStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";

export const Header = () => {
  const { colors } = useTheme();
  const todos = useQuery(api.todos.readAllTodos);

  const homeStyles = createHomeStyles(colors);
  const totalTodosCount = todos ? todos.length : 0;
  const completedTodosCount = todos
    ? todos.filter((t) => t.isCompleted).length
    : 0;

  const progressPercentage = calculateProgress(
    totalTodosCount,
    completedTodosCount,
  );

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          style={homeStyles.iconContainer}
          colors={colors.gradients.primary}
        >
          <Ionicons name="flash-outline" size={28} color="#fff" />
        </LinearGradient>

        <View style={homeStyles.titleTextContainer}>
          <Text style={homeStyles.title}>Today&apos;s Tasks 👀</Text>
          <Text style={homeStyles.subtitle}>
            {completedTodosCount} of {totalTodosCount} completed
          </Text>
        </View>
      </View>

      <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
          <View style={homeStyles.progressBar}>
            <LinearGradient
              style={[
                homeStyles.progressFill,
                { width: `${progressPercentage}%` },
              ]}
              colors={colors.gradients.success}
            />
          </View>
          <Text style={homeStyles.progressText}>
            {Math.round(progressPercentage)}%
          </Text>
        </View>
      </View>
    </View>
  );
};
