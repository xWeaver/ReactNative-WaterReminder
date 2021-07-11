import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View,
  Switch,
  TouchableOpacity, } from 'react-native';
import {TimePicker} from 'react-native-simple-time-picker';

const App = () => {
  const [selectedHours, setSelectedHours] = useState(0);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>
         Enable/Disable Reminder
        </Text>
      <Switch
        trackColor={{ false: "#5e4846", true: "#91cc9b" }}
        thumbColor={isEnabled ? "#185911" : "#f4f3f4"}
        ios_backgroundColor="#402626"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        <Text>
         Please select the time to remind you when to drink water.
        </Text>
        <TimePicker
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
          }}
        />
        <TouchableOpacity
      style={styles.buttonCalc}
      >
      <Text>Set Time</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  buttonCalc:{
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 15,
    marginBottom: 30,
    padding: 10,
    borderRadius: 50,
  },
});
