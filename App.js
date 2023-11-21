import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} />
      <View style={styles.headerBar}>
        <Text style={styles.headerText}>Hi, Budy</Text>
        <Icon name="notifications-outline" size={20} />
        <Image style={styles.profileImage} source={{ uri: 'https://mir-s3-cdn-cf.behance.net/user/230/b84884232236245.5f8ce5f911f5d.jpg' }} />
      </View>
      <View style={styles.balanceContanier}>
        <Text style={styles.balanceAmount}>$13.454,-</Text>
        <Text style={styles.balanceText}>Available balance</Text>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 18,
    paddingTop: 22,
  },

  // Header bar START
  headerBar: {
    flexDirection: 'row',
    paddingVertical: 8,
    gap: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 12,
  },
  headerText: {
    flex: 1,
  },
  // Header bar END

  balanceContanier: {
    paddingVertical: 8,
  },

  balanceAmount: {
    fontSize: 32,
  },
  balanceText: {
    fontSize: 14,
    color: 'grey',
  },
});
