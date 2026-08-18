import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FooterStyle } from './FooterStyle';

export const Footer = () => {
  const [selected, setSelected] = useState(0);

  const menu = [
    {
      nome: 'Minhas OS',
      icone: require('../../../assets/MinhasOS.png'),
    },
    {
      nome: 'Criar OS',
      icone: require('../../../assets/CriarOS.png'),
    },
    {
      nome: 'Notificações',
      icone: require('../../../assets/bullhorn.png'),
    },
    {
      nome: 'Perfil',
      icone: require('../../../assets/Perfil.png'),
    },
  ];

  return (
    <View style={FooterStyle.footer}>
      {menu.map((item, index) => {
        const ativo = selected === index;

        return (
          <TouchableOpacity
            key={index}
            style={FooterStyle.item}
            onPress={() => setSelected(index)}
            activeOpacity={0.7}
          >
            <Image
              source={item.icone}
              resizeMode="contain"
              style={[
                FooterStyle.icone, 
                ativo && FooterStyle.iconeAtivo,
              ]}
            />

            <Text
              style={[
                FooterStyle.texto, 
                ativo && FooterStyle.textoAtivo,
              ]}
            >
              {item.nome}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};