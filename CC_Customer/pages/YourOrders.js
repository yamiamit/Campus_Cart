import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/Navbar';
import Header from '../components/header';
import OrderCard from '../components/OrderCard';
import {useNavigation} from '@react-navigation/native';
import userDetails from '../dummyData';

const YourOrders = () => {
  const navigation = useNavigation();
  const headerText = `Hey, ${userDetails[0].userName}`;
  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.main}>
        <View style={styles.up}>
          <Header text={headerText} />
          <SearchBar textInput="Search here for restaurant, food, etc" />
        </View>
        <View style={styles.down}>
          <View style={styles.subHead}>
            <Text style={styles.subHeadTex}>Previous Orders</Text>
          </View>

          {/* {userDetails[0].orders.map(order => {
            return (
              <OrderCard
                image={order.shopImage}
                place={order.shopName}
                time={order.orderTime}
                date={order.orderDate}
                bill={order.bill}
                list={order.orderItems}
              />
            );
          })} */}

          {/* <OrderCard
            orderNumber="1002"
            place="Dihing Canteen"
            status="Open"
            dist="400m"
            time="32m"
            date="16 April 2023"
            orderTime="17"
            bill="1000"
            list={[
              {veg: 1, num: 1, item: 'maggi', price: 20},
              {veg: 1, num: 1, item: 'maggi', price: 20},
              {veg: 1, num: 1, item: 'maggi', price: 20},
              {veg: 1, num: 1, item: 'maggi', price: 20},
              {veg: 0, num: 2, item: 'pizza', price: 200},
            ]}
          /> */}
        </View>
      </ScrollView>
      <View
        style={{position: 'absolute', bottom: 0, width: '100%', height: 68}}>
        <NavBar active="Order" />
      </View>
    </View>
  );
};

export default YourOrders;

const styles = StyleSheet.create({
  up: {
    // backgroungColor:'#5736B5',
    height: 150,
    width: '100%',
    zIndex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  shadow: {
    marginBottom: 20,
    borderRadius: 16,
  },
  down: {
    minHeight: 600,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#EFEEFA',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 24,
    marginBottom: 64,
  },
  main: {
    backgroundColor: '#5736B5',
    height: '100%',
    width: '100%',
  },
  mainContainer: {
    width: '100%',
  },
  head: {
    marginTop: 48,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headTex: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
  },
  wrapper: {
    height: 204,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 16,
  },
  subHeadTex: {
    color: '#6F6F6F',
    fontSize: 14,
    fontWeight: 500,
  },
  LinkText: {
    color: '#5736B5',
    fontSize: 14,
    fontWeight: 500,
  },
  subHead: {
    width: '90%',
    height: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  nearYou: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  choice: {
    width: '100%',
    height: 184,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  wrapper2: {
    borderRadius: 16,
    height: 156,
    width: '48%',
    marginBottom: 32,
    borderRadius: 16,
  },
  food: {
    height: 114,
    width: '100%',
    marginBottom: 32,
  },
  wrapper3: {
    borderRadius: 16,
    height: 110,
    width: 110,
    marginRight: 16,
    marginLeft: 16,
  },
  wrapper4: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  subHead: {
    width: '90%',
    height: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  subHeadTex: {
    color: '#6F6F6F',
    fontSize: 14,
    fontWeight: 500,
  },
});
