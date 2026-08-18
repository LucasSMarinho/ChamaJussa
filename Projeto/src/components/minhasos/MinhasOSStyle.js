import { StyleSheet } from "react-native";

export const MinhasOSStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        padding: 15
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },

    ola: {
        fontSize: 12,
        color: "#555"
    },

    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#222",
        marginTop: 3
    },

    botaoNovaOS: {
        backgroundColor: "#087CF0",
        paddingVertical: 9,
        paddingHorizontal: 14,
        borderRadius: 5
    },

    textoBotao: {
        color: "#fff",
        fontSize: 11,
        fontWeight: "bold"
    },

    filtros: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 6,
        marginBottom: 15
    },

    filtroSelecionado: {
        backgroundColor: "#087CF0",
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 10
    },

    textoFiltroSelecionado: {
        color: "#fff",
        fontSize: 10
    },

    filtro: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#D8D8D8",
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 10
    },

    textoFiltro: {
        color: "#888",
        fontSize: 10
    },

    lista: {
        flex: 1
    },

    card: {
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 6,
        marginBottom: 12,

       
    },

    cardCabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    numeroOS: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#087CF0"
    },

    status: {
        backgroundColor: "#DCEAFF",
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10
    },

    statusTexto: {
        color: "#087CF0",
        fontSize: 9,
        fontWeight: "bold"
    },

    tituloOS: {
        fontSize: 13,
        fontWeight: "bold",
        color: "#333",
        marginTop: 10,
        marginBottom: 5
    },

    descricao: {
        fontSize: 10,
        color: "#777",
        lineHeight: 15
    }

});