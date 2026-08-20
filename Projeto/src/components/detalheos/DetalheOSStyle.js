import { StyleSheet } from "react-native";

export const DetalheOSStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 20,
  },
  containerDetalheOs: {
    flex: 1,
  },
  header: {
    marginBottom: 12,
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
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 7,
    boxShadow: " 5px 5px 3px #b5b5b561"
  },
  detalhes: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    color: "#221208",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: "Montserrat_300Light",
    color: "#0e0d0d",
    marginTop: 2,
  },
  Equipamento: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
  },
  label: {
    fontSize: 10,
    fontFamily: "Montserrat_300Light",
    color: "#000000",
  },
  value: {
    fontSize: 12,
    fontFamily: "Montserrat_700Bold",
    color: "#221208",
    marginTop: 2,
  },

  descricao: {
    marginBottom: 8,
    borderTopWidth: 1,
    borderTopColor: "#CBBBB4",
    paddingTop: 16,
  },
  Title: {
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
    color: "#221208",
    marginBottom: 6,
  },
  Problema: {
    fontSize: 14,
    fontFamily: "Montserrat_300Light",
    color: "#000000",
    lineHeight: 20,
  },
  imgdoproblema: {
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 6,
    backgroundColor: "#C4A89B",
  },
  buttonContainer: {
    paddingTop: 12,
  },
  button: {
    paddingVertical: 14,
    borderColor: "#2563EB",
    borderWidth: 1,
    boderRadius: 20,
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    color: "#2563EB",
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
  },
});