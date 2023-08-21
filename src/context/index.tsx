import { createContext, useState } from "react"

export interface StateContexProps {
    maleStatus: boolean
    femaleStatus: boolean
    weight: string
    height: string
    month: string
    year: string
    setMaleStatus: React.Dispatch<React.SetStateAction<boolean>>
    setFemaleStatus: React.Dispatch<React.SetStateAction<boolean>>
    setWeight: React.Dispatch<React.SetStateAction<string>>
    setHeight: React.Dispatch<React.SetStateAction<string>>
    setMonth: React.Dispatch<React.SetStateAction<string>>
    setYear: React.Dispatch<React.SetStateAction<string>>
}

export const StateContex = createContext<StateContexProps>({
    maleStatus: false,
    femaleStatus: true, 
    weight: "", 
    height: "", 
    month: "01", 
    year: "2000", 
    setMaleStatus: () => {}, 
    setFemaleStatus: () => {}, 
    setWeight: () => {},
    setHeight: () => {},
    setMonth: () => {}, 
    setYear: () => {}
})

export function StateProvider({children}: any) {
    const [maleStatus, setMaleStatus] = useState(false);
    const [femaleStatus, setFemaleStatus] = useState(true);
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    
    
    return (
        <StateContex.Provider value={{
            maleStatus,
            femaleStatus, 
            weight, 
            height, 
            month, 
            year, 
            setMaleStatus, 
            setFemaleStatus, 
            setWeight,
            setHeight,
            setMonth, 
            setYear,
        }}>
            {children}
        </StateContex.Provider>
    )
}