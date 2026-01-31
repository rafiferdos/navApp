import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'

const Home = () => {
  const navigation = useNavigation<any>()
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title='Lets go to Feed'
        onPress={() => navigation.navigate('Feed')}
      />
    </View>
  )
}

export default Home
