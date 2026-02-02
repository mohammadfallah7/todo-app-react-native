import { Header } from "@/components";
import { useTheme } from "@/hooks";
import { createHomeStyles } from "@/styles";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleTheme, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient
      style={homeStyles.container}
      colors={colors.gradients.background}
    >
      <StatusBar style={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header />

        <TouchableOpacity onPress={toggleTheme}>
          <Text>Toggle Theme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
