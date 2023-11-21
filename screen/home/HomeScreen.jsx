import { View, Text, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconMatC from 'react-native-vector-icons/MaterialCommunityIcons';
import { symbol } from 'prop-types';

const buttonList = [
  {
    label: 'Send',
    icon: 'credit-card-minus-outline',
  },
  {
    label: 'Request',
    icon: 'credit-card-plus-outline',
  },
  {
    label: 'Split',
    icon: 'credit-card-multiple-outline',
  },
  {
    label: 'QRCode',
    icon: 'credit-card-scan-outline',
  },
];

const ButtonIcon = ({ data }) => {
  const { label, icon } = data;
  return (
    <View style={styles.buttonIcon}>
      <View style={styles.wrapButton}>
        <IconMatC name={icon} color={'#4a5382'} size={22} />
      </View>
      <Text style={styles.buttonIconLabel}>{label}</Text>
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image source={{ uri: 'https://brandlogos.net/wp-content/uploads/2022/07/visa_inc-logo_brandlogos.net_iai1b-768x768.png' }} resizeMode="cover" height={28} width={28} />
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardTextWraper}>
          <Text style={styles.cardText}>Visa Master</Text>
          <Text style={styles.cardText}>$8.000,-</Text>
        </View>
        <View style={styles.cardTextWraper}>
          <Text style={styles.cardInfo}>***7634</Text>
          <Text style={styles.cardInfo}>02/04</Text>
        </View>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <LinearGradient colors={['#ff7e5f', '#768BFF']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} locations={[0, 0.7]} style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerBar}>
          <Text style={styles.headerText}>Hi, Budy</Text>
          <IconIon name="notifications-outline" color={'white'} size={22} />
          <Image style={styles.headerImage} source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocKQH_EladBScdxcmQkSE05pgCyRn2oHrPvNnQ-6JqZUp_c=s432-c-no' }} />
        </View>
        <View style={styles.balance}>
          <Text style={styles.balanceAmount}>$ 10.000,-</Text>
          <Text style={styles.balanceText}>Available balance</Text>
        </View>
        <View style={styles.listButton}>
          {buttonList.map((data, i) => (
            <ButtonIcon key={i} data={data} />
          ))}
        </View>
      </View>
      <ScrollView style={styles.listContent}>
        <View style={styles.listCardsWraper}>
          <View style={styles.listCardsHeader}>
            <Text style={styles.listCardHeaderText}>Your Cards</Text>
            <TouchableOpacity style={styles.defaultButton}>
              <Text style={styles.defaultButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listCardsContent}>
            {[1, 2].map((data, i) => (
              <Card key={i} data={data} />
            ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // Commont Styel START
  defaultButton: {},
  defaultButtonText: {
    color: '#8583ff',
  },
  // Commont Styel END
  homeContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  headerContainer: {
    paddingHorizontal: 14,
    gap: 12,
  },
  headerBar: {
    paddingVertical: 8,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  headerImage: {
    height: 30,
    width: 30,
    borderRadius: 12,
  },
  headerText: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  balance: {
    paddingVertical: 0,
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 32,
    color: 'white',
    fontWeight: '500',
  },
  balanceText: {
    fontSize: 12,
    color: 'white',
  },
  listButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  buttonIcon: {
    gap: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapButton: {
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 8,
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  buttonIconLabel: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },

  listContent: {
    backgroundColor: 'whitesmoke',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  //   List Card START
  listCardsWraper: { gap: 8, padding: 14 },
  listCardsHeader: { flexDirection: 'row', gap: 8, justifyContent: 'space-between', alignItems: 'center' },
  listCardHeaderText: { fontSize: 16, fontWeight: '500', color: '#373737' },
  listCardsContent: { backgroundColor: 'white', padding: 12, borderRadius: 16, gap: 16, elevation: 4 },
  //   List Card END

  //   Card START
  cardContainer: {
    flexDirection: 'row',
    gap: 8,
    flex: 1,
  },
  cardContent: {
    flex: 1,
  },
  cardImage: {
    width: 42,
    height: 42,
    borderRadius: 16,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTextWraper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  cardText: {
    color: 'rgba(0,0,0,0.75)',
    fontWeight: '500',
    fontSize: 16,
  },
  cardInfo: { fontSize: 12, color: 'grey' },
  //   Card END
});
