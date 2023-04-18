import { FlatList, Text, View } from "react-native";
import { IBook } from "../../types/Book";
import _bible from "../../base/bible.json";
import { styles } from "./styles";
import { Chapter } from "../../components/Chapter";

export function Chapters({ abbrev }: { abbrev: string }) {
  const bible = _bible as IBook[];

  const book = bible.find((value) => value.abbrev === abbrev) as IBook;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.name}</Text>
      <View style={styles.list}>
        <FlatList
          data={book.chapters}
          keyExtractor={() => book.abbrev}
          renderItem={({ item, index }) => (
            <Chapter key={book.abbrev} chapter={item} numberOf={index + 1} />
          )}
        />
      </View>
    </View>
  );
}
