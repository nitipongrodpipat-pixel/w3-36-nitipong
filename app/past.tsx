import { Button, StyleSheet, Text, TextInput, View, } from "react-native";
import { useRouter } from "expo-router";
import { use, useState } from "react";

export default function part(){

    const [fa, Setf] = useState(0)
    const [ba, Setb] = useState(0)
    const [aa,Seta] = useState(0)
    const [da, Setd] = useState(0)

    const router = useRouter();

    function calculates(){
        let result = (f+b)*a*d/2
        Setd(result) 
    }

    return(
        <View style={Styles.container}>
            <Text style={Styles.MainTitle}>คำนวณพื่นที่สี่เหลี่ยมค้างหมู</Text>
            <Button title="กลับหน้าแรก"  onPress={() => router.navigate('/App')}/>
                {/*<Button title/> */}
                <Text>หน้า{fa}หลัง{ba}ข้าง1{aa}ข้าง2{da}</Text>
                
                <TextInput
                value={fa.toString()}
                onChangeText={(w) => Setf(Number(w))}
                style={Styles.textInput}
                placeholder="กรอกความยาว"
                />

                <TextInput
                value={ba.toString()}
                onChangeText={(l) => Setb(Number(l))}
                style={Styles.textInput}
                placeholder="กรอกความเซนติเมตร"
                />

                <TextInput
                value={aa.toString()}
                onChangeText={(l) => Seta(Number(l))}
                style={Styles.textInput}
                placeholder="กรอกความเซนติเมตร"
                />

                <TextInput
                value={da.toString()}
                onChangeText={(l) => Setd(Number(l))}
                style={Styles.textInput}
                placeholder="กรอกความเซนติเมตร"
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
        borderColor:"green"
    }
})
