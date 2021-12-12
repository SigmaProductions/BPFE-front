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
import { deepEqual } from '../../utils/utils';
import { GenericButton } from '../Generic/Buttons';

import NodesPanel from './NodesPanel';

const initialElements = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Wejscie' },
        position: { x: 250, y: 5 },
    },
];
function generateUUID() {
    // Public Domain/MIT
    var d = new Date().getTime(); //Timestamp
    var d2 =
        (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
            //Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {
            //Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
}

const getId = () => `dndnode_${generateUUID()}`;

export default function FlowChart() {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState();

    const [elements, setElements] = useState(initialElements);

    const onElementsRemove = (elementsToRemove) =>
        setElements((els) => removeElements(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => addEdge(params, els));

    const onLoad = (_reactFlowInstance) =>{

      if(reactFlowInstance==null || !deepEqual(_reactFlowInstance.toObject(),reactFlowInstance.toObject()))
        setReactFlowInstance(_reactFlowInstance);
    }
    //warning this doesnt work for some reason

    const onDragOver = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event) => {
        event.preventDefault();
        if (reactFlowInstance) {
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const type = event.dataTransfer.getData('application/reactflow');
            const text = event.dataTransfer.getData('application/reactflow/text');
            const endpoint = event.dataTransfer.getData('application/reactflow/endpoint');
            const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });
            const newNode = {
                id: getId(),
                type,
                position,
                data: { label: text, endpoint: endpoint },
            };

            setElements((es) => es.concat(newNode));
        }
    };
    const ChartContainer = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        flex-flow: column;
    `;

    const FlowWrapper = styled.div`
        width: 70vw;
        height: 80vh;
    `;

    const SaveButton = styled(GenericButton)`
        width: 15rem;
        height: 5rem;
        margin: auto;
    `;

    const ButtonsContainer = styled.div`
        display: flex;
        flex-flow: column;
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        button {
            margin-top: 1rem;
        }
    `;

    async function LoadFlow() {
        var res = await axios.get(FlowSave);
        setElements(res.data);
    }
    async function SaveFlow() {
        await axios.post(FlowSave, elements);
    }
    return (
        <ChartContainer>
            <ButtonsContainer>
                <SaveButton onClick={SaveFlow}>Save</SaveButton>
                <SaveButton onClick={LoadFlow}>Load</SaveButton>
            </ButtonsContainer>
            <ReactFlowProvider>
                <FlowWrapper ref={reactFlowWrapper}>
                    <ReactFlow
                        elements={elements}
                        onElementsRemove={onElementsRemove}
                        onConnect={onConnect}
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        onLoad={onLoad}
                    >
                        <Controls />
                    </ReactFlow>
                </FlowWrapper>
                <NodesPanel />
            </ReactFlowProvider>
        </ChartContainer>
    );
}
