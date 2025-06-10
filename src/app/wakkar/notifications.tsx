import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import CircleButton from "@/src/components/CircleButton";
import Notification from "@/src/components/Notification";

export default function notifications() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
                <Notification/>
            </ScrollView>
            <CircleButton/>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex:1
    }
})
