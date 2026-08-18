import { StyleSheet } from "react-native";

export const DetalheOSStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 20,
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
    borderWidth: 1,
    borderColor: "#CBBBB4",
    boderRadius: 20,

  },
  detalhes: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: "Montserrat_700Bold",
    color: "#221208",
  },
  subtitle: {
    fontSize: 13,
    fontFamily: "Montserrat_300Light",
    color: "#0e0d0d",
    marginTop: 2,
  },
  Equipamento: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 12,
  },
  label: {
    fontSize: 12,
    fontFamily: "Montserrat_300Light",
    color: "#000000",
  },
  value: {
    fontSize: 14,
    fontFamily: "Montserrat_700Bold",
    color: "#221208",
    marginTop: 2,
  },

  descricao: {
    marginTop: 8,
    marginBottom: 16,
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
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 6,
    marginTop: 8,
    backgroundColor: "#C4A89B",
  },
  buttonContainer: {
    paddingTop: 12,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderColor: "#3B4CCA",
    borderWidth: 1,
    boderRadius: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#3B4CCA",
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
  },
});