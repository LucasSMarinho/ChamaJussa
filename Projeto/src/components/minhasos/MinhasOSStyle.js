import { StyleSheet } from "react-native";

export const MinhasOSStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 30
    },

    containerOs: {
        flex: 1,
        backgroundColor: "#F4F5F7",
        
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
        paddingHorizontal: 24,
        borderRadius: 10
    },

    textoFiltroSelecionado: {
        color: "#fff",
        fontSize: 15
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
        fontSize: 14
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
        fontSize: 17,
        fontWeight: "bold",
        color: "#087CF0"
    },

    status: {
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10
    },

    statusFechada: {
        backgroundColor: "#CE582185",
    },

    statusAberta: {
        backgroundColor: "#DCEAFF",
    },

    statusAndamento: {
        backgroundColor: "#8CCE2185",
    },

    statusTexto: {
        fontSize: 13,
        fontWeight: "bold"
    },

    statusTextoAberta: {
        color: "#2D87FF",
        fontSize: 13,
        fontWeight: "bold"
    },

    statusTextoAndamento: {
        color: "#188D00",
        fontSize: 13,
        fontWeight: "bold"
    },

    statusTextoFechada: {
        color: "#8D2D00",
        fontSize: 13,
        fontWeight: "bold"
    },

    tituloOS: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginTop: 10,
        marginBottom: 5
    },

    descricao: {
        fontSize: 14,
        color: "#777",
        lineHeight: 18
    }

});