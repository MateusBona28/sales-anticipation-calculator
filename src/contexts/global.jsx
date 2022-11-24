import { createContext, useState } from "react";


export const GlobalContext = createContext([]);


export const GlobalProvider = ({ children }) => {

    const [tomorrowValue, setTomorrowValue] = useState(0)

    const [tenDaysValue, setTenDaysValue] = useState(0)

    const [thirdyDaysValue, setThirdyDaysValue] = useState(0)
    
    const [ninetyDaysValue, setNinetyDaysValue] = useState(0)

    const anticipationContext = {
        tomorrowValue,
        setTomorrowValue,
        tenDaysValue,
        setTenDaysValue,
        thirdyDaysValue,
        setThirdyDaysValue,
        ninetyDaysValue,
        setNinetyDaysValue
    }


    return (
        <GlobalContext.Provider
          value={{anticipationContext}}
        >
          {children}
        </GlobalContext.Provider>
      )
}
