import React,{useState} from "react";
import "./Addcard.css";
import { X } from "react-feather";
function Addcard(props) {
    const [add,setAdd] = useState(false)
    const [inputvalue,setInputValue] = useState("")
    return(
<div className="addcard">
    
    {
        add ? 
    
    <form className={`addcard_edit ${props.editClass || ""}`}
    onSubmit={(e)=>{
        e.preventDefault()
        if(props.onSubmit)props.onSubmit(inputvalue)
            setAdd(false)
            setInputValue()
    }}
    >
        <input 
        type="text" 
        value={inputvalue}
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder={props.placeholder}
        />
        <div className="addcard_footer">
            <button type="submit">{props.buttonText || "Add"}</button>
            <X onClick={()=>setAdd(false)} />
        </div>
    </form>
        
        :<p className={`addcard_display ${props.displayClass || ""}`} onClick={()=>setAdd(true)}>{props.text || "+Add task"}</p>}
</div>
    )
}
export default Addcard;