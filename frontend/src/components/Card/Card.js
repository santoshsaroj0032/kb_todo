import React, { useState } from "react";
import './Card.css';
import { Clock, MoreHorizontal, User } from "react-feather";
import Tag from "../Tag/Tag";
import DropDown from "../DropDown/DropDown";

function Card(props) {
    const [showDropdown,setShowDropdown] = useState(false);
    
    return(
        <div className="card" draggable
        onDragEnd={()=>props.handleDragEnd(props.card?.id,props.boardId)}
        onDragEnter={()=>props.handleDragEnter(props.card?.id,props.boardId)}
        >
            <div className="card_top">
                <div className="card_labels">
                    {
                        props.card?.labels?.map((item,index)=><Tag 
                        key={index}
                        text={item.text}
                        color={item.color}
                        />)
                    }
                   
                    <div className="morehorizontal">
                    <div className="card_top_more" onClick={()=>setShowDropdown(true)}>
                <MoreHorizontal/>
                {showDropdown && (
                        <DropDown onClose={()=>setShowDropdown(false)}>
                    <div className="card_dropdown">
                    <p onClick={()=>props.removeCard(props.card.id,props.boardId)}>Delete</p>
                    </div>
                </DropDown>
                    )}
                
                </div>
                    </div>
                </div>
                <div className="card_footer">
                    <p className="user_img"><User /></p>
                    <p><Clock />{props.card?.date}</p>
                    <p>{props.card?.title}</p>
                </div>
            </div>

        </div>
    )
}
export default Card;