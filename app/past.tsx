import { Button, StyleSheet, Text, TextInput, View, } from "react-native";
import { useRouter } from "expo-router";
import { use, useState } from "react";

export default function part(){

    const [f, Setf] = useState(0)
    const [b, Setb] = useState(0)
    const [a,Seta] = useState(0)
    const [d, Setd] = useState(0)

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
                <Text>หน้า{}หลัง{}ข้าง1{}ข้าง2{}</Text>
                
                <TextInput
                value={f.toString()}
                onChangeText={(w) => Setf(Number(w))}
                style={Styles.textInput}
                placeholder="กรอกความยาว"
                />

                <TextInput
                value={b.toString()}
                onChangeText={(l) => Setb(Number(l))}
                style={Styles.textInput}
                placeholder="กรอกความเซนติเมตร"
                />

                <TextInput
                value={a.toString()}
                onChangeText={(l) => Seta(Number(l))}
                style={Styles.textInput}
                placeholder="กรอกความเซนติเมตร"
                />

                <TextInput
                value={d.toString()}
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