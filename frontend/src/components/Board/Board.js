import React, { useState } from "react";
import './Board.css'
import { MoreHorizontal, Plus } from "react-feather";
import Card from "../Card/Card";
import Addcard from "../Addcard/Addcard";
import DropDown from "../DropDown/DropDown";
function Board(props) {
    const [showDropdown,setShowDropdown] = useState(false);
    return(
        <div className="board">
            <div className="board_top">
                <p className="board_top_title">
                    {props.board?.title} <span>{`${props.board?.cards?.length}`}</span>
                    
                </p>
                <div className="board_top_more" onClick={()=>setShowDropdown(true)}>
                <MoreHorizontal/>
                {showDropdown && (
                        <DropDown onClose={()=>setShowDropdown()}>
                    <div className="board_dropdown">
                    <p onClick={()=>props.removeboard(props.board?.id)}>Delete</p>
                    </div>
                </DropDown>
                    )}
                
                </div>
                <Plus />
                
            </div>
                <div className="board_cards">
                    {
                        props.board?.cards?.map((item)=>(<Card
                        key={item.id} card={item}
                        removeCard = {props.removeCard}
                        boardId = {props.board?.id}
                        handleDragEnd = {props.handleDragEnd}
                        handleDragEnter = {props.handleDragEnter}

                        />))
                    }
                   
                    <Addcard className="board_cards_add"
                     placeholder="Enter card title"
                    onSubmit = {(value)=>props.addCard(value, props.board?.id)}/>
                </div>

            
        </div>
    )
}
export default Board;