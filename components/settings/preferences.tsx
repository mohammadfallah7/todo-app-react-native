import { useTheme } from "@/hooks";
import { createSettingsStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Switch, Text, View } from "react-native";

export const Preferences = () => {
  const { theme, toggleTheme, colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitle}>Preferences</Text>
      <View style={settingsStyles.settingItem}>
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.primary}
            style={settingsStyles.settingIcon}
          >
            <Ionicons name="moon" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.settingText}>Dark Mode</Text>
        </View>
        <Switch
          value={theme === "dark"}
          onValueChange={toggleTheme}
          thumbColor="#fff"
          trackColor={{ false: colors.border, true: colors.primary }}
        />
      </View>
    </LinearGradient>
  );
};
