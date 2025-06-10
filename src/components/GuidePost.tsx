import { View, Text, StyleSheet } from "react-native";

const GuidePost = () => {
    return (
        <View>
            <Text style={styles.title}>和歌とは？</Text>
            <Text style={styles.text}>和歌（わか）とは、日本語で書かれた古典詩のことです。短歌形式の和歌が一般的で、5・7・5・7・7の31文字で構成されます。﻿
和歌の歴史は古く、万葉集に収められる歌も和歌に含まれます。平安時代以降は、短歌が主流となり、歌会や歌合わせなど、和歌を詠む活動が盛んになりました。﻿
和歌は、主に自然や人間関係、愛情などをテーマに、短い言葉で情感豊かに表現されます。歌を詠むだけでなく、歌を詠み合うことで、人々は心を通わせ、文化を育んで来ました。</Text>
        </View>
    )
}

export default GuidePost

const styles = StyleSheet.create({
    title: {
        top: 8,
        left: 51,
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        top: 10,
        left: 51,
        right:38,
        fontSize: 16,
        fontWeight: "bold"
    }
})
