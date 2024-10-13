import { Pressable, View } from 'react-native'
import { appStyles } from './Styles'
import IconBtn from './components/IconBtn'
import TxtColor from './components/TxtColor'
import StateStyled from './components/StateStyled'
import LinkBtn from './components/LinkBtn'
import { useAppState } from './StateContext'
import MenuPannel from './components/MenuPannel'


export default function OfficeScreen() {

  const { setIsMenu } = useAppState()

  return (
    <View style={appStyles.container}>

      <MenuPannel />

      <View style={{...appStyles.row, ...appStyles.between}}>

        <IconBtn ico="office" />

        <Pressable onPress={()=>setIsMenu(prev=>!prev)} >
          <IconBtn ico="menuUnfold" />
        </Pressable>

      </View>

      <TxtColor props={{txt:"OfficeScreen", color:"txtWht"}} />

      <StateStyled />

      <LinkBtn props={{link:"/", ico:"home", txt:"Go to Home screen!"}} />

    </View>
  )
}
