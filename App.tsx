import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

import _bible from "./bible.json";
import { Book } from "./src/types/Book";

export default function App() {
  const bible = _bible as Book[];
  const books = bible.map((book: Book) => {
    const versiculo = book.chapters[0];
    return (
      <Button
        key={book.abbrev}
        title={book.name}
        onPress={() => Alert.alert(`${versiculo}`)}
      />
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {books}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // paddingVertical: 50,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "space-around",
  },
});
