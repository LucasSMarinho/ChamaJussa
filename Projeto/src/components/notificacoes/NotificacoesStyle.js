import { StyleSheet } from "react-native";

export const NotificacoesStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F3F4F6",
        padding: 15,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    icon: {
        width: 22,
        height: 22,
        resizeMode: "contain",
    },
    lista: {
        flex: 1,
    },

    card: {
        backgroundColor: "#FFFFFF",
        minHeight: 85,
        borderRadius: 6,
        marginBottom: 15,
        padding: 12,

        flexDirection: "row",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3,

        elevation: 3,
    },

    iconBox: {
        width: 35,
        height: 35,
        borderRadius: 20,
        backgroundColor: "#E8F7FF",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 10,
    },

    icon: {
        fontSize: 17,
    },

    info: {
        flex: 1,
    },

    cardTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#222",
        marginBottom: 5,
    },

    description: {
        fontSize: 10,
        color: "#777",
        lineHeight: 14,
    },

    date: {
        fontSize: 9,
        color: "#999",
        marginTop: 5,
    },

    time: {
        fontSize: 9,
        color: "#777",
        alignSelf: "flex-end",
    },

});