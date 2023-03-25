import { View, SafeAreaView, FlatList, Text } from "react-native";

import _bible from "../../base/bible.json";
import { Book } from "../../types/Book";
import { styles } from "./styles";

export function Home() {
  const bible = _bible as Book[];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={bible}
        keyExtractor={(book) => book.abbrev}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.text}>{item.abbrev}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
