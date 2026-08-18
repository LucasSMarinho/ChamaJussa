import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { MinhasOSStyle } from "./MinhasOSStyle";
import React from "react";
import { Footer } from "../footer/Footer";

export const MinhasOS = () => {
    return (
        <View style={MinhasOSStyle.container}>

            <View style={MinhasOSStyle.header}>

                <View>
                    <Text style={MinhasOSStyle.ola}>
                        Olá, Késsia
                    </Text>

                    <Text style={MinhasOSStyle.titulo}>
                        Minhas OS's
                    </Text>
                </View>

                <TouchableOpacity style={MinhasOSStyle.botaoNovaOS}>
                    <Text style={MinhasOSStyle.textoBotao}>
                        Nova OS
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={MinhasOSStyle.filtros}>

                <TouchableOpacity style={MinhasOSStyle.filtroSelecionado}>
                    <Text style={MinhasOSStyle.textoFiltroSelecionado}>
                        Todos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={MinhasOSStyle.filtro}>
                    <Text style={MinhasOSStyle.textoFiltro}>
                        Abertas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={MinhasOSStyle.filtro}>
                    <Text style={MinhasOSStyle.textoFiltro}>
                        Em Andamento
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={MinhasOSStyle.filtro}>
                    <Text style={MinhasOSStyle.textoFiltro}>
                        Concluídas
                    </Text>
                </TouchableOpacity>

            </View>

            <ScrollView style={MinhasOSStyle.lista}>

                <View style={MinhasOSStyle.card}>

                    <View style={MinhasOSStyle.cardCabecalho}>

                        <Text style={MinhasOSStyle.numeroOS}>
                            OS - 001
                        </Text>

                        <View style={MinhasOSStyle.status}>
                            <Text style={MinhasOSStyle.statusTexto}>
                                Aberta
                            </Text>
                        </View>

                    </View>

                    <Text style={MinhasOSStyle.tituloOS}>
                        Vazamento hidráulico no Bloco B
                    </Text>

                    <Text style={MinhasOSStyle.descricao}>
                        Há um vazamento constante de água por baixo da pia do banheiro
                        masculino do segundo andar do Bloco B.
                    </Text>

                </View>

                <View style={MinhasOSStyle.card}>

                    <View style={MinhasOSStyle.cardCabecalho}>

                        <Text style={MinhasOSStyle.numeroOS}>
                            OS - 002
                        </Text>

                        <View style={MinhasOSStyle.status}>
                            <Text style={MinhasOSStyle.statusTexto}>
                                Aberta
                            </Text>
                        </View>

                    </View>

                    <Text style={MinhasOSStyle.tituloOS}>
                        Problema elétrico
                    </Text>

                    <Text style={MinhasOSStyle.descricao}>
                        Foi identificado um problema na iluminação do corredor
                        do segundo andar.
                    </Text>

                </View>

            </ScrollView>
            
            <Footer />

        </View>
    );
};