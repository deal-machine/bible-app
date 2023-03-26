import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  makeIsReading: () => void;
};

export function Book({ title, makeIsReading }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.button} onPress={makeIsReading}>
        <Text style={styles.buttonText}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
}
