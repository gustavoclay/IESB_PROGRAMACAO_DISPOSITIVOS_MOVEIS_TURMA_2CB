import { StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import React from 'react'

export default function EstatisticasScreen() {

  const estatisticas = {
    totalPublico: 3404252,
    totalJogos: 64,
    totalGols: 172,
    totalCartoesAmarelos: 288,
    totalCartoesVermelhos: 13,
    totalEstadios: 8,
    totalSelecoes: 32,
    totalJogadores: 831
  };

  function mediaGols() {
    return estatisticas.totalGols / estatisticas.totalJogos;
  }

  function mediaPublico() {
    return estatisticas.totalPublico / estatisticas.totalJogos;
  }

  function mediaCartoes() {
    return (estatisticas.totalCartoesAmarelos + estatisticas.totalCartoesVermelhos) / estatisticas.totalJogos;
  }
  

  return (
    <View>
      <Card style={{ margin: 10 }}>
        <Card.Title title="Estatísticas" />
        <Card.Content>
          <Text>Jogos: {estatisticas.totalJogos}</Text>
          <Text>Gols: {estatisticas.totalGols}</Text>
          <Text>Publico Total: {estatisticas.totalPublico}</Text>
          <Text>Média de Gols: {mediaGols().toFixed(1)}</Text>
          <Text>Média de Público: {mediaPublico().toFixed(0)}</Text>
          <Text>Média de Cartões: {mediaCartoes().toFixed(0)}</Text>
        </Card.Content>


      </Card>
    </View>
  )
}
