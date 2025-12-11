import { Button, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";


export default function App(){

    const router = useRouter()

    return(
        <View style={Styles.container}>
            <Text style={Styles.MainTitle}>หน้าแรก</Text>
            <Button title="ไปหน้าสอง" onPress={() => router.navigate('/square')}/>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{

        flex:1,
        backgroundColor:"lightsalmon",
        justifyContent:"center",
        alignItems:"center"

    },
    MainTitle:{
        fontSize:20,
        fontWeight:"700"

    }
})




