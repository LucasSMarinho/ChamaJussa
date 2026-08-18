import { StyleSheet } from "react-native";

export const FooterStyle = StyleSheet.create({
  footer: {
    width: "100%",
    height: 65,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row', 
    justify: 'space-around', 
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },

  item: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },

  icone: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },

  texto: {
    fontSize: 12,
    color: '#777777',
    fontWeight: '500',
    textAlign: 'center',
  },

  textoAtivo: {
    color: '#0A7EA4',
    fontWeight: '600',
  },
});