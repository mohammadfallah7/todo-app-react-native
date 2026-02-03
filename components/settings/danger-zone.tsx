import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks";
import { createSettingsStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export const DangerZone = () => {
  const { colors } = useTheme();
  const clearAllTodos = useMutation(api.todos.clearAllTodos);

  const settingsStyles = createSettingsStyles(colors);

  const handleClearAllTodos = async () => {
    Alert.alert(
      "Reset App",
      "This will delete all your todos permanently. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            try {
              await clearAllTodos();
            } catch (error) {
              console.error(error);
              Alert.alert("Error", "Failed to delete all todos");
            }
          },
        },
      ],
    );
  };

  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitleDanger}>Danger Zone</Text>

      <TouchableOpacity
        style={[settingsStyles.actionButton, { borderWidth: 0 }]}
        onPress={handleClearAllTodos}
        activeOpacity={0.7}
      >
        <View style={settingsStyles.actionLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={settingsStyles.actionIcon}
          >
            <Ionicons name="trash" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.actionTextDanger}>Reset App</Text>
        </View>

        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};
