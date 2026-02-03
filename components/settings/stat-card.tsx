import { useTheme } from "@/hooks";
import { createSettingsStyles } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { FC, PropsWithChildren } from "react";
import { Text, View } from "react-native";

interface StatCardProps extends PropsWithChildren {
  totalTodosCount: number;
  label: string;
  type: "total" | "completed" | "active";
}

const StatCard: FC<StatCardProps> = ({
  totalTodosCount,
  label,
  type,
  children,
}) => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  return (
    <LinearGradient
      colors={colors.gradients.background}
      style={[
        settingsStyles.statCard,
        {
          borderLeftColor:
            type === "total"
              ? colors.primary
              : type === "completed"
                ? colors.success
                : colors.warning,
        },
      ]}
    >
      <View style={settingsStyles.statIconContainer}>
        <LinearGradient
          colors={
            type === "total"
              ? colors.gradients.primary
              : type === "completed"
                ? colors.gradients.success
                : colors.gradients.warning
          }
          style={settingsStyles.statIcon}
        >
          <Ionicons
            name={
              type === "total"
                ? "list"
                : type === "completed"
                  ? "checkmark-circle"
                  : "time"
            }
            size={20}
            color="#fff"
          />
        </LinearGradient>
      </View>
      <View>
        <Text style={settingsStyles.statNumber}>{totalTodosCount}</Text>
        <Text style={settingsStyles.statLabel}>{label}</Text>
      </View>
    </LinearGradient>
  );
};

export default StatCard;
