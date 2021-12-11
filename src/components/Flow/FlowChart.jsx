import axios from 'axios';
import React, { useState, useRef } from 'react';
import ReactFlow, {
    ReactFlowProvider,
    addEdge,
    removeElements,
    Controls,
} from 'react-flow-renderer';
import styled from 'styled-components';
import { FlowSave } from '../../Consts/flowEndpoints';

import Nodes from './Nodes';

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input node' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;


export default function FlowChart() {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);

    const [elements, setElements] = useState(initialElements);

    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));

    const onLoad = (_reactFlowInstance) => {
        if(reactFlowInstance==null) setReactFlowInstance(_reactFlowInstance);
    }
    //warning this doesnt work for some reason

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');
        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
            id: getId(),
            type,
            position,
            data: { label: `${type} node` },
        };

        setElements((es) => es.concat(newNode));
    };
    const ChartContainer = styled.div`
    position:relative;
    `

    const FlowWrapper= styled.div`
    width:70vw;
    height:90vh;
    `

    const SaveButton = styled.button`
    `;

    async function SaveFlow(){
            await axios.post(FlowSave, elements);

    }
    return (
        <ChartContainer>
            <SaveButton onClick={SaveFlow}>btn</SaveButton>
             <ReactFlowProvider>
            <FlowWrapper ref={reactFlowWrapper}>
                <ReactFlow elements={elements}
                    onElementsRemove={onElementsRemove}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onLoad={onLoad}
                    >
                    <Controls />
                </ReactFlow>
            </FlowWrapper>
            <Nodes />
            </ReactFlowProvider>
        </ChartContainer>
    )
}