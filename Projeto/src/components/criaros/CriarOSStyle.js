import { StyleSheet} from "react-native";

export const CriarOSStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
    paddingTop: 20,    
  },
  header: {
    fontSize: 22,
    fontFamily: "Montserrat_700Bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    color: "#221208",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
  card: {
    padding: 18,
  },
  componente: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: "Montserrat_700Bold",
    color: "#000000",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F2F3F5",
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    color: "#333333",
  },
  textArea: {
    height: 100,
  },
  img: {
    backgroundColor: "#F2F3F5",
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 14,
    justifyContent: "center",
  },
  imgText: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    color: "#9E9E9E",
  },
  button: {
    backgroundColor: "#10B981",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: "#FFFFFF",
  },
});