import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1FE25",
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  chapter: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#11C7",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  title: {
    // flex: 1,
    fontSize: 20,
    color: "#ffffff",
    padding: 14,
  },
  number: {
    // flex: 1,

    fontSize: 16,
    color: "#fff",
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 12,
    color: "#889999",
  },
});
