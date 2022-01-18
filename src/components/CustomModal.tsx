import React, { Dispatch, SetStateAction } from 'react';
import { Alert, Modal, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
	modal: boolean;
	//this is saying basically that setModal is a setState xd 
	setModal: Dispatch<SetStateAction<boolean>>;
}

export const CustomModal = ({ modal, setModal }: Props) => {
  
	return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={modal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModal(!modal);
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
        }}>
        <View
          style={{
            width: '80%',
            height: '50%',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
          }}>
          <View
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 20}}>
              Please put the correct information!
            </Text>
            <TouchableOpacity onPress={() => setModal(!modal)}>
              <Icon
                name="checkmark-circle-outline"
                color={'#2ac824cc'}
                size={45}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
