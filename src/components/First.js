import { View, Text, TouchableOpacity, Image, Modal, Button} from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const First = ({list, detailList, onDetail, namePerson, sourceImage , biography, content}) => { 

  const [isVisible, setIsVisible] = useState (false)

  const requestCloseModal = () => {
      setIsVisible(false)
  }

  const openModal = () => {
      setIsVisible(true)
  }


  return (
    <>
    {list && (
        <View style={{flexDirection: "row", alignItems: "center", borderColor: "#38b2ec", borderWidth: 1, justifyContent: "space-between", padding: 20,margin: 20, borderRadius: 10}}>
      <Text style={{fontSize: 18}}>{namePerson}</Text>
      <TouchableOpacity onPress={onDetail}>
      <Icon name="plus-circle-outline" size={30}/>
      </TouchableOpacity>
    </View>
    )}
    
    {detailList && (
        <View style={{justifyContent: "center", alignItems: "center", borderColor: "purple", borderWidth: 1, margin: 20, borderRadius: 10, padding: 20}}>
        <Image style={{borderRadius: 50, width:100, height:100}}source={{uri: sourceImage}} />
        <Text style={{marginVertical: 10}}>
        {biography}
        </Text>


        <Modal visible={isVisible} animationType="fade" onRequestClose={() => requestCloseModal ()} transparent={true}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{height: '45%', width: '90%', backgroundColor: 'white', justifyContent: "center", alignItems:"center"}}>
                    <Text>{content}</Text>
                    </View>
            </View>
            </Modal>
          <TouchableOpacity onPress ={() => openModal()}>
        <Text style={{textAlign: "center", color: "purple"}}>
        Read More
        </Text>
        </TouchableOpacity>


    </View>
    )} 
    

    </>
  )
}

export default First