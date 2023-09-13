import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { globalStyles } from '../../constants/globalStyles'

const TickersListLoading = () => {
    return (
        <View style={globalStyles.fullScreenCentered}>
          <ActivityIndicator size={"large"} />
        </View>
      )
}

export default TickersListLoading