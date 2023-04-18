import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { IChapter } from "../../types/Chapter";
import { styles } from "./styles";
import { Verses } from "../../screens/Verses";

interface Props {
  chapters: IChapter[];
  title: string;
}
export function Chapter({ chapters, title }: Props) {
  console.log(chapters[0]);

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{title}</Text> */}

      <ScrollView>
        <Text style={styles.number}>{title}</Text>
        {chapters.map((chapter, index) => (
          <View key={index}>
            <Text style={styles.number}>{index + 1}</Text>
            <Text style={styles.text}>{chapter}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
