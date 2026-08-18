import { View, Text, ScrollView, Image } from "react-native";
import { NotificacoesStyle } from "./NotificacoesStyle";
import { Footer } from "../footer/Footer";

export const Notificacoes = () => {
    return (
        <View style={NotificacoesStyle.container}>

            <Text style={NotificacoesStyle.title}>
                Notificações
            </Text>

            <ScrollView style={NotificacoesStyle.lista}>

                <View style={NotificacoesStyle.card}>

                    <View style={NotificacoesStyle.iconBox}>
                        <Image
                            source={require("../../../assets/bullhorn.png")}
                            style={NotificacoesStyle.icon}
                        />
                    </View>

                    <View style={NotificacoesStyle.info}>

                        <Text style={NotificacoesStyle.cardTitle}>
                            Ordem de Serviço finalizada
                        </Text>

                        <Text style={NotificacoesStyle.description}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>

                        <Text style={NotificacoesStyle.date}>
                            22/06/2026
                        </Text>

                    </View>

                    <Text style={NotificacoesStyle.time}>
                        16:03
                    </Text>

                </View>


                <View style={NotificacoesStyle.card}>

                    <View style={NotificacoesStyle.iconBox}>
                        <Image
                            source={require("../../../assets/bullhorn.png")}
                            style={NotificacoesStyle.icon}
                        />
                    </View>

                    <View style={NotificacoesStyle.info}>

                        <Text style={NotificacoesStyle.cardTitle}>
                            Ordem de Serviço finalizada
                        </Text>

                        <Text style={NotificacoesStyle.description}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>

                        <Text style={NotificacoesStyle.date}>
                            22/06/2026
                        </Text>

                    </View>

                    <Text style={NotificacoesStyle.time}>
                        16:03
                    </Text>

                </View>


                <View style={NotificacoesStyle.card}>

                    <View style={NotificacoesStyle.iconBox}>
                        <Image
                            source={require("../../../assets/bullhorn.png")}
                            style={NotificacoesStyle.icon}
                        />
                    </View>

                    <View style={NotificacoesStyle.info}>

                        <Text style={NotificacoesStyle.cardTitle}>
                            Ordem de Serviço finalizada
                        </Text>

                        <Text style={NotificacoesStyle.description}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>

                        <Text style={NotificacoesStyle.date}>
                            22/06/2026
                        </Text>

                    </View>

                    <Text style={NotificacoesStyle.time}>
                        16:03
                    </Text>

                </View>


                <View style={NotificacoesStyle.card}>

                    <View style={NotificacoesStyle.iconBox}>
                        <Image
                            source={require("../../../assets/bullhorn.png")}
                            style={NotificacoesStyle.icon}
                        />
                    </View>

                    <View style={NotificacoesStyle.info}>

                        <Text style={NotificacoesStyle.cardTitle}>
                            Ordem de Serviço finalizada
                        </Text>

                        <Text style={NotificacoesStyle.description}>
                            Sua OS foi finalizada, logo ela voltará para sua sala.
                        </Text>

                        <Text style={NotificacoesStyle.date}>
                            22/06/2026
                        </Text>

                    </View>

                    <Text style={NotificacoesStyle.time}>
                        16:03
                    </Text>

                </View>

            </ScrollView>

            <Footer />

        </View>
    );
};