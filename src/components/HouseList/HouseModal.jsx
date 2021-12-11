import React from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

const CustomModal = styled(Modal)`
    height: 100%;
    width: 100%;

    .modal-dialog {
        margin: 0 auto 0 auto;
        max-width: auto;
        height: 100%;
        width: 1000px;
    }
    .modal-content {
        height: 60%;
    }
`;

export default function HouseModal() {
    return (
        <CustomModal show={true}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer></Modal.Footer>
        </CustomModal>
    );
}
