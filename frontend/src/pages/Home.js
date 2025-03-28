 

import React, { useState } from 'react';
import Board from '../components/Board/Board';
import Navbar from '../components/Navbar/Navbar';
import { Plus } from 'react-feather';
import Addcard from '../components/Addcard/Addcard';

function Home() {
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random() * 2,
      title: "To Do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Planning",
          tasks: [],
          labels: [{ text: "Add Buttons", color: "white" }],
          desc: "something",
          date: "22-March"
        },
        {
          id: Date.now() + Math.random(),
          title: "Running",
          tasks: [],
          labels: [{ text: "Logic Revision", color: "white" }],
          desc: "something",
          date: "22-March"
        },
        {
          id: Date.now() + Math.random(),
          title: "Software Requirements",
          tasks: [],
          labels: [{ text: "Coding", color: "white" }],
          desc: "something",
          date: "22-March"
        }
      ]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "In Review",
      cards: [
        { 
          id: Date.now() + Math.random(),
          title: "Programming",
          tasks: [],
          labels: [{ text: "Add Buttons", color: "white" }],
          desc: "something",
          date: "23-March"
        },
        {
          id: Date.now() + Math.random(),
          title: "revise",
          tasks: [],
          labels: [{ text: "Logo Revision", color: "white" }],
          desc: "something",
          date: "23-March"
        }
      ]
    },
    {
      id: Date.now() + Math.random() * 2,
      title: "Done",
      cards: []
    }
  ]);

  const [target, setTarget] = useState({ cid: "", bid: "" });

  const addCard = (title, bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title,
      labels: [],
      tasks: [],
      date: '',
      desc: ''
    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;
    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);
  };

  const removeCard = (cid, bid) => {
    const bindex = boards.findIndex((item) => item.id === bid);
    if (bindex < 0) return;
    const cindex = boards[bindex].cards.findIndex((item) => item.id === cid);
    if (cindex < 0) return;
    const tempBoards = [...boards];
    tempBoards[bindex].cards.splice(cindex, 1);
    setBoards(tempBoards);
  };

  const addBoard = (title) => {
    setBoards([...boards, { id: Date.now() + Math.random(), title, cards: [] }]);
  };

  const removeBoard = (bid) => {
    setTarget({ cid: "", bid: "" }); // Reset drag target
    const tempBoards = boards.filter((item) => item.id !== bid);
    setBoards(tempBoards);
  };

  const handleDragEnd = (cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

    s_bIndex = boards.findIndex((item) => item.id === bid);
    if (s_bIndex < 0) return;

    s_cIndex = boards[s_bIndex].cards?.findIndex((item) => item.id === cid);
    if (s_cIndex < 0) return;

    t_bIndex = boards.findIndex((item) => item.id === target.bid);
    if (t_bIndex < 0) return;

    const tempBoards = [...boards];
    const tempCard = tempBoards[s_bIndex].cards[s_cIndex];

    tempBoards[s_bIndex].cards.splice(s_cIndex, 1);

    if (tempBoards[t_bIndex].cards.length === 0) {
      tempBoards[t_bIndex].cards.push(tempCard);
    } else {
      t_cIndex = tempBoards[t_bIndex].cards?.findIndex((item) => item.id === target.cid);
      if (t_cIndex < 0) return;
      tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempCard);
    }

    setBoards(tempBoards);
  };

  const handleDragEnter = (cid, bid) => {
    setTarget({ cid, bid });
  };

  return (
    <div className="app">
      <div className='app_navbar'>
        <Navbar />
      </div>
      <div className='app_outer'>
        <div className='app_boards'>
          {boards.map((item) => (
            <Board
              key={item.id}
              board={item}
              addCard={addCard}
              removeCard={removeCard}
              removeBoard={removeBoard}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
            />
          ))}
          <Plus />
          <div className='app_boards_add'>
            <Addcard
              text="Add section"  
              className="addsection"
              placeholder="Enter Board title"
              onSubmit={(value) => addBoard(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

