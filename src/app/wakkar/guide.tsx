import { View, Text, StyleSheet } from "react-native";
import GuidePost from "@/src/components/GuidePost";

export default function guides() {
    return (
        <View style={styles.container}>
            <GuidePost/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
