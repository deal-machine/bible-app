import { FlatList, View } from "react-native";
import { IBook } from "../../types/Book";
import _bible from "../../base/bible.json";
import { styles } from "./styles";
import { Chapter } from "../../components/Chapter";

export function Verses({ verses }: { verses: string[] }) {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={verses}
          keyExtractor={(item) => String(item.length)}
          renderItem={({ item }) => (
            <Verse
              title={item.name}
              key={item.abbrev}
              chapters={item.chapters}
            />
          )}
        />
      </View>
    </View>
  );
}
