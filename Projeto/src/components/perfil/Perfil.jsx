import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";

import { Ionicons } from "@expo/vector-icons";

import { PerfilStyle } from "./PerfilStyle";
import { Footer } from "../footer/Footer";

export const Perfil = () => {
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={PerfilStyle.container}>

      {/* HEADER */}
      <View style={PerfilStyle.header}>
       
      </View>

      {/* CONTEÚDO */}
      <View style={PerfilStyle.content}>

        {/* CARD DO PERFIL */}
        <View style={PerfilStyle.profileCard}>


          {/* FOTO */}
          <View style={PerfilStyle.imageContainer}>
            <Image
              source={require("../../../assets/Perfil.png")}
              style={PerfilStyle.profileImage}
              resizeMode="cover"
            />
          </View>

          {/* NOME */}
          <Text style={PerfilStyle.name}>
            Kessia Milena
          </Text>

          {/* EMAIL */}
          <Text style={PerfilStyle.email}>
            kessia@email.com
          </Text>

        </View>

        {/* BOTÃO SAIR */}
        <TouchableOpacity style={PerfilStyle.logoutButton}>
          <Text style={PerfilStyle.logoutButtonText}>
            Sair da Conta
          </Text>
        </TouchableOpacity>

      </View>

      {/* FOOTER */}      

        
        <Footer />

    </View>
  );
};