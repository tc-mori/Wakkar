import { View, Text } from "@/components/Themed"
import { StyleSheet } from "react-native"

const CircleButton = () => {
    return (
        <View style={styles.circleButton}>
                <Text style={styles.circleButtonLabel}>＋</Text>
            </View>
    )
}

const styles = StyleSheet.create ({
    circleButton: {
        width: 72,
        height: 72,
        borderRadius: 36,
        backgroundColor: "rgb( 0, 163, 129 )",
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        right: 22,
        bottom: 24,
        shadowColor: "rgb( 0, 0, 0)",
        shadowOpacity: 0.25,
        shadowRadius:8,
        shadowOffset: { width: 0, height: 8 },
        elevation: 8
    },
    circleButtonLabel: {
        color: "rgb( 255, 255, 255 )",
        fontSize: 60
    },
})

export default CircleButton
