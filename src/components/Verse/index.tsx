import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";

export function Verse({
  verse,
  numberOf,
}: {
  verse: string;
  numberOf: number;
}) {
  return (
    <ScrollView>
      <View style={styles.chapter}>
        <Text style={styles.number}>{numberOf}</Text>
        <Text style={styles.text}>{verse}</Text>
      </View>
    </ScrollView>
  );
}
