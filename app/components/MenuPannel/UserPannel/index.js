import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppState } from '../../../StateContext'
import LogOutBtn from './LogOutBtn'
import SectionInput from './SectionInput'
import SectionBtns from './SectionBtns'
import SectionPrivacy from './SectionPrivacy'
import SectionInfo from './SectionInfo'

const UserPannel = () => {

  const { isMenu, setIsMenu } = useAppState()

  const [login, setLogin] = useState("")
  const [email, setEmail] = useState("")
  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")

  const loginProps = {st:styles.textInput, legend:"login", value:login, cb:setLogin}
  const emailProps = {st:styles.textInput, legend:"email", value:email, kbType:"email", cb:setEmail}
  const pass1Props = {st:styles.textInput, legend:"hasło", value:pass1, isPassword:true, cb:setPass1}
  const pass2Props = {st:styles.textInput, legend:"potwierdzenie hasła", value:pass2, isPassword:true, cb:setPass2}

  const loginBtn  = { txt:"Zaloguj się", act:()=>setElements(prev=>loginPannel) }
  const signupBtn = { txt:"Zarejestruj się", act:()=>setElements(prev=>signupPannel) }
  const forgotBtn = { txt:"Zapomniałeś hasła?", act:()=>setElements(prev=>forgotPannel) }

  const loginPannel = {
    mode:"login",
    largeBtn:loginBtn,
    smallBtns:[signupBtn, forgotBtn],
    info:"Logowanie jest wymagane, aby uzyskać dostęp do niektórych funkcji strony. Jeśli nie masz jeszcze konta, możesz łatwo je założyć."
  }
  const signupPannel = {
    mode:"signup",
    largeBtn:signupBtn,
    smallBtns:[loginBtn, forgotBtn],
    info:"Rejestracja na stronie to krok w kierunku pełnego korzystania z jej wszystkich funkcji. Spersonalizuj swoje doświadczenie ze stroną."
  }
  const forgotPannel = {
    mode:"forgot",
    largeBtn:forgotBtn,
    smallBtns:[loginBtn, signupBtn],
    info:"Zapomniałeś hasła do swojego konta? To może przytrafić się każdemu. Wystarczy kilka kliknięć, aby w pełni przywrócić funkcjonalność swojego konta."
  }

  const [elements, setElements] = useState(loginPannel)

  useEffect(() => {
    if(!isMenu){
      setLogin( prev=> "" )
    }
  }, [])

  return (
    <View style={styles.userPannel} >

      { ['login', 'signup'].includes(elements?.mode) && <SectionInput props={loginProps} /> }
      { ['signup', 'forgot'].includes(elements?.mode) && <SectionInput props={emailProps} /> }
      { ['login', 'signup', 'forgot'].includes(elements?.mode) && <SectionInput props={pass1Props} /> }
      { ['signup', 'forgot'].includes(elements?.mode) && <SectionInput props={pass2Props} /> }

      <SectionBtns props={{elements}} />

      <SectionPrivacy props={{setIsMenu}} />

      <SectionInfo props={{elements}} />

      <LogOutBtn />

    </View>
  )
}

export default UserPannel

const styles = StyleSheet.create({
  userPannel: {
    position:"relative",
    flex:1,
    marginTop:20
  },
  textInput: {
    main: {
      position:"relative",
      flex:1,
      marginTop:15,
      borderWidth:1,
      borderColor:"#999",
      borderRadius:10
    },
    legend: {
      position:"absolute",
      color:"#f60",
      paddingTop:5,
      paddingTop:5,
      paddingLeft:10,
      paddingRight:10,
      fontSize:10,
      top:-12,
      left:15,
      backgroundColor:"#111"
    },
    value: {
      color:"#fff",
      paddingTop:15,
      paddingBottom:5,
      paddingLeft:10,
      paddingRight:10
    }
  }
})