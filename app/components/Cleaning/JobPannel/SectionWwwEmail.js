import { StyleSheet } from 'react-native'
import React from 'react'
import InputTypeText from './InputTypeText'
import { sanitizeTxt } from '../../../AppFunctions'

const SectionWwwEmail = ({props}) => {

  const {www, setWWW, email, setEmail} = props

  return (
    <>

      <InputTypeText
        props={{
          st:{ flex: 1 }, legend:`WWW:`, cb:setWWW, kbType:"url",
          value:sanitizeTxt(www, "www")?.sanText
        }}
      />

      <InputTypeText
        props={{
          st:{ width:"50%", marginLeft:3 }, legend:`E-mail:`, cb:setEmail, kbType:"email-address",
          value:sanitizeTxt(email, "email")?.sanText
        }}
      />

    </>
  )
}

export default SectionWwwEmail

const styles = StyleSheet.create({})