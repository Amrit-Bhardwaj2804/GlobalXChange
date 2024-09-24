import { useId, useRef } from "react";

function InputBox({
    
    labelValue, 
    placeholderValue, 
    disabledValue=false, 

    amountValue, 
    onAmountValueChange, 

    selectedOption,
    optionsList=[],
    onOptionChange,

    flagLink=''
}){

    let amountInputID = useId();

    const filteredList = optionsList.filter((item)=>{

        return true;
    })

    return(
    
        <div className="w-full border-0 border-solid border-black flex flex-row justify-center items-center p-1 rounded-md shadow-md bg-white ">

            <div className="w-1/2 flex flex-col items-start justify-center gap-3 p-1">
                <label className="text-black/80" htmlFor={amountInputID}>{labelValue}</label>
                <input 
                    id={amountInputID}
                    className="bg-white outline-none" 
                    type="number" 
                    min={0} 
                    placeholder={placeholderValue} 
                    disabled={disabledValue} 
                    value={amountValue} 
                    onChange={(event)=>{
                        onAmountValueChange(Number(event.target.value));
                    }} 

                />
                    
            </div>

            <div className=" w-1/2 flex flex-col items-end justify-center gap-3 p-1 ">
                <p className="text-black/50">Currency-Type</p>

                <div className=" w-full flex flex-row justify-end items-center gap-2"> 
                    <img className="h-7" src={flagLink} alt="" />
                    <select 
                        className="w-1/2 bg-gray-200 rounded-md p-[0.2rem]"
                        value={selectedOption}
                        onChange={(event)=>{
                            onOptionChange(event.target.value);
                        }}
                    >
                    
                        {
                            optionsList.map((option, index, listItself)=>{

                                return(
                                    <option key={option} value={option}>{option}</option>
                                )
                            })
                        }
                    </select>
                </div>    
            </div>

        </div>
    )
}


export default InputBox;








