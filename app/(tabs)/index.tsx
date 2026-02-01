import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.text}>Mohammad</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e293b",
    gap: 16,
  },
  text: {
    color: "white",
  },
  link: {
    color: "white",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
