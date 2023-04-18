import { StatusBar } from "react-native";
import { Bible } from "./src/screens/Bible";
import { Chapters } from "./src/screens/Chapters";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Chapters abbrev={"lv"} />
    </>
  );
}
