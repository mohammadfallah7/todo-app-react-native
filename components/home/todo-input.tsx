import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks";
import { createHomeStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "convex/react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

export const TodoInput = () => {
  const { colors } = useTheme();
  const createTodo = useMutation(api.todos.createTodo);

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const homeStyles = createHomeStyles(colors);

  const handleCreateTodo = async () => {
    if (text.trim()) {
      setLoading(true);

      try {
        await createTodo({ text });
        setText("");
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to create todo");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View style={homeStyles.inputSection}>
      <View style={homeStyles.inputWrapper}>
        <TextInput
          style={homeStyles.input}
          placeholder="What's need to be done?"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleCreateTodo}
          placeholderTextColor={colors.textMuted}
        />

        <TouchableOpacity
          onPress={handleCreateTodo}
          activeOpacity={0.8}
          disabled={!text.trim() || loading}
        >
          <LinearGradient
            style={[
              homeStyles.addButton,
              !text.trim() && homeStyles.addButtonDisabled,
            ]}
            colors={
              text.trim() ? colors.gradients.primary : colors.gradients.muted
            }
          >
            <Ionicons name={loading ? "stop" : "add"} size={24} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
