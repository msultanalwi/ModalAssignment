import React, {useState} from 'react';
import {View, Text, Touchable, TouchableOpacity, Modal, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = ({show, logout}) => {

    const [modalVisible, setModalVisible] = useState(false)

    const handlerMenuPress = () => {
        setModalVisible(true)
    }

    const handlerConfirmExit = () => {
        setModalVisible(false)
        logout
        Alert.alert("Logout successfull!")
    }

    const handlerCancelExit = () => {
        setModalVisible (false)
    }
    
    return (
        <View style={{flexDirection: "row", backgroundColor: "#38b2ec", justifyContent: "space-between", alignItems: "center", padding: 20 }}>
        <TouchableOpacity onPress={show}>
            <Icon name="menu" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={{fontSize: 24}}>The Great Traders</Text>
        <TouchableOpacity onPress={handlerMenuPress}>
            <Icon name="arrow-right-bold" size={30} color="#000" />
            </TouchableOpacity>
            {/* Modal untuk konfirmasi keluar */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handlerCancelExit}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10, alignItems: 'center' }}>
                <Text style={{ marginBottom: 15, textAlign: 'center' }}>Are you sure you want to exit?</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <TouchableOpacity onPress={handlerConfirmExit} style={{ padding: 10, backgroundColor: '#38b2ec', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{ color: 'white' }}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlerCancelExit} style={{ padding: 10, backgroundColor: '#ec3838', borderRadius: 5, marginHorizontal: 5 }}>
                        <Text style={{ color: 'white' }}>No</Text>
                    </TouchableOpacity>
                </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Header;