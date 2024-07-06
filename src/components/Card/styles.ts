import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counterContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  counterContent:{
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  counterText: {
    fontWeight: "bold",
  },
  counterContainerNumber:{
    backgroundColor: "#333333",
    height: 22,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  counterNumberText: {
    fontWeight: "bold",
    color: "#fff",
  },
  empityListContainer:{
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#808080",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  taskContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    paddingVertical: 12,
    backgroundColor: "#262626",
    padding: 12,
    borderColor: "#333333",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    marginTop: 8,
    gap: 8,
  }

})