import { StyleSheet } from "react-native";

export const PerfilStyle = StyleSheet.create({

  /*
   * TELA
   */
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  /*
   * HEADER
   */
  header: {
    height: 40,
    backgroundColor: "#F4F5F7",

    justifyContent: "center",
    alignItems: "flex-start",

    paddingHorizontal: 14,

    borderBottomWidth: 1,
    borderBottomColor: "#F4F5F7",
  },

  headerTitle: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 13,
    color: "#38321E",
  },

  /*
   * CONTEÚDO CENTRAL
   */
  content: {
    flex: 1,

    alignItems: "center",

    paddingTop: 25,
    paddingHorizontal: 13,
  },

  /*
   * CARD DO PERFIL
   */
  profileCard: {
    width: "100%",
    height: 177,

    backgroundColor: "#FFFFF",

    borderRadius: 3,

    alignItems: "center",

    paddingTop: 13,

    elevation: 3,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },

  /*
   * TEXTO "VIEW"
   */
  viewText: {
    position: "absolute",

    left: 11,
    top: 12,

    fontFamily: "Montserrat_300Light",
    fontSize: 14,

    color: "#222222",
  },

  /*
   * CÍRCULO DA FOTO
   */
  imageContainer: {
    width: 70,
    height: 70,

    borderRadius: 35,

    overflow: "hidden",

    marginTop: 13,

    backgroundColor: "#A7D3EF",

    justifyContent: "center",
    alignItems: "center",
  },

  profileImage: {
    width: 70,
    height: 70,
  },

  /*
   * NOME
   */
  name: {
    fontFamily: "Montserrat_700Bold",

    fontSize: 12,

    color: "#222222",

    marginTop: 12,
  },

  /*
   * EMAIL
   */
  email: {
    fontFamily: "Montserrat_300Light",

    fontSize: 10,

    color: "#777777",

    marginTop: 5,
  },

  /*
   * BOTÃO SAIR
   */
  logoutButton: {
    width: "100%",
    height: 26,

    backgroundColor: "#ff1000",

    borderRadius: 4,

    marginTop: 20,

    paddingHorizontal: 13,

    justifyContent: "center",

    elevation: 2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2,
  },

  logoutButtonText: {
    fontFamily: "Montserrat_300Light",

    fontSize: 13,

    color: "#FFFFFF",
  },

  /*
   * FOOTER
   */
  footer: {
    height: 48,

    backgroundColor: "#E6E2E6",

    flexDirection: "row",

    justifyContent: "space-around",
    alignItems: "center",

    borderTopWidth: 1,
    borderTopColor: "#D8D4D8",
  },

  /*
   * ITEM DO FOOTER
   */
  footerItem: {
    flex: 1,

    height: "100%",

    alignItems: "center",
    justifyContent: "center",

    gap: 2,
  },

  /*
   * TEXTO DO FOOTER
   */
  footerText: {
    fontFamily: "Montserrat_300Light",

    fontSize: 8,

    color: "#777777",

    textAlign: "center",
  },

  /*
   * ITEM ATIVO
   */
  activeFooterText: {
    color: "#2196C9",
  },

}); 