import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { IBook } from "../../types/Book";

type Props = {
  book: IBook;
  makeIsReading: () => void;
};

export function Book({ book, makeIsReading }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.name}</Text>

      <TouchableOpacity style={styles.button} onPress={makeIsReading}>
        <Text style={styles.buttonText}>{">"}</Text>
      </TouchableOpacity>
    </View>
  ); 
}
