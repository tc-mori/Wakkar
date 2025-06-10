import { View, Text } from '@/components/Themed';
import { StyleSheet } from 'react-native';
import Post from '@/src/components/Post';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

        <ScrollView>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </ScrollView>

        <View style={styles.replyBox}>
            <Text style={styles.icon}>○</Text>
            <Text style={styles.replyText}>返歌を投げる</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    replyBox: {
        height: 56,
        backgroundColor: "rgb( 0, 163, 129 )",
        justifyContent: "space-between",
        alignItems: "center",
        position: 'absolute',
        flexDirection: "row",
        left: 0,
        right: 0,
        bottom: 0,
    },
    icon: {
        fontSize: 40,
        color: "red",
        left: 15
    },
    replyText: {
        fontSize: 16,
        color: "rgb( 0, 0, 0 )"
    }
})
