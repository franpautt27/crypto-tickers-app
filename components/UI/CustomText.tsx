import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../constants/globalStyles'

interface Props {
    children: string
}

const CustomText = (props: Props) => {
    const {children} = props
  return (
      <Text style={globalStyles.text}>{children}</Text>
  )
}

export default CustomText