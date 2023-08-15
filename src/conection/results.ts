import AsyncStorage from '@react-native-async-storage/async-storage';

export interface HistoryItem {
    id: string
    bmi: number
    status: string
    Description: string 
    criateAt: string
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