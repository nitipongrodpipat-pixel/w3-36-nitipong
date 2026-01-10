import { Button, StyleSheet, Text, TextInput, View, } from "react-native";
import { useRouter } from "expo-router";
import { use, useState } from "react";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

export default function Square(){

    const [width, Setwidth] = useState(0)
    const [lenght, SetLanght] = useState(0)
    const [area, SetArea] = useState(0)

    const router = useRouter();

    function calculates(){
        let result = width * lenght
        SetArea(result)
    }

    return(
        <View style={Styles.container}>
            <Text style={Styles.MainTitle}>คำนวณพื่นที่สี่เหลี่ยม</Text>
            <Button title="กลับหน้าแรก"  onPress={() => router.navigate('/App')}/>
                {/*<Button title/> */}
                <Text> กว้าง {width}ซม.ยาว{lenght} ซม. พื้นที่ {area} ตร.ซม</Text>
                
                <TextInput
                style={Styles.textInput}
                placeholder="กรอกความกว้าง"
                value={width.toString()}
                onChangeText={(w) => Setwidth(Number(w))}
                />
                <TextInput
                value={lenght.toString()}
                onChangeText={(l) => SetLanght(Number(l))}
                style={Styles.textInput}
                placeholder="กรอกความยาว"
                />

                <Button title="คำนวณ"
                onPress={calculates}
                />

        </View>
    )
}
const Styles = StyleSheet.create({
    container:{

        flex:1,
        backgroundColor:"skyblue",
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
        borderColor:"white"
    }

    
})