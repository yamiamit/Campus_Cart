import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Arrow from '../assets/leftArrow.svg';
import Line3 from '../assets/Line3.svg';
import RegisterButton from '../components/registerButton';
import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
// import {AuthContext} from '../context/AuthContext';
import {useState} from 'react';
const SignUpOTP = props => {
  const [otp, setOTP] = useState('');
  //   get the otp here and pass it down to below OTPverification function
  const navigation = useNavigation();
  // async function proceedHandler() {
  //   await ctx.OTPverification(otp, navigation);
  // }
  // async function resendHandler() {
  //   await ctx.resendCode();
  // }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.arrow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Arrow />
          </TouchableOpacity>
        </View>
        <View style={styles.linev}>
          <Line3 />
        </View>
        <View style={styles.input}>
          <Text style={styles.t1}>Enter OTP</Text>
          <Text style={styles.t2}>
            Enter the code we sent to +91 {props.phone}
          </Text>
        </View>

        <View style={styles.input1}>
          <View style={styles.cont}>
            <TextInput
              onChangeText={text => {
                setOTP(prev => text);
              }}
              style={styles.t}
              placeholder="----"
              placeholderTextColor="#6F6F6F"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.input2} onPress={proceedHandler}>
          <RegisterButton text="Proceed" />
        </TouchableOpacity>
        <View style={styles.password}>
          <Text style={styles.p1}>Did not receive the code?</Text>
          <TouchableOpacity onPress={resendHandler}>
            <Text style={styles.p2}> Resend OTP</Text>
          </TouchableOpacity>
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
    height: '97%',
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: 'column',
  },
  arrow: {
    paddingLeft: 28,
    paddingTop: 28,
  },
  linev: {
    marginTop: 24,
    backgroundColor: '#FFFFFF',
  },
  input: {
    marginTop: 18,
    marginLeft: '6%',
    height: 60,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  input1: {
    marginTop: 20,
    marginLeft: '2%',
    marginRight: '2%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cont: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    height: 60,
    width: '16%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  t: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
  t1: {
    color: '#020314',
    fontSize: 16,
    fontWeight: 500,
  },
  t2: {
    color: '#6F6F6F',
    fontSize: 12,
    fontWeight: 500,
  },
  input2: {
    marginTop: 20,
    height: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  password: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  p1: {
    fontSize: 14,
    color: '#6F6F6F',
  },
  p2: {
    fontSize: 14,
    color: '#6F6F6F',
    fontWeight: 500,
  },
});

export default SignUpOTP;
