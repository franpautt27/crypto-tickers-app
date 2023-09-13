import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { globalStyles } from '../../constants/globalStyles'

interface Props {
    children: string | string[]
    style?: StyleProp<TextStyle>
}

const CustomText = (props: Props) => {
    const {children, style} = props
  return (
      <Text style={[globalStyles.text, style ]}>{children}</Text>
  )
}

export default CustomText