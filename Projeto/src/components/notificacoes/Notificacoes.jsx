import React from "react";
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./NotificacoesStyle";

export default function Notificacoes() {

    const notificacoes = [
        {
            titulo: "Ordem de Serviço finalizada",
            texto: "Sua OS foi finalizada, logo ela voltará para sua sala.",
            data: "22/06/2026",
            hora: "16:03",
        },
        {
            titulo: "Ordem de Serviço finalizada",
            texto: "Sua OS foi finalizada, logo ela voltará para sua sala.",
            data: "22/06/2026",
            hora: "16:03",
        },
        {
            titulo: "Ordem de Serviço finalizada",
            texto: "Sua OS foi finalizada, logo ela voltará para sua sala.",
            data: "22/06/2026",
            hora: "16:03",
        },
        {
            titulo: "Ordem de Serviço finalizada",
            texto: "Sua OS foi finalizada, logo ela voltará para sua sala.",
            data: "22/06/2026",
            hora: "16:03",
        },
    ];

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerTitulo}>
                    Notificações
                </Text>
            </View>

            {/* NOTIFICAÇÕES */}
            <ScrollView
                style={styles.lista}
                showsVerticalScrollIndicator={false}
            >

                {notificacoes.map((item, index) => (

                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                    >

                        {/* IMAGEM */}
                        <Image
                            source={require("../../../assets/Notificacoes.png")}
                            style={styles.imagem}
                            resizeMode="cover"
                        />

                        {/* CONTEÚDO */}
                        <View style={styles.conteudo}>

                            {/* TÍTULO */}
                            <Text style={styles.titulo}>
                                {item.titulo}
                            </Text>

                            {/* TEXTO */}
                            <Text style={styles.texto}>
                                {item.texto}
                            </Text>

                            {/* DATA E HORA */}
                            <View style={styles.informacoes}>

                                <Text style={styles.data}>
                                    {item.data}
                                </Text>

                                <Text style={styles.hora}>
                                    {item.hora}
                                </Text>

                            </View>

                        </View>

                    </TouchableOpacity>

                ))}

            </ScrollView>

            {/* FOOTER */}
            <View style={styles.footer}>

                {/* MINHAS OS */}
                <TouchableOpacity style={styles.menu}>
                    <Ionicons
                        name="list-outline"
                        size={22}
                        color="#777"
                    />

                    <Text style={styles.menuTexto}>
                        Minhas OS
                    </Text>
                </TouchableOpacity>

                {/* CRIAR OS */}
                <TouchableOpacity style={styles.menu}>
                    <Ionicons
                        name="add-circle-outline"
                        size={24}
                        color="#777"
                    />

                    <Text style={styles.menuTexto}>
                        Criar OS
                    </Text>
                </TouchableOpacity>

                {/* NOTIFICAÇÕES */}
                <TouchableOpacity style={styles.menu}>
                    <Ionicons
                        name="notifications-outline"
                        size={23}
                        color="#168EBB"
                    />

                    <Text style={styles.menuTextoAtivo}>
                        Notificações
                    </Text>
                </TouchableOpacity>

                {/* PERFIL */}
                <TouchableOpacity style={styles.menu}>
                    <Ionicons
                        name="person-outline"
                        size={22}
                        color="#777"
                    />

                    <Text style={styles.menuTexto}>
                        Perfil
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    );
}