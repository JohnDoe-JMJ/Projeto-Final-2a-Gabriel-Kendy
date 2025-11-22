import { Slot, slot, SplashScreen } from "expo-router";
import {useFonts, AlmendraSC_400Regular} from "@expo-google-fonts/almendra-sc"
import {FasterOne_400Regular} from "@expo-google-fonts/faster-one"
import { Text, View } from "react-native";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout () {

    const [fontsLoaded, fontError] = useFonts({
        AlmendraSC_400Regular: AlmendraSC_400Regular,
        FasterOne_400Regular: FasterOne_400Regular,
    });

    useEffect(()=>{
        if(fontsLoaded || fontError) {
            SplashScreen.hideAsync();
        }
    }, [
        fontsLoaded, fontError
    ]) 

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading Fonts...</Text>
            </View>
        )
    }

    return <Slot />;
}