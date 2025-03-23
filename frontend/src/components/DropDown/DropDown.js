import React, { useEffect, useRef } from "react";
import './DropDown.css';

function DropDown(props){
    const dropdownRef = useRef();

    const handleclick=(e)=>{
        if(dropdownRef && dropdownRef?.current?.contains(e?.target)) {
           if(props.onClose) props.onClose();
        }
    };
    useEffect(()=>{
        document.addEventListener('click',handleclick);
        return ()=>{
            document.removeEventListener('click',handleclick);
        };
        
    });
    return(
        <div ref={dropdownRef} className="dropdown"
            style={{
                position:"absolute",
                top:"100%",
                right:"0"
            }}
            >
            {props.children}
        </div>
    );
}
export default DropDown;