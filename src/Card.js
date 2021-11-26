import React from 'react'

function Card(props) {
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);

        setTimeout(()=>{
            target.style.display = 'none';
        },0);
    }

    const dragOver = e => {
        e.stopPropagation();
    }
    return (
        <div id={props.id} onDragStart={dragStart} onDragOver={dragOver} draggable={props.draggable} className={props.className}>
            <h5 className="mt-2 text-center">Service {props.id}</h5>
            <div className="col-md-5 text-start pt-2">
                <p><i className="bi bi-caret-right-fill"></i> <strong>ID: </strong>{props.id}</p>
                <p><i className="bi bi-caret-right-fill"></i> <strong>Name: </strong>{props.name}</p>
                {/* {props.showDesc ? (<p><i className="bi bi-caret-right-fill"></i> <strong>Description: </strong>{props.desc}</p>) : ""} */}
                
            </div>
            {props.children}
        </div>
    )
}

export default Card
