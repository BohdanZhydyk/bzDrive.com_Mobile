import { View, StyleSheet, Text } from 'react-native'
import { Link, Stack } from 'expo-router'
import TxtColor from './components/All/TxtColor'
import IconBtn from './components/All/IconBtn'
import Contacts from './components/Contacts'
import TopPannel from './components/TopPannel'
import MenuPannel from './components/MenuPannel'
import { appStyles } from './Styles'


export default function NotFoundScreen() {
  return (
    <View style={appStyles.container}>

      <Stack.Screen options={{ title: 'Error 404' }} />

      <TopPannel />

      <Link style={styles.menuLink} href={`/`}>
        <IconBtn props={{ ico:"Workshop", action:()=>{} }} />
        <TxtColor props={{txt:`Workshop`, color:"txtWht"}} />
      </Link>
      
      <View style={styles.info}>
        <Text style={styles.txt}>Strona nie istnieje.</Text>
        <Text style={styles.txt}>Wróć na stronę główną, używając przycisku powyżej.</Text>
      </View>

      <View style={{ flex: 1 }} />

      <Contacts />

      <MenuPannel />

    </View>
  )
}

const styles = StyleSheet.create({
  menuLink: {
    alignItems:"stretch"
  },
  info: {
    margin:20,
    padding:20,
    borderWidth: 1,
    borderColor: appStyles.txtGry.color,
    borderStyle: 'dashed',
    borderRadius:10
  },
  txt: {
    ...appStyles.txtRed,
    textAlign:"center",
    marginTop:20,
    marginBottom:20,
    fontSize:15
  }
})
