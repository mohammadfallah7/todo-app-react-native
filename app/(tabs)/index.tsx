import { useTheme } from "@/hooks";
import { createHomeStyles } from "@/styles";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleTheme, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <View style={homeStyles.container}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
        <Text>Mohammad</Text>

        <TouchableOpacity onPress={toggleTheme}>
          <Text>Toggle Theme</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
