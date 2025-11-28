import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {

  useEffect(()=>{
    Platform.OS === "web" ? document.title = "DDM 2025/2" : null
  },[])

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="sobremim"
        options={{
          title: 'Sobre Mim',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="temalivre"
        options={{
          title: 'Eletrônicos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="desktop" color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="aboutme"
        options={{
          title: 'de Tabuleiro',
          tabBarIcon: ({ color }) => <AntDesign size={28} name="layout" color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
