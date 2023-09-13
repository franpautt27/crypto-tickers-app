import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../constants/globalStyles'
interface Props {
    children: string | string[]
}

const Title = (props: Props) => {
    const {children} = props
  return (
      <Text style={globalStyles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({})