import { StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './screen/home/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
