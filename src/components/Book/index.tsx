import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Book() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book Title</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
}
