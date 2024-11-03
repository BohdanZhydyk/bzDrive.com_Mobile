import { StyleSheet } from 'react-native'
import React from 'react'
import SearchDocument from './SearchDocument'

const SearchDocPannel = ({props}) => {

  const {searchObj, setJob} = props

  const searchTopLine = {
    client:{
      shortName:"Klient",
      nip:"NIP",
      contacts:{
        tel:"Tel"
      }
    }
  }

  return (
    <>
    {
      [searchTopLine, ...searchObj].map( (searchLine, l)=>{
        return(
          <SearchDocument props={{searchLine, l, setJob}} key={`SearchLine${l}`} />
        )
      })
    }
    </>
  )
}

export default SearchDocPannel

const styles = StyleSheet.create({})