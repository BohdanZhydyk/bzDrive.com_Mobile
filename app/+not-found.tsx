import { View, StyleSheet, Text } from 'react-native'
import { Link, Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function NotFoundScreen() {
  return (
    <View>

      <Stack.Screen options={{ title: 'Oops!' }} />

      <Link href="/">
        <Ionicons size={30} name={'home'} color="black" />
        <Text>Go to home screen!</Text>
      </Link>
      
      <Text>This screen doesn't exist.</Text>

    </View>
  )
}

const styles = StyleSheet.create({

})
