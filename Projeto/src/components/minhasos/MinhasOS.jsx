import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { MinhasOSStyle } from "./MinhasOSStyle";
import { useEffect, useState } from "react";
import { Footer } from "../footer/Footer";
import api from "../../service/APIService";


export const MinhasOS = () => {


    const [listagem, setListagem] = useState([])
    const [selecao, setSelecao] = useState("Todos")

    useEffect(() => {
        funcGet()
    }, [])

    const listaFiltrada = listagem.filter((card) => {
    if (selecao === "Todos") {
        return true;
    }

    if (selecao === "Abertas") {
        return card.status === "Aberta";
    }

    if (selecao === "Em Andamento") {
        return card.status === "Andamento";
    }

    if (selecao === "Concluídas") {
        return card.status === "Fechada";
    }

    return true;
});

    const funcGet = async () => {
        try {
            const responseAPI = await api.get("/api/OrdemServico")
            const APIData = await responseAPI.data
            setListagem(APIData)
            console.log(APIData)

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View style={MinhasOSStyle.containerOs}>
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

                    <TouchableOpacity onPress={() => setSelecao("Todos")} style={selecao == "Todos" ? MinhasOSStyle.filtroSelecionado : MinhasOSStyle.filtro}>
                        <Text style={selecao == "Todos" ? MinhasOSStyle.textoFiltroSelecionado : MinhasOSStyle.textoFiltro}>
                            Todos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelecao("Abertas")} style={selecao == "Abertas" ? MinhasOSStyle.filtroSelecionado : MinhasOSStyle.filtro}>
                        <Text style={selecao == "Abertas" ? MinhasOSStyle.textoFiltroSelecionado : MinhasOSStyle.textoFiltro}>
                            Abertas
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelecao("Em Andamento")} style={selecao == "Em Andamento" ? MinhasOSStyle.filtroSelecionado : MinhasOSStyle.filtro}>
                        <Text style={selecao == "Em Andamento" ? MinhasOSStyle.textoFiltroSelecionado : MinhasOSStyle.textoFiltro}>
                            Em Andamento
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setSelecao("Concluídas")} style={selecao == "Concluídas" ? MinhasOSStyle.filtroSelecionado : MinhasOSStyle.filtro}>
                        <Text style={selecao == "Concluídas" ? MinhasOSStyle.textoFiltroSelecionado : MinhasOSStyle.textoFiltro}>
                            Concluídas
                        </Text>
                    </TouchableOpacity>

                </View>

                <ScrollView style={MinhasOSStyle.lista}>

                    {listaFiltrada.map((card) => {
                        return (
                            <View style={MinhasOSStyle.card} key={card.idOrdemServico}>

                                <View style={MinhasOSStyle.cardCabecalho}>

                                    <Text style={MinhasOSStyle.numeroOS}>
                                        {`OS - ${String(listagem.indexOf(card) + 1).padStart(3, "0")}`}
                                    </Text>

                                    <View style={[MinhasOSStyle[`status${card.status}`], MinhasOSStyle.status]}>
                                        <Text style={[MinhasOSStyle[`statusTexto${card.status}`], MinhasOSStyle.statusTexto]}>
                                            {card.status}
                                        </Text>
                                    </View>

                                </View>

                                <Text style={MinhasOSStyle.tituloOS}>
                                    {card.tituloProblema}
                                </Text>

                                <Text style={MinhasOSStyle.descricao}>
                                    {card.descricao}
                                </Text>

                            </View>
                        )
                    }
                    )}



                </ScrollView>

            </View>
            <Footer />
        </View>
    );
};