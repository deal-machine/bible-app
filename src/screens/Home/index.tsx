// import { View, SafeAreaView, FlatList, Text } from "react-native";

import { Book } from "../../components/Book";

import _bible from "../../base/bible.json";
import { IBook } from "../../types/Book";
// import { styles } from "./styles";

export function Home() {
  // const bible = _bible as IBook[];
  return (
    <>
      <Book />
      <Book />
      <Book />
    </>
  );
}
