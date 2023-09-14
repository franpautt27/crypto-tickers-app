import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

interface Props {
    onPress: () => void;
    icon: keyof typeof Ionicons.glyphMap
    size?: number
}


const TouchableIcon = (props: Props) => {
    const {icon,onPress, size = 24} = props;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Ionicons name={icon} size={size} color={Colors.dark.tabIconDefault} />
    </TouchableOpacity>
  )
}

export default TouchableIcon