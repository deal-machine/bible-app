import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface Props {
  chapter: string[];
  numberOf: number;
}
export function Chapter({ chapter, numberOf }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.buttonText}>{numberOf}</Text>
      </TouchableOpacity>
    </View>
  );
}
