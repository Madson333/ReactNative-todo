import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 54,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 5
  },
  inputContainer:{
    height: 52,
    width: 52,
    flex: 1,
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#262626",
    fontSize: 16,
    color: "#fff",
    backgroundColor: "#262626"
  },
  buttonContainer:{
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    overflow: "hidden",
  }
})