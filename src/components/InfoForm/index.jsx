import { useState } from "react"
import { StyledForm } from "../StyledComponents/StyledForm"



const InfoForm = () => {

    const [value, setValue] = useState(0)
    const [installments, setinstallments]  = useState(1)
    const [mdr, setMdr] = useState(0)

    const handleChangeValue = (e, state) => {

        if(state === "value"){
            setValue(e.target.value)
        }
        else if(state === "installments"){
            
            setinstallments(e.target.value)

            if (e.target.value >  12)  {
                setinstallments(12)
            }
            else if (e.target.value < 1) {
                setinstallments(1)
            }

        }
        else {
            setMdr(e.target.value)
        }

    }

    return(
        <>
        <StyledForm>
            <div>
                <h2>Simule sua antecipação</h2>
            </div>
            <div>
                <label >Informe o valor da venda</label>
                <input placeholder="R$" type="text" id="value" name="value" 
                value={value}
                onChange={(event) => {handleChangeValue(event, "value")}} />
            </div>
            <div>
                <label >Em quantas parcelas</label>
                <input type="number" placeholder="Máximo de 12 parcelas" id="installments" name="installment" value={installments}
                onChange={(event) => {handleChangeValue(event, "installments")}} />
            </div>
            <div>
                <label >Informe o percentual de MDR</label>
                <input id="mdr" name="mdr" value={mdr} 
                onChange={(event) => {handleChangeValue(event, "mdr")}} />
            </div>
        </StyledForm>
        </>
    )

}


export default InfoForm
