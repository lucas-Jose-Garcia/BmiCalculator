import { Text, View, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { NutritionalStatus } from "../app/Result";

interface ExplainResultProps {
    resultado: NutritionalStatus
}

const explanations = {
    "Abaixo do Peso": "Isso significa que você pode estar mais magro do que o considerado saudável para sua altura. Consultar um profissional de saúde é fundamental para receber orientações personalizadas e adequadas ao seu caso específico.",
    "Normal": "Parabéns🎉 Seu peso está dentro da faixa considerada saudável para sua altura. Continue mantendo uma alimentação equilibrada e praticando atividades físicas para se manter assim.",
    "Sobrepeso": " Isso quer dizer que você pode estar um pouco acima do peso ideal para sua altura. Consultar um profissional de saúde é fundamental para receber orientações personalizadas e adequadas ao seu caso específico.",
    "Obesidade": "Infelizmente, você está com excesso de peso, o que pode trazer alguns problemas de saúde.Por isso se consultar com um profissional de saúde é fundamental para receber orientações personalizadas e adequadas ao seu caso específico.",
    "Obesidade Grau I": "Infelizmente, você está com excesso de peso, o que pode trazer alguns problemas de saúde. Por isso se consultar com um profissional de saúde é fundamental para receber orientações personalizadas e adequadas ao seu caso específico.",
    "Obesidade Grau II": "Nesse estágio, a obesidade é mais acentuada, o que pode aumentar o risco de problemas de saúde mais sérios. Procurar ajuda médica e adotar hábitos saudáveis é muito importante para melhorar sua qualidade de vida.",
    "Obesidade Grau III": "Isso significa que seu peso está muito acima do ideal e representa um risco significativo para sua saúde. É fundamental buscar apoio médico e mudar totalmente seu estilo de vida para reduzir o peso e melhorar sua saúde e bem-estar."
}

export function ExplainResult({resultado}: ExplainResultProps) {
    return (
    <View className="items-center mt-8 bg-zinc-200 rounded-md shadow-md shadow-zinc-400">
        <Text className="p-3 font-mulish-sm text-justify text-zinc-700">{resultado ? explanations[resultado] : ""}</Text>
        <TouchableOpacity className="flex-row items-center gap-1 mb-4 bl">
            <AntDesign name="questioncircleo" size={18} color="#52525b" />
            <Text className="text-zinc-600 font-mulish">Como o IMC é calculado?</Text>
        </TouchableOpacity>
    </View>
    )
}