import React, { useState } from 'react';
import {StyleSheet, View, TextInput, Text, Modal, Alert, TouchableOpacity} from 'react-native';
import {globalStyles} from '../themes/app-theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/AuthNavigation';
import {useForm} from '../hooks/useForm';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {validateForm} from '../helpers/validate-form';
import { CustomModal } from '../components/CustomModal';

interface Props extends StackScreenProps<RootStackParams, 'Register'> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {signUp} = useContext(AuthContext);

  const {form, onChange} = useForm({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const {username, email, password, firstName, lastName} = form;

  const [modal, setModal] = useState(false);

  const onRegister = () => {
    if (validateForm({username, email, password, firstName, lastName})) {
      setModal(false);
      signUp({username, email, password, firstName, lastName});
    } else {
      setModal(true);
    }
  };

  if (modal) {
    return (
		<CustomModal 
			modal={modal}
			setModal={setModal}
		/>
		);
  }

  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        backgroundColor: globalStyles.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{position: 'absolute', top: -200, right: -100}}>
        <Icon name="logo-react" size={400} color="#444" />
      </View>

      <View style={styles.container}>
        <Text style={{fontSize: 22, marginVertical: 10, color: 'black'}}>
          Create your account
        </Text>

        <TextInput
          style={styles.customInput}
          placeholder="First Name"
          value={firstName}
          onChangeText={value => onChange(value, 'firstName')}
        />

        <TextInput
          style={styles.customInput}
          placeholder="Last Name"
          value={lastName}
          onChangeText={value => onChange(value, 'lastName')}
        />

        <TextInput
          style={styles.customInput}
          placeholder="Email"
          value={email}
          onChangeText={value => onChange(value, 'email')}
        />

        <TextInput
          style={styles.customInput}
          placeholder="Username"
          value={username}
          onChangeText={value => onChange(value, 'username')}
        />

        <TextInput
          style={styles.customInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={value => onChange(value, 'password')}
          onSubmitEditing={onRegister}
        />

        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.8}
          onPress={onRegister}>
          <Text style={{color: 'white', fontSize: 16}}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: globalStyles.primaryColor}}>
            Do you have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 550,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  customInput: {
    width: '70%',
    borderBottomWidth: 1,
    marginBottom: 20,
    borderColor: '#ccc',
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: globalStyles.primaryColor,
    borderRadius: 8,
    marginBottom: 10,
  },
});
