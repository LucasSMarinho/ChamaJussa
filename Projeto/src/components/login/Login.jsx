import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_300Light } from "@expo-google-fonts/montserrat";
import { LoginStyle } from "./LoginStyle";
import { Image } from "react-native";
import { useState } from "react";


  export const Login = () => {

   const [email, setEmail] = useState("")
   const [senha, setSenha] = useState("")

  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={LoginStyle.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={LoginStyle.appImage}
      />
      <View style={LoginStyle.loginBox}>
        <View style={LoginStyle.titleBox}>
          <Text style={LoginStyle.title}>Chama Jussa</Text>
          <Text style={LoginStyle.subTitle}>Gereciamento de ordens de serviço</Text>
        </View>
        <View style={LoginStyle.inputContainer}>
          <View style={LoginStyle.inputBox}>
            <Text style={LoginStyle.text}>E-mail</Text>
            <TextInput style={LoginStyle.inputText} placeholder="E-mail" onChangeText={(text) => setEmail(text)}/>
          </View>
          <View style={LoginStyle.inputBox}>
            <Text style={LoginStyle.text}>Senha</Text>
            <TextInput style={LoginStyle.inputText} placeholder="Senha" onChangeText={(text) => setSenha(text)}/>
          </View>
          <TouchableOpacity onPress={() => AcessarSistema()} style={LoginStyle.button} >
            <Text style={LoginStyle.buttonText}>Acessar o sistema</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
