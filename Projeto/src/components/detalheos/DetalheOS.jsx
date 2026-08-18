import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { DetalheOSStyle } from "./DetalheOSStyle";
import React from "react";
import { Footer } from "../footer/Footer";



export const DetalheOS = () => {
    return (
        <View style={DetalheOSStyle.container}>

            <View style={DetalheOSStyle.header}>
                <Text style={DetalheOSStyle.titulo}>
                    Detalhes da OS-1001
                </Text>
            </View>

            <ScrollView style={DetalheOSStyle.card}>

                <View style={DetalheOSStyle.detalhes}>
                    <Text style={DetalheOSStyle.title}>
                        vazamento de hidráulico
                    </Text>
                    <Text style={DetalheOSStyle.subtitle}>
                        Criada em 17/06/2024 às 14:30
                    </Text>
                </View>

                <View style={DetalheOSStyle.Equipamento}>
                    <Image
                        source={require("../../../assets/Máquina.png")}
                        style={DetalheOSStyle.icon}
                    />
                    <View>
                        <Text style={DetalheOSStyle.label}>Máquina / Equipamento</Text>
                        <Text style={DetalheOSStyle.value}>Tubulação/Sifão da Pia</Text>
                    </View>
                </View>

                <View style={DetalheOSStyle.Equipamento}>
                    <Image
                        source={require("../../../assets/Local.png")}
                        style={DetalheOSStyle.icon}
                    />
                    <View>
                        <Text style={DetalheOSStyle.label}>Local / Setor</Text>
                        <Text style={DetalheOSStyle.value}>
                            Banheiro Masculino - Bloco B - 2º Andar
                        </Text>
                    </View>
                </View>

                <View style={DetalheOSStyle.Equipamento}>
                    <Image
                        source={require("../../../assets/Solicitante.png")}
                        style={DetalheOSStyle.icon}
                    />
                    <View>
                        <Text style={DetalheOSStyle.label}>Solicitante</Text>
                        <Text style={DetalheOSStyle.value}>Késsia Milena</Text>
                    </View>
                </View>

                <View style={DetalheOSStyle.descricao}>
                    <Text style={DetalheOSStyle.Title}>Descrição do Problema</Text>
                    <Text style={DetalheOSStyle.Problema}>
                        Há um vazamento constante de água por baixo da pia do banheiro
                    </Text>
                </View>

                <View style={DetalheOSStyle.imgdoproblema}>
                    <Text style={DetalheOSStyle.Title}>Foto do Problema</Text>
                    <Image
                        source={require("../../../assets/logo.png")}
                        style={DetalheOSStyle.image}
                    />
                </View>
            </ScrollView>

            <View style={DetalheOSStyle.buttonContainer}>
                <TouchableOpacity style={DetalheOSStyle.button}>
                    <Text style={DetalheOSStyle.buttonText}>Editar Solicitação</Text>
                </TouchableOpacity>
            </View>

            <Footer />

        </View>
    )
}