import { Image, Pressable, Linking} from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'


const Contact = ({contact}) => {

  const uri = `https://bzdrive.com/files/ico/contacts/${contact?.key}.png`
  const link = contact?.val

  return (
    <Pressable onPress={() => Linking.openURL(link)} >
      <Image source={{ uri }} style={appStyles.icoBtn} />
    </Pressable>
  )
}

export default Contact
