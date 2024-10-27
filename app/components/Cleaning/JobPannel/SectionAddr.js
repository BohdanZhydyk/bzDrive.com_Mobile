import { StyleSheet } from 'react-native'
import React from 'react'
import InputTypeText from './InputTypeText'
import { sanitizeTxt } from '../../../AppFunctions'

const SectionAddr = ({props}) => {

  const {zip, setZIP, town, setTown, street, setStreet, nr, setNr} = props

  return (
    <>

      <InputTypeText
        props={{
          st:{ width:"18%", marginLeft:3 }, legend:`Kod:`, cb:setZIP, kbType:"numeric",
          value:sanitizeTxt(zip, "ZIP")?.sanText
        }}
      />

      <InputTypeText
        props={{
          st:{ width:"25%", marginLeft:3 }, legend:`Miejscowość:`, cb:setTown,
          value:sanitizeTxt(town, "town")?.sanText
        }}
      />

      <InputTypeText
        props={{
          st:{ flex: 1, marginLeft:3 }, legend:`Ulica:`, cb:setStreet,
          value:sanitizeTxt(street, "StreetName")?.sanText
        }}
      />

      <InputTypeText
        props={{
          st:{ width:"15%", marginLeft:3 }, legend:`Nr:`, cb:setNr, kbType:"numeric",
          value:sanitizeTxt(nr, "default")?.sanText
        }}
      />

    </>
  )
}

export default SectionAddr

const styles = StyleSheet.create({})