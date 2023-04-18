import { View, Text, TouchableOpacity } from "react-native";
import { IChapter } from "../../types/Chapter";
import { styles } from "./styles";

interface Props {
  chapters: IChapter[];
  title: string;
}
export function Chapter({ chapters, title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{chapters.length}</Text>
      </TouchableOpacity>
    </View>
  );
}
