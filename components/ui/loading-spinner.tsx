import { useTheme } from "@/hooks";
import { createHomeStyles } from "@/styles";
import { ActivityIndicator, Text, View } from "react-native";

export const LoadingSpinner = () => {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <View style={homeStyles.loadingContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={homeStyles.loadingText}>Loading your todos...</Text>
    </View>
  );
};
