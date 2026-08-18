import {
    useFonts,
    Montserrat_700Bold,
    Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

import { CriarOSStyle } from "./CriarOSStyle";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { Footer } from "../footer/Footer";


export const CriarOS = () => {

    const [titulo, setTitulo] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [local, setLocal] = useState("");
    const [descricao, setDescricao] = useState("");

    const [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={CriarOSStyle.container}>

            <View style={CriarOSStyle.header}>
                <Text style={CriarOSStyle.titulo}>
                    Criar Ordem de Serviço
                </Text>
            </View>
            <ScrollView style={CriarOSStyle.card}>

                <View style={CriarOSStyle.componente}>
                    <Text style={CriarOSStyle.label}>Título do problema *</Text>
                    <TextInput
                        style={CriarOSStyle.input}
                        placeholder="Ex: Vazamento da pia"
                        placeholderTextColor="#9E9E9E"
                        value={titulo}
                        onChangeText={setTitulo}
                    />
                </View>

                <View style={CriarOSStyle.componente}>
                    <Text style={CriarOSStyle.label}>Máquina / Equipamento *</Text>
                    <TextInput
                        style={CriarOSStyle.input}
                        placeholder="Ex: Tubulação/Sifão da Pia"
                        placeholderTextColor="#9E9E9E"
                        value={equipamento}
                        onChangeText={setEquipamento}
                    />
                </View>

                <View style={CriarOSStyle.componente}>
                    <Text style={CriarOSStyle.label}>Local / Setor *</Text>
                    <TextInput
                        style={CriarOSStyle.input}
                        placeholder="Ex: Banheiro Masculino - Bloco B"
                        placeholderTextColor="#9E9E9E"
                        value={local}
                        onChangeText={setLocal}
                    />
                </View>

                <View style={CriarOSStyle.componente}>
                    <Text style={CriarOSStyle.label}>Descrição do problema *</Text>
                    <TextInput
                        style={[CriarOSStyle.input, CriarOSStyle.textArea]}
                        placeholder="Descreva o problema em detalhes..."
                        placeholderTextColor="#9E9E9E"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                </View>

                <View style={CriarOSStyle.componente}>
                    <Text style={CriarOSStyle.label}>Imagem / Foto do problema *</Text>
                    <TouchableOpacity activeOpacity={0.8} style={CriarOSStyle.img}>
                        <Text style={CriarOSStyle.imgText}>Insira imagem</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity activeOpacity={0.85} style={CriarOSStyle.button}>
                    <Text style={CriarOSStyle.buttonText}>Abrir Ordem de Serviço</Text>
                </TouchableOpacity>

            </ScrollView>

            <Footer />

        </View>
    );
}