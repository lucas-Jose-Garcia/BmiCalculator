import AsyncStorage from '@react-native-async-storage/async-storage';
import { NutritionalStatus } from '../app/Result';

export interface HistoryItem {
    id: string
    bmi: string
    status: NutritionalStatus
    description: string 
    criateAt: string
}

export async function clearHistoryBmi() {
    await AsyncStorage.removeItem('@bmiCalculator:history')
}

export async function getHistoryBmi() {
    const response = await AsyncStorage.getItem('@bmiCalculator:history')
    const previousData = response ? JSON.parse(response) : []
    return previousData
}

export async function storeHistoryBmi(newHistory: HistoryItem) {
    try {
        const currentHistory = await getHistoryBmi()
        const mergeData = [newHistory, ...currentHistory]
        await AsyncStorage.setItem('@bmiCalculator:history', JSON.stringify(mergeData))

    } catch (e) {
        console.log(e)
    }
}

export async function deleteRecordById(id: string) {
    const currentHistory: HistoryItem[] | []  = await getHistoryBmi()
    const newHistory = currentHistory.filter((item) => item.id != id)
    await AsyncStorage.setItem('@bmiCalculator:history', JSON.stringify(newHistory))
}