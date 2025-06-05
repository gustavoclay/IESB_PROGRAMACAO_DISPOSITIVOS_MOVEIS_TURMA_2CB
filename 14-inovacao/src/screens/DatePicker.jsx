import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';



export default function DatePicker() {

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <SafeAreaView>
      <View style={{  gap: 20 }}>
        <Button onPress={showDatepicker} title="Selecionar Data" />
        <Button onPress={showTimepicker} title="Selecionar Hora" />
        <Text>Selecionado: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
