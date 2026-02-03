import { useTheme } from "@/hooks";
import { createSettingsStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";

export const Header = () => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <View style={settingsStyles.header}>
      <View style={settingsStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={settingsStyles.iconContainer}
        >
          <Ionicons name="settings" size={28} color="#fff" />
        </LinearGradient>
        <Text style={settingsStyles.title}>Settings</Text>
      </View>
    </View>
  );
};
