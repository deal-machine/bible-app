import { FlatList, Text, View } from "react-native";
import { IBook } from "../../types/Book";
import _bible from "../../base/bible.json";
import { styles } from "./styles";
import { Chapter } from "../../components/Chapter";
import { useState } from "react";

export function Chapters({ abbrev }: { abbrev: string }) {
  const bible = _bible as IBook[];
  const book = bible.find((value) => value.abbrev === abbrev) as IBook;
  const [bookState, useBook] = useState<IBook>(book);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bookState.name}</Text>
      <View style={styles.list}>
        <FlatList
          data={bookState.chapters}
          keyExtractor={() => bookState.abbrev}
          renderItem={({ item, index }) => (
            <Chapter
              key={bookState.abbrev}
              chapter={item}
              numberOf={index + 1}
            />
          )}
        />
      </View>
    </View>
  );
}
