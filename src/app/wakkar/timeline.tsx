import { View, Text,  } from '@/components/Themed';
import Post from '@/src/components/Post';
import { StyleSheet } from 'react-native';
import CircleButton from '@/src/components/CircleButton';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <ScrollView>
    <Post
        name="松尾芭蕉"
        waka="ふるいけやかわずとびこむみずのおと"
        date="1654-06-19 14:43"
        likes={127}
    />
    </ScrollView>

    <CircleButton />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)",
    },

    navi: {
        flex: 1,
        right: 0,
        left: 0,
        bottom: 0,
        position: 'absolute',
        color: "rgb( 0, 163, 129 )"
    },
    postItems: {
        backgroundColor: "none"
    },
    iconStatus: {
        backgroundColor: "none"
    }
})
