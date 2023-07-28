import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {DateTimePickerAndroid, DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Text,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput
} from "react-native";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { InfoInput } from "../components/InfoInput";
import { InfoDate } from "../components/InfoDate";

export default function Home() {
  const [maleStatus, setMaleStatus] = useState(false);
  const [femaleStatus, setFemaleStatus] = useState(true);
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  //const [isDatePickerActive, setIsDatePickerActive] = useState(false)

  function selectMale() {
    setMaleStatus(true);
    setFemaleStatus(false);
  }

  function selecFemale() {
    setMaleStatus(false);
    setFemaleStatus(true);
  }

  const dataAtual = new Date();
  const anoAtual = dataAtual. getFullYear();

  return (
    <TouchableWithoutFeedback
      className="flex-1 items-center justify-start bg-zinc-200"
      onPress={Keyboard.dismiss}
    >
      <View>
        <Header />
        {/* Form */}
        <View>
          {/* Sexo */}
          <View className="flex flex-row items-center justify-center bg-purple-100">
            <Card
              text="Masculino"
              activate={maleStatus}
              gap="Right"
              onPress={() => selectMale()}
            />
            <Card
              text="Feminino"
              activate={femaleStatus}
              gap="Left"
              onPress={() => selecFemale()}
            />
          </View>

          {/* Peso e Altura */}
          <View className="flex flex-row bg-red-100 mt-10 mb-10 pb-1">
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
          <View className="flex flex-row bg-red-100 mb-10 pb-1">
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

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}
