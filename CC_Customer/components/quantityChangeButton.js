import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Plus from '../assets/plus.svg';
import Minus from '../assets/minus.svg';
import {useDispatch} from 'react-redux';
import {addToCart, decrement, increment} from '../reducers/cartSlice';

const QuantityChangeButton = props => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(props.num);

  const handleSubtract = () => {
    num !== 0 && setNum(num - 1);
    dispatch(decrement(props.it));
  };
  const handleAdd = () => {
    setNum(num + 1);
    dispatch(increment(props.it));
  };

  return (
    <View style={styles.button1}>
      <TouchableOpacity
        onPress={() => {
          handleSubtract();
        }}>
        <Minus />
      </TouchableOpacity>
      <Text style={styles.text1}> {num} </Text>
      <TouchableOpacity
        onPress={() => {
          handleAdd();
        }}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEDFA',
    borderRadius: 20,
    height: 28,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D7D2E9',
    borderWidth: 1,
  },
  text1: {
    color: '#020314',
    fontWeight: 500,
    fontSize: 14,
  },
});

export default QuantityChangeButton;
