import React from "react";
import { Text, TouchableOpacity, View, Linking, SafeAreaView } from "react-native";
import { CustomHeader } from "../components/CustomHeader";
import { GoToReference } from "../components/GoToReference";


export function Details() {
    const info = {
        explication: "O Índice de Massa Corporal (IMC) é uma medida que utiliza o peso e a altura de uma pessoa para avaliar se ela está em uma faixa considerada saudável.\nVale ressaltar também que o IMC não substitui uma avaliação de um profissional de saúde.",
        title1: "Como o IMC calculado?",
        formula: "IMC = peso / (altura * altura)",
        title2: "Como é interpretado o resultado?",
        explication2: "Usamos uma tabela para interpretar o resultado, ela pode possuir algumas variações conforme a interpretação. Aqui usamos a tabela disponibilizada pela OMS (Organização Mundial da Saúde) que possui uma diferenciação entre a tabela usada para adultos ou para pessoas menores de 19 anos.",
        title3: "Fontes",
        ref1: "https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations",
        ref2: "https://www.who.int/toolkits/growth-reference-data-for-5to19-years/indicators/bmi-for-age",
        ref3: "https://www.cdc.gov/healthyweight/bmi/calculator.html",
    }

    return (
        <SafeAreaView className="flex-1 bg-zinc-50">
            <CustomHeader titulo="Explicação"/>

            <View className="mt-7">
                <Text className="font-mulish-sm text-base text-justify">{info.explication}</Text>
                <Text className="mt-5 font-mulish text-base">{info.title1}</Text>
                <Text className="mt-3 mb-3 font-mulish-sm text-base text-justify">{info.formula}</Text>
                <Text className="mt-5 font-mulish text-base">{info.title2}</Text>
                <Text className="mt-3 mb-3 font-mulish-sm text-base text-justify">{info.explication2}</Text>
                <Text className="mt-5 font-mulish text-base">{info.title3}</Text>
                <View>
                    <GoToReference 
                        caption="A healthy lifestyle - WHO recommendations" 
                        url={info.ref1}
                    />
                    <GoToReference 
                        caption="BMI-for-age (5-19 years)" 
                        url={info.ref2}
                    />
                    <GoToReference 
                        caption="BMI Percentile Calculator for Child and Teen" 
                        url={info.ref3}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}