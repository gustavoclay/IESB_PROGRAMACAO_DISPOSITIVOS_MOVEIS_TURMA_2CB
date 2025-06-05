import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function Cronometro() {

  const [display, setDisplay] = useState('00:00:00')
  const [botaoTexto, setBotaoTexto] = useState('Iniciar')
  const [ultimoTempo, setUltimoTempo] = useState(null)

  function start() {

    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setBotaoTexto('Iniciar')
    } else {
      timer = setInterval(() => {
        ss++;

        if (ss === 60) {
          ss = 0;
          mm++;
        }

        if (mm === 60) {
          mm = 0;
          hh++;
        }

        let format = (hh < 10 ? '0' : '') + hh
          + ':' + (mm < 10 ? '0' : '') + mm
          + ':' + (ss < 10 ? '0' : '') + ss;

        setDisplay(format)

      }, 100)
      setBotaoTexto('Parar')

    }

  }

  function clear() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;

    }

    ss = 0;
    mm = 0;
    hh = 0;

    setUltimoTempo(display)

    setDisplay('00:00:00')
    setBotaoTexto('Iniciar')

  }




  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://static.vecteezy.com/system/resources/previews/012/067/332/original/hand-holding-a-stopwatch-timer-png.png' }}
        style={styles.img}
      />


      <View style={styles.display}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.botaoArea}>

        <TouchableOpacity
          style={styles.botao}
          onPress={start}
        >
          <Text style={styles.botaoTexto} >{botaoTexto}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={clear}
        >
          <Text style={styles.botaoTexto} >Reiniciar</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.ultimoTempoArea}>
        <Text style={styles.ultimoTempoTexto} >{ultimoTempo ? 'Últimpo tempo: ' + ultimoTempo : ''}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EC9454',
    gap: 30
  }, img: {
    width: 200,
    height: 200
  },
  display: {
    backgroundColor: '#8E3343',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20
  },
  displayText: {
    color: '#F1F08A',
    fontSize: 50,
  },
  botaoArea: {
    flexDirection: 'row',
    height: 40,
    gap: 20,
    marginLeft: 20,
    marginRight: 20
  },
  botao: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#8E3343',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    backgroundColor: '#C6CD78',
  },
  botaoTexto: {
    color: '#8E3343',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ultimoTempoArea: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ultimoTempoTexto: {
    color: '#8E3343',
    fontSize: 20,
    fontStyle: 'italic'
  }
})