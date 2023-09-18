import { View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../constants/globalStyles'
import CustomText from '../UI/CustomText'
interface Props{
    info: string
    label: string
    infoColor?: string
}

const TickerInfoRow = (props: Props) => {
    const {info,infoColor ,label} = props
  return (
    <View style={[globalStyles.directionRow, {marginTop: 10}]}>
          <CustomText>{label}</CustomText>
          <CustomText style={infoColor ? {color: infoColor} : {}}>{info}</CustomText>
      </View>
  )
}

export default TickerInfoRow