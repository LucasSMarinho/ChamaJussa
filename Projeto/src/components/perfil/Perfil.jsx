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


    
      <View style={PerfilStyle.content}>

  
        <View style={PerfilStyle.profileCard}>


  
          <View style={PerfilStyle.imageContainer}>
            <Image
              source={require("../../../assets/images.jpg")}
              style={PerfilStyle.profileImage}
              resizeMode="cover"
            />
          </View>

       
          <Text style={PerfilStyle.name}>
            Kessia Milena
          </Text>

       
          <Text style={PerfilStyle.email}>
            kessia@email.com
          </Text>

        </View>

        
        <TouchableOpacity style={PerfilStyle.logoutButton}>
          <Text style={PerfilStyle.logoutButtonText}>
            Sair da Conta
          </Text>
        </TouchableOpacity>

      </View>

        <Footer />

    </View>
  );
};