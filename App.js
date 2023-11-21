import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Halo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
