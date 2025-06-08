import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Arrow from '../assets/leftArrow.svg';
import RegisterButton from '../components/registerButton';
import InputField from '../components/InputField';
import Google from '../components/Google';
import { useNavigation } from '@react-navigation/native';
import io from 'socket.io-client';
import { useState, useEffect } from 'react';

const socket = io('http://10.0.2.2:8080'); // Move socket outside to avoid multiple re-connections

const SignUp = () => {
  const navigation = useNavigation();
  const [roomId, setRoomId] = useState(null);
  const [isAcceptOrderDisabled, setAcceptOrderDisabled] = useState(true);
  const [shopID, setShopID] = useState(''); // State to store Shop ID

  useEffect(() => {
    if (!shopID) return;

    // Register the shopkeeper
    socket.emit('registerShopkeeper', shopID);

    socket.on('joinRoom', (data) => {
      const { roomId } = data;
      setRoomId(roomId);
      socket.emit('joinRoom', { roomId });
      setAcceptOrderDisabled(false);
      console.log(`Joined room: ${roomId}`);
    });

    // Cleanup listener on unmount
    return () => {
      socket.off('joinRoom');
    };
  }, [shopID]); // Run only when shopID changes

  const handleLogin = () => {
    console.log('Shop ID entered:', shopID); // Debugging statement

    if (!shopID.trim()) {
      alert('Please enter your Shop ID');
      return;
    }

    // Emit the shopID to the server
    // socket.emit('registerShopkeeper', shopID);
    console.log('Shopkeeper registered with Shop ID:', shopID);
    console.log('Shopkeeper registered with room ID:', roomId);
    navigation.navigate('Pending', { shopID, roomId });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.arrow}>
          <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
            <Arrow />
          </TouchableOpacity>
        </View>

        <View style={styles.input}>
          {/* Input field for Shop ID */}
          <InputField
            text="Shop ID"
            value={shopID}
            onChangeText={(text) => setShopID(text)} // Update shopID state
          />
          <InputField text="Email ID" />
          <InputField text="Password" />
        </View>

        <View style={styles.password}>
          <Text style={styles.p1}>Forgot Password or Shop ID?</Text>
          <TouchableOpacity>
            <Text style={styles.p2}> Click here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.input2}>
          <TouchableOpacity style={styles.wrapper} onPress={handleLogin}>
            <RegisterButton text="Login" />
          </TouchableOpacity>
          <Text style={styles.or}>or</Text>
          <TouchableOpacity
            style={styles.wrapper}
            onPress={() => navigation.navigate('Pending')}
          >
            <Google />
          </TouchableOpacity>
        </View>

        <View style={styles.text}>
          <Text style={styles.texts}>
            By tapping Register, or continue with Outlook or Google, you agree
            to our
            <Text style={styles.boldText}> Terms of Use </Text>
            and
            <Text style={styles.boldText}> Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: '#5736B5',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    backgroundColor: '#EFEEFA',
    height: '93%',
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: 'column',
  },
  arrow: {
    paddingLeft: 33,
    paddingTop: 33,
  },
  input: {
    marginTop: 24,
    width: '100%',
    height: 185,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input2: {
    marginTop: 24,
    height: 114,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  password: {
    marginTop: 16,
    height: 19,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  p1: {
    fontSize: 14,
    color: '#6F6F6F',
  },
  p2: {
    fontSize: 14,
    color: '#6F6F6F',
    fontWeight: '500',
  },
  or: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6F6F6F',
  },
  text: {
    marginTop: 16,
    height: 36,
    width: '91%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  boldText: {
    fontWeight: '500',
  },
  texts: {
    textAlign: 'center',
    color: '#6F6F6F',
    fontSize: 12,
    fontWeight: '400',
  },
  wrapper: {
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SignUp;