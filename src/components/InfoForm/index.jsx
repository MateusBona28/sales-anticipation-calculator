import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../contexts/global"
import { instance } from "../../providers/axios"
import { StyledForm } from "../StyledComponents/StyledForm"



const InfoForm = () => {

    const { anticipationContext } = useContext(GlobalContext)

    const { 
        setTomorrowValue,
        setTenDaysValue,
        setThirdyDaysValue,
        setNinetyDaysValue
    } = anticipationContext

    const [value, setValue] = useState(1000)
    const [installments, setinstallments]  = useState(1)
    const [mdr, setMdr] = useState(0)

    const handleChangeValue = (e, state) => {

        if(state === "value"){
            setValue(e.target.value)

            if (e.target.value < 1000) {
                setValue(1000)
            }
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

            if(e.target.value === ""){
                setMdr(0)
            }
            else if(e.target.value > 100){
                setMdr(100)
            }
        }

    }

    useEffect(() => {

        const apiRequestData = {
            amount: value,
            installments,
            mdr,
            days: [1, 10, 30, 90]
        }

        instance.post("", apiRequestData)
        .then((res) => {
            setTomorrowValue(res.data["1"])
            setTenDaysValue(res.data["10"])
            setThirdyDaysValue(res.data["30"])
            setNinetyDaysValue(res.data["90"])
        })
        .catch((err) => {console.log(err)})

    }, [value, installments, mdr])

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
