import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/Colors'
import Title from './Title';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
    value: string
    header: string
}

const BigCard = (props: Props) => {
    const { header,value  } = props

  return (
    <View style={styles.container}>
      <Title style={{fontSize: 16}}>{header}</Title>
      <View style={[globalStyles.globalMargin, globalStyles.centered]}>
        <Title style={{fontSize: 32}}>{value}</Title>

      </View>
    </View>
  )
}

export default BigCard

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.light.tint,
        width: "100%",
        borderRadius: 20
    }
})