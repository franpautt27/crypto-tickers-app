import { StyleSheet} from 'react-native'


export const globalStyles = StyleSheet.create({
    fullScreen : {
        flex: 1
    },
    fullScreenCentered: {
        flex: 1,
        justifyContent: "center",
        alignItems : "center"
    },
    globalMargin: {
        margin: 20
    },
    directionRow : {
        flexDirection : "row",
        justifyContent: "space-around"
    },
    text: {
        fontSize: 16
    }
})