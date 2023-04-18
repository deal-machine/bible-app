import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Verse } from "../../components/Verse";

export function Verses({ verses }: { verses: string[] }) {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ScrollView>
          {verses.map((verse, index) => (
            <Verse key={verse} verse={verse} numberOf={index + 1} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
