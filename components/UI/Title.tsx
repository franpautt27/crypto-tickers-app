import { StyleSheet, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../../constants/globalStyles'
interface Props {
    children: string | string[]
    style?: StyleProp<TextStyle>
}

const Title = (props: Props) => {
    const {children, style} = props
  return (
      <Text style={[globalStyles.title, style]}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({})