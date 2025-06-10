import { View, Text, StyleSheet } from "react-native"

const Notification = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftItems}>
                <Text style={styles.heart}>❤️</Text>
            </View>
            <View style={styles.rightItems}>
                <View style={styles.icons}>
                    <Text style={styles.icon}>⭕️</Text>
                    <Text style={styles.icon}>⭕️</Text>
                </View>
                <View style={styles.notificationContent}>
                    <Text style={styles.notificationText}>正岡子規さんと小峠さんがあなたの投稿に{"\n"}いとをかしと言っています。</Text>
                </View>
            </View>
        </View>

    )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        right: 0,
        left: 0,
        height: 104,
        backgroundColor: "rgb(117, 0, 163)",
        flexDirection: "row"
    },
    leftItems: {

        left: 19
    },
    heart: {
        fontSize: 32,
        top: 16,
        left: 0
    },
    rightItems: {
        left: 16
    },
    icons: {
        flexDirection: "row",
        top: 16
    },
    icon: {
        fontSize: 26
    },
    notificationContent: {
        top: 20
    },
    notificationText: {
        color: "rgb( 255, 255, 255 )",
        fontSize: 16,
        fontWeight: "bold"
    }
})
