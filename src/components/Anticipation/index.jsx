import { AnticipationDiv } from "../StyledComponents/AnticipationDiv"


const Anticipation = () => {

    const example = 3000

    return(
        <>
        <AnticipationDiv>
            <h3>VOCÊ RECEBERÁ:</h3>
            <div>
                <span>Amanhã:</span>
                <span className="result-span"> {example.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div>
                <span>Em 10 dias:</span>
                <span className="result-span"> {example.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div>
                <span>Em 30 dias:</span>
                <span className="result-span"> {example.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div>
                <span>Em 90 dias:</span>
                <span className="result-span"> {example.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
        </AnticipationDiv>
        </>
    )

}


export default Anticipation
