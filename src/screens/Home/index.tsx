// import { View, SafeAreaView, FlatList, Text } from "react-native";

import { Book } from "../../components/Book";

import _bible from "../../base/bible.json";
import { IBook } from "../../types/Book";
// import { styles } from "./styles";

export function Home() {
  function handleBookReading(title: string) {
    console.log(`Reading book ${title} successfully`);
  }
  // const bible = _bible as IBook[];
  return (
    <>
      {/* <Book title="A" makeIsReading={() => handleBookReading("A")} /> */}
      <Book title="B" makeIsReading={() => handleBookReading("B")} />
      <Book title="C" makeIsReading={() => handleBookReading("C")} />
    </>
  );
}
