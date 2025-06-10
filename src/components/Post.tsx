import { View, Text, StyleSheet } from "react-native"

type PostProps = {
    name: string
    waka: string
    date: string
    likes: number
    icon?: string
}

const formatWaka = (waka: string): string => {
    const gojuon = [...waka]
    const total = gojuon.length

    if (total === 17) {
        return `${gojuon.slice(0,5).join("")}\n${gojuon.slice(5,12).join("")}\n${gojuon.slice(12).join("")}`
    } else if (total === 31) {
        return `${gojuon.slice(0,5).join("")}\n${gojuon.slice(5,12).join("")}\n${gojuon.slice(12,17).join("")}\n${gojuon.slice(17,24).join("")}\n${gojuon.slice(24).join("")}`
    } else {
        return waka
    }
}

const Post = ({name, waka, date, likes, icon = "○"}: PostProps) => {
    return (
<View style={styles.post}>
        <View style={styles.leftPost}>
            <View style={styles.iconStatus}>
                <Text style={styles.icon}>{icon}</Text>
            </View>
            <View style={styles.postItems}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.waka}>{formatWaka(waka)}</Text>
                <Text style={styles.date}>{date}</Text>
            </View>
        </View>

        <View style={styles.rightPost}>
            <Text style={styles.actionButtonRepost}>◽︎</Text>
            <Text style={styles.actionButtonNice}>❤️{likes}</Text>
            <Text style={styles.actionButtonBookmark}>▶︎</Text>
        </View>
</View>
    )
}

const styles = StyleSheet.create ({
    post: {
        backgroundColor: "rgb(255, 250, 187)",
    },
    leftPost: {
        backgroundColor: "none",
        flexDirection: "row",
    },
    rightPost: {
        backgroundColor: "none",
        flexDirection: "row",
    },
    name: {
        paddingTop: 16,
        paddingLeft: 12,
        backgroundColor: "none",
        color: "rgb( 0, 0, 0 )",
        fontSize: 14

    },
    waka: {
        paddingLeft: 12,
        paddingBottom: 24,
        backgroundColor: "none",
        color: "rgb( 0, 0, 0 )",
        fontSize: 16
    },
    iconStatus: {
        backgroundColor: "none"
    },
    actionButtonRepost: {
        position: 'absolute',
        bottom: 8,
        color: "rgb(68, 255, 0)",
        fontSize: 16,
        left: 211,
    },
    actionButtonNice: {
        position: 'absolute',
        bottom: 8,
        color: "rgb( 237, 95, 240 )",
        fontSize: 16,
        left: 243
    },
    actionButtonBookmark: {
        position: 'absolute',
        bottom: 8,
        color: "rgb(51, 163, 254)",
        fontSize: 16,
        left: 275
    },
    postItems: {
        backgroundColor: "none"
    },
    icon: {
        color: "red",
        fontSize: 52,
        paddingTop: 16,
        paddingLeft: 19,
        backgroundColor: "none"
    },
})

export default Post
