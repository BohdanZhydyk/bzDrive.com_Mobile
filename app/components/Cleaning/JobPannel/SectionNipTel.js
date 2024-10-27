import { StyleSheet } from 'react-native'
import React from 'react'
import InputTypeText from './InputTypeText'
import { sanitizeTxt } from '../../../AppFunctions'

const SectionNipTel = ({props}) => {

  const {nip, setNIP, tel, setTel} = props

  return (
    <>

      <InputTypeText
        props={{
          st:{ flex: 1 }, legend:`NIP:`, cb:setNIP, kbType:"numeric",
          value:sanitizeTxt(nip, "NIP")?.sanText
        }}
      />

      <InputTypeText
        props={{
          st:{ width:"50%", marginLeft:3 }, legend:`Tel:`, cb:setTel, kbType:"phone-pad",
          value:sanitizeTxt(tel, "tel")?.sanText
        }}
      />

    </>
  )
}

export default SectionNipTel

const styles = StyleSheet.create({})