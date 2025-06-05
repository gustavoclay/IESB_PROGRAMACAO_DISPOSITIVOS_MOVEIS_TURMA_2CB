import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BiscoitoDaSorte() {

  const [img, setImg] = useState(require('../../assets/biscoito_sorte/biscoito_fechado.png'));
  const [textoFraseSorte, setTextoFraseSorte] = useState('');
  const [botaoDisabled, setBotaoDisabled] = useState(false);

  let frases = [
    "Acredite nos seus sonhos e faça acontecer.",
    "O sucesso vem para aqueles que persistem.",
    "Sorria para o mundo e o mundo sorrirá de volta para você.",
    "Aventure-se em territórios desconhecidos e descubra o extraordinário.",
    "A felicidade está nas pequenas coisas da vida, aproveite cada momento.",
  ];

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFraseSorte(`"${frases[numeroAleatorio]}"`)
    setImg(require('../../assets/biscoito_sorte/biscoito_aberto.png'))
    setBotaoDisabled(true)
  }

  function reiniciarBiscoito() {
    setImg(require('../../assets/biscoito_sorte/biscoito_fechado.png'))
    setTextoFraseSorte('')
    setBotaoDisabled(false)
  }


  return (
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textoFraseSorte}>{textoFraseSorte}</Text>

      <TouchableOpacity style={styles.botao} disabled={botaoDisabled} onPress={quebrarBiscoito}>
        <View style={styles.botaoArea}>
          <Text style={styles.botaoTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={reiniciarBiscoito}>
        <View style={styles.botaoArea}>
          <Text style={styles.botaoTexto}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 250,
    height: 180,
  },
  textoFraseSorte: {
    fontSize: 20,
    color: 'orange',
    fontStyle: 'italic',
    margin: 20
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 25,
    margin: 10
  },
  botaoArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange'
  }
})