import { Button, StyleSheet, Text, TextInput, View, } from "react-native";
import { useRouter } from "expo-router";
import { use, useState } from "react";

export default function Square(){

    const [width, Setwidth] = useState(0)
    const [lenght, SetLanght] = useState(0)
    const [area, SetArea] = useState(0)

    const router = useRouter();
    return(
        <View style={Styles.container}>
            <Text style={Styles.MainTitle}>คำนวณพื่นที่สี่เหลียม</Text>
            <Button title="กลับหน้าแรก"  onPress={() => router.navigate('/App')}/>
                {/*<Button title/> */}

                <TextInput style={Styles.textInput} placeholder="กรอก"
                        value={width.toString()}
                        onChangeText={(w) => Setwidth(Number(w))}
                />
                <TextInput style={Styles.textInput} placeholder="กรอกเลข"/>
                <TextInput style={Styles.textInput} placeholder="กรองเลข"/>
                <Button title="คำนวณ"/>
        </View>
    )
}
const Styles = StyleSheet.create({
    container:{

        flex:1,
        backgroundColor:"lightsalmon",
        justifyContent:"center",
        alignItems:"center",
        gap:20

    },
    MainTitle:{
        fontSize:20,
        fontWeight:"700"

    },
    textInput:{
        borderWidth:1,
        width:"80%",
        borderColor:"green"
    }
})