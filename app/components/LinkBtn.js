import { Link } from 'expo-router'
import React from 'react'
import IconBtn from './IconBtn'
import TxtColor from './TxtColor'


const LinkBtn = ({props}) => {

  const link = props?.link
  const ico = props?.ico
  const txt = props?.txt

  return (
    <Link style={{alignItems:"stretch"}} href={link}>
      <IconBtn ico={ico} />
      <TxtColor props={{txt, color:"txtWht"}} />
    </Link>
  )
}

export default LinkBtn
