import { MinhasOS } from "./components/minhasos/MinhasOS";
import { Login } from "./components/login/Login";
import React from "react";
import { DetalheOS } from "./components/detalheos/DetalheOS";
import { Perfil } from "./components/perfil/Perfil"
import { CriarOS } from "./components/criaros/CriarOS";
import { Notificacoes } from "./components/notificacoes/Notificacoes";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { MinhasOSStyle }  from "./Styles";

export default function App() {
    return (
        <SafeAreaProvider>
        <SafeAreaView style={MinhasOSStyle.safeArea}>
            <View style={MinhasOSStyle.container}>
                {/* <MinhasOS /> */}
                <Login />
                {/* <DetalheOS />  */}
                {/* <Perfil />  */}
                {/* <CriarOS /> */}
                {/* <Notificacoes /> */}
                <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    </SafeAreaProvider >
    );
}


