
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-flow:column;
    align-items:center;
    justify-content:space-around;
  position: absolute;
  right: 0;
  top:0;
  border: 5px;
  height:20rem;
  width:10rem;
`

const Description = styled.div`
font-size: 1.5rem;
`
const Draggable = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 4rem;
width:10rem;

font-size: 1.5rem;
border-radius:5px;
border: 3px blue;
:hover{
    background-color: ${({theme:{color}})=> color.secondaryBlue}20;
}

`
const SearchInput = styled.input`
`


export default () => {
    const [searchPhrase, setSearchPhrase] = useState(null);

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };
    function onInputChange(event) {
        setSearchPhrase({
            [event.target.name]: event.target.value
        });
    }


    return (
        <Sidebar>
            <Description>Search for output feature:</Description>
            <SearchInput onChange={onInputChange} />
            <Draggable onDragStart={(event) => onDragStart(event, 'input')} draggable>
                Input Node
            </Draggable>

            <Description>Or add another question node:</Description>


            <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
                Default Node
            </div>

            <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'output')} draggable>
                Output Node
            </div>
        </Sidebar>
    );
};