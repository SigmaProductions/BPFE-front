import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Accordion, Form } from 'react-bootstrap';
import { findEndpointObjectsWithPhrase } from '../../utils/utils';

const Sidebar = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    right: 1rem;
    top: 17rem;
    border: 5px;
    height: 20rem;
`;
const Panel = styled.div`
    height: 30rem;
    width: 100%;
    display: flex;
    justify-content: start;
    flex-flow: column;
    align-items: center;
    padding: 2rem;
`;

const CustomInput = styled(Form.Control)`
    width: 100%;
    height: 3rem;
    font-size: 1.8rem;
`;

const Description = styled.div`
    font-size: 1.8rem;
`;
const Draggable = styled.div`
    padding: 1rem;
    width: 100%;
    font-size: 1.4rem;
    border-radius: 5px;
    border: 3px blue;
    div:hover {
        background-color: ${({ theme: { color } }) => color.secondaryBlue}20;
    }
`;
const SearchResults = styled(Draggable)`
    display: flex;
    flex-direction: column;

    overflow-y: scroll;
`;

const CustomAccordion = styled(Accordion)`
    width: 60rem;
    z-index: 10;
    button {
        font-size: 2rem;
    }
`;

const FlowPanel = () => {
    const [searchPhrase, setSearchPhrase] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [questionText, setQuestionText] = useState(null);
    const [answerText, setAnswerText] = useState(null);

    useEffect(() => {
        if (searchPhrase != null) {
            var res = findEndpointObjectsWithPhrase(searchPhrase);
            setSearchResults(res);
        }
        //mock:  [{'summary': 'test1', 'endpoint':  'test2'},
        //     {'summary': 'test1', 'endpoint':  'test2'},
        //  {'summary': 'test1', 'endpoint':  'test2'}]
    }, [searchPhrase]);

    const onDragStart = (event, nodeType, questionText, answerText=null, endpoint = null) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.setData('application/reactflow/question', questionText);
        event.dataTransfer.setData('application/reactflow/answer', answerText);
        event.dataTransfer.setData('application/reactflow/endpoint', endpoint);
        event.dataTransfer.effectAllowed = 'move';
    };
    function onInputChange(event) {
        setSearchPhrase(event.target.value);
    }
    function onQuestionTextChange(event) {
        setQuestionText(event.target.value);
    }
    function onAnswerTextChange(event) {
        setAnswerText(event.target.value);
    }

    return (
        <Sidebar>
            <CustomAccordion>
                <Accordion.Item>
                    <Accordion.Header>Cechy wyjściowe</Accordion.Header>
                    <Accordion.Body>
                        <Panel>
                            <Description>
                                Podaj cechę ze zbioru którą chcesz dodać do grafu:
                            </Description>
                            <CustomInput
                                type="text"
                                placeholder="Cecha..."
                                onChange={onInputChange}
                            />
                            <SearchResults>
                                {searchResults.map((ele, index) => {
                                    return (
                                        <Draggable
                                            key={ele.endpoint}
                                            onDragStart={(event) =>
                                                onDragStart(
                                                    event,
                                                    'output',
                                                    ele['summary'],
                                                    ele['endpoint'],
                                                )
                                            }
                                            draggable
                                        >
                                            {ele['summary']}
                                        </Draggable>
                                    );
                                })}
                            </SearchResults>
                        </Panel>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Pytania</Accordion.Header>
                    <Accordion.Body>
                        <Panel>
                            <Description>
                                Podaj pytanie które zostanie zadane użytkownikowi:
                            </Description>
                            <CustomInput
                                type="text"
                                placeholder="Pytanie..."
                                onChange={onQuestionTextChange}
                            />
                            {questionText && (
                                <>
                                    <Description>
                                        Dodaj do grafu wierzchołek z pytaniem:
                                    </Description>
                                    <Draggable
                                        onDragStart={(event) =>
                                            onDragStart(event, 'default', questionText)
                                        }
                                        draggable
                                    >
                                        Przeciągnij mnie
                                    </Draggable>
                                </>
                            )}
                        </Panel>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Odpowiedzi</Accordion.Header>
                    <Accordion.Body>
                        <Panel>
                            <Description>
                                Podaj możliwe odpowiedzi użytkownika:
                            </Description>
                            <CustomInput
                                type="text"
                                placeholder="Odpowiedź..."
                                onChange={onAnswerTextChange}
                            />
                            {answerText && (
                                <>
                                    <Description>
                                        Dodaj do grafu wierzchołek z odpowiedzią:
                                    </Description>
                                    <Draggable
                                        onDragStart={(event) =>
                                            onDragStart(event, 'default',null,  answerText)
                                        }
                                        draggable
                                    >
                                        Przeciągnij mnie
                                    </Draggable>
                                </>
                            )}
                        </Panel>
                    </Accordion.Body>
                </Accordion.Item>
            </CustomAccordion>
        </Sidebar>
    );
};

export default FlowPanel;
