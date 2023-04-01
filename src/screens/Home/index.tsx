import { Book } from "../../components/Book";

import _bible from "../../base/bible.json";
import { IBook } from "../../types/Book";
import { styles } from "./styles";
import { View, FlatList } from "react-native";

export function Home() {
  function handleBookReading(title: string) {
    console.log(`Reading book ${title} successfully`);
  }

  const bible = _bible as IBook[];
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={bible}
          keyExtractor={(item) => item.abbrev}
          renderItem={({ item }) => (
            <Book
              book={item}
              key={item.abbrev}
              makeIsReading={() => handleBookReading(item.name)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
