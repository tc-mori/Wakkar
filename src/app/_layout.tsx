// app/_layout.tsx
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable } from 'react-native'
import React from 'react';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb( 0, 163, 129 )',
          height: 104
        },
        headerTintColor: 'rgb( 255, 255, 255 )',
        headerTitle: 'Wakkar',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 40,
          bottom: 8
        },
        headerLeft: () => (
            <Pressable
            onPress={() => {
                //ユーザーアイコンをタップした時の処理
            }}
            style={{
                marginLeft: 19,
                marginBottom: 16
            }}
        >
        <Image
        source={{uri: 'https://timecapsuleinc.co.jp/wp-content/uploads/2018/04/timecapsulelogo.png'}}
        style={{
            width: 52,
            height: 52,
            borderRadius: 26
        }}
        />
        </Pressable>
        ),
        tabBarActiveTintColor: 'rgb(168, 75, 75)',
        tabBarInactiveTintColor: 'rgb( 255, 255, 255 )',
        tabBarStyle: {
            backgroundColor: "rgb( 0, 163, 129 )"
        }
      }}
    >
       <Tabs.Screen
        name="index"
        options={{
          title: 'タイムライン',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: '検索',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: '通知',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'ガイド',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
