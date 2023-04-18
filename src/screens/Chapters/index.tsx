import { FlatList, View } from "react-native";
import { IBook } from "../../types/Book";
import _bible from "../../base/bible.json";
import { styles } from "./styles";
import { Chapter } from "../../components/Chapter";

export function Chapters({ abbrev }: { abbrev: string }) {
  const bible = _bible as IBook[];

  const chapter = bible.filter((value) => value.abbrev === abbrev);

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={chapter}
          keyExtractor={(item) => item.abbrev}
          renderItem={({ item }) => (
            <Chapter
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
