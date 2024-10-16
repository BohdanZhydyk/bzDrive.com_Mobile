import { StyleSheet, View } from 'react-native'
import React from 'react'
import { appStyles } from '../../Styles'
import Contact from '../Contacts/Contact'


const ContactImgs = ({props}) => {

  const {zip, town, street, nr, www, email, tel} = props

  const googleMaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street} ${nr}, ${town}, ${zip}`)}`

  const contactImgs = [
    { key: "web", val: www },
    { key: "map", val: googleMaps },
    { key: "email", val: `mailto: ${email}` },
    { key: "tel", val: `tel: ${tel}` }
  ]

  return (
    <View style={styles.contacts}>
    {
      contactImgs?.map( (contact, c)=>{
        return( <Contact contact={contact} key={`JobPannelContactImg${contact?.key}${c}`} /> )
      })
    }
    </View>
  )
}

export default ContactImgs

const styles = StyleSheet.create({
  contacts: {
    position: "absolute",
    width: "70%",
    bottom: 10,
    right: 10,
    ...appStyles.row,
    ...appStyles.between
  }
})