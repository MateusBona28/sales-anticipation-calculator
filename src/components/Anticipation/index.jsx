import { useContext } from "react"
import { GlobalContext } from "../../contexts/global"
import { AnticipationDiv } from "../StyledComponents/AnticipationDiv"


const Anticipation = () => {

    const { anticipationContext } = useContext(GlobalContext)

    const { tomorrowValue,
        tenDaysValue,
        thirdyDaysValue,
        ninetyDaysValue 
    } = anticipationContext

    return(
        <>
        <AnticipationDiv>
            <h3>VOCÊ RECEBERÁ:</h3>
            <div>
                <span>Amanhã:</span>
                <span className="result-span"> {tomorrowValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div>
                <span>Em 10 dias:</span>
                <span className="result-span"> {tenDaysValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div>
                <span>Em 30 dias:</span>
                <span className="result-span"> {thirdyDaysValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div>
                <span>Em 90 dias:</span>
                <span className="result-span"> {ninetyDaysValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
        </AnticipationDiv>
        </>
    )

}


export default Anticipation
