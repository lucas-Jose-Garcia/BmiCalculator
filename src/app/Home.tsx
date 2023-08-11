import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { InfoInput } from "../components/InfoInput";
import { InfoDate } from "../components/InfoDate";
import { Button } from "../components/Button";
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from "../routers/stack";

export function Home() {
  const navigation = useNavigation<StackTypes>()
  const [maleStatus, setMaleStatus] = useState(false);
  const [femaleStatus, setFemaleStatus] = useState(true);
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  function selectMale() {
    setMaleStatus(true);
    setFemaleStatus(false);
  }

  function selecFemale() {
    setMaleStatus(false);
    setFemaleStatus(true);
  }

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  return (
    <TouchableWithoutFeedback
      className="flex-1 items-center justify-start "
      onPress={Keyboard.dismiss}
    >
      <View className="flex-1 bg-zinc-50">
        <Header />
        {/* Form */}
        <View>
          {/* Sexo */}
          <View className="flex flex-row items-center justify-center">
            <Card
              text="Masculino"
              activate={maleStatus}
              onPress={() => selectMale()}
            />
            <Card
              text="Feminino"
              activate={femaleStatus}
              onPress={() => selecFemale()}
            />
          </View>

          {/* Peso e Altura */}
          <View className="flex flex-row mt-10 mb-10 pb-1">
            <InfoInput
              title="Peso (kg)"
              placeholder="000"
              mask="999"
              value={peso}
              setValue={setPeso}
            />
            <InfoInput
              title="Altura (cm)"
              placeholder="000"
              mask="999"
              value={altura}
              setValue={setAltura}
            />
          </View>

          {/* Data de Nascimento */}
          <View className="flex flex-row mb-10 pb-1">
            <InfoDate
              placeholder="12"
              title="Mês de Nascimento"
              value={month}
              setValue={setMonth}
              maxLength={2}
              maxValue={12}
            />
            <InfoDate
              placeholder="2000"
              title="Ano de Nascimento"
              value={year}
              setValue={setYear}
              maxLength={4}
              maxValue={anoAtual}
            />
          </View>
        </View>

        {/* Footer */}
        <View className="justify-center items-center">
          <Button caption="Calcular" onPress={() => {navigation.navigate('Result')}} />

          <View className="mt-7">
            <TouchableOpacity className="flex-row justify-center items-center gap-1">
              <FontAwesome5 name="history" size={20} color="#1a1414" />
              <Text className="text-sm">Acessar histórico</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}
