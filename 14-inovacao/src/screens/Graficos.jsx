import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BarChart, LineChart, PieChart, PopulationPyramid, RadarChart } from "react-native-gifted-charts";

export default function Graficos() {

  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Graficos</Text>
        <BarChart data={data} />
        <LineChart data={data} />
        <PieChart data={data} />
        <PopulationPyramid data={[{ left: 10, right: 12 }, { left: 9, right: 8 }]} />
        <RadarChart data={[50, 80, 90, 70]} />
        <BarChart data={data} horizontal />
        <LineChart data={data} areaChart />
        <PieChart data={data} donut />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})