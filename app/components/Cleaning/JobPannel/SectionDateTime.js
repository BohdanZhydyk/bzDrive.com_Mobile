import { StyleSheet } from 'react-native'
import React from 'react'
import InputTypeDate from './InputTypeDate'
import InputTypeTime from './InputTypeTime'

const SectionDateTime = ({props}) => {

  const {date, setDate, from, setFrom, to, setTo} = props

  return (
    <>

      <InputTypeDate props={{ st:{ flex: 1 }, legend:`Data:`, value:date, cb:setDate}} />

      <InputTypeTime props={{ st:{ width: "25%", marginLeft: 3 }, legend:`Od:`, value:from, cb:setFrom}} />

      <InputTypeTime props={{ st:{ width: "25%", marginLeft: 3 }, legend:`Do:`, value:to, cb:setTo}} />

    </>
  )
}

export default SectionDateTime

const styles = StyleSheet.create({})