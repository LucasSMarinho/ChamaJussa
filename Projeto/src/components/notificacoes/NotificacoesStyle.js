import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F4F2F2",
    },

    // HEADER
    header: {
        height: 58,
        // backgroundColor: "#F8E8A8",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 10,
    },

    headerTitulo: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4A421E",
    },

    // LISTA
    lista: {
        flex: 1,
        paddingHorizontal: 17,
        paddingTop: 28,
    },

    // CARD
    card: {
        width: "100%",
        minHeight: 86,
        // backgroundColor: "#E5C5C5",
        borderRadius: 3,
        marginBottom: 17,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 10,

        elevation: 3,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.18,
        shadowRadius: 2,
    },

    // IMAGEM
    imagem: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: "#A7B9DC",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 8,
    },

    imagemTexto: {
        fontSize: 15,
        color: "#222",
    },

    // CONTEÚDO
    conteudo: {
        flex: 1,
        paddingVertical: 8,
    },

    titulo: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#272020",
        marginBottom: 3,
    },

    texto: {
        fontSize: 10,
        color: "#777070",
        lineHeight: 14,
        paddingRight: 5,
    },

    // DATA E HORA
    informacoes: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 3,
    },

    data: {
        fontSize: 9,
        color: "#777070",
    },

    hora: {
        fontSize: 9,
        color: "#777070",
        marginRight: 8,
    },

    // FOOTER
    footer: {
        height: 61,
        backgroundColor: "#E9E5E5",

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

        borderTopWidth: 1,
        borderTopColor: "#D4D0D0",
    },

    menu: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    menuTexto: {
        fontSize: 9,
        color: "#777",
        marginTop: 2,
    },

    menuTextoAtivo: {
        fontSize: 9,
        color: "#168EBB",
        fontWeight: "bold",
        marginTop: 2,
    },

});

export default styles;