import React, { useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { COLUMN_NAMES } from "./constants";
import { tasks } from "./tasks";
import Card from "../Card";
import { useState, useEffect } from 'react';

import "./test.css";

const MovableItem = ({
  name,
  index,
  currentColumnName,
  moveCardHandler,
  setItems,
}) => {
  const changeItemColumn = (currentItem, columnName) => {
    
    setItems((prevState) => {
      return prevState.map((e) => {
          // console.log("HEYY", columnName)
        return {
          ...e,
          column: e.name === currentItem.name ? columnName : e.column
        };
      });
    });

    // setList((prevState) => {
    //   let filter = prevState.filter( (el)=> {
    //     return el.column === "Relationships";
    //   });
    //   console.log("Filter - ", filter);
    //   // return 
    //   return prevState.map((e) => {
    //       // console.log("HEYY", columnName)
    //     return {
    //       ...e,
    //       column: e.name === "Relationships"
    //     };
    //   });
    // });
  };

  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCardHandler(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: "CARD" ,
    item: { index, name, currentColumnName},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (dropResult) {
        const { name } = dropResult;
        const { DO_IT, IN_PROGRESS} = COLUMN_NAMES;
        switch (name) {
          case IN_PROGRESS:
            changeItemColumn(item, IN_PROGRESS);
            break;
        //   case AWAITING_REVIEW:
        //     changeItemColumn(item, AWAITING_REVIEW);
        //     break;
        //   case DONE:
        //     changeItemColumn(item, DONE);
        //     break;
          case DO_IT:
            changeItemColumn(item, DO_IT);
            break;
          default:
            break;
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));

  return (
    <div ref={ref} className="movable-item" style={{ opacity }}>
        <Card id={index} name={name}  desc={name}  showDesc='true'>
        </Card>
      {/* {name} */}
    </div>
  );
};

const Column = ({ children, className, title }) => {
    // console.log("Children" , children)
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "CARD",
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    // Override monitor.canDrop() function
    canDrop: (item) => {
      const { DO_IT, IN_PROGRESS} = COLUMN_NAMES;
      const { currentColumnName } = item;
      return (
        // currentColumnName === title ||
        // (currentColumnName === DO_IT || title === IN_PROGRESS)
        true
      );
    }
  });

  const getBackgroundColor = () => {
    if (isOver) {
      if (canDrop) {
        return "rgb(188,251,255)";
      } else if (!canDrop) {
        return "rgb(255,188,188)";
      }
    } else {
      return "";
    }
  };

  return (
    <div
      ref={drop}
      className={className}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <p className="title">{title}</p>
      
      {children}
    </div>
  );
};

export const Test = (props) => {
  const [items, setItems] = useState(props.list);
  // const [items, setItems] = useState(tasks);
  useEffect(()=>{
    let newList = items.filter( (el)=> {
          return el.column === "Relationships";
      });
      // console.log("Filter - ", newList)
    props.setList(newList);
  }, items)
  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragItem = items[dragIndex];

    if (dragItem) {
      setItems((prevState) => {
        const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
        const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
        coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

        return coppiedStateArray;
      });
    }
  };

//   const returnItemsForColumn = (columnName) => {
//     return items
//       .filter((item) => item.column === columnName)
//       .map((item, index) => (
//         <MovableItem
//           key={item.id}
//           name={item.name}
//           currentColumnName={item.column}
//           setItems={setItems}
//           index={index}
//           moveCardHandler={moveCardHandler}
//         />
//       ));
//   };
  const returnItemsForColumn = (columnName) => {
    return items
      .filter((item) => item.column === columnName)
      .map((item, index) => (
        <MovableItem
          key={item.id}
          name={item.id}
          // name={item.name}
          currentColumnName={item.column}
          setItems={setItems}
          index={index}
          moveCardHandler={moveCardHandler}
        >
        </MovableItem>
            // <Card id={item.id} name={item.name} desc={item.name}  showDesc='true'>
            // </Card>
            
      ));
  };

  const { DO_IT, IN_PROGRESS} = COLUMN_NAMES;

  return (
    <div className="containerdnd">
      <DndProvider backend={HTML5Backend}>
        <Column title={DO_IT} className="column do-it-column">
          {returnItemsForColumn(DO_IT)}
        </Column>
        <Column title={IN_PROGRESS} className="column in-progress-column">
          {returnItemsForColumn(IN_PROGRESS)}
        </Column>
      </DndProvider>
    </div>
  );
};
