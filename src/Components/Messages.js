import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import React from 'react';
import { useEffect } from 'react';

export const SuccessMiniModal = ({
    children,
    status,
    setStatus
}) => {
    useEffect(() => {
        if (status !== false) {
            setTimeout(() => {setStatus(false)}, 5000);
        }
    }, [status])
    return (
        <Modal
            show={status !== false}
            onHide={() => setStatus(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            centered={true}
            animation={true}
        >
            <Modal.Dialog>
                <Modal.Header closeButton></Modal.Header>
                {status === "success" &&
                    <Alert variant="success">
                        <Alert.Heading>Success!</Alert.Heading>
                        {children}
                    </Alert>
                }
                {status !== "success"  &&
                    <Alert variant="danger">
                        <Alert.Heading>Error!</Alert.Heading>
                        Please contact adminstrator if not resolved in a few minutes or when you try again
                    </Alert>
                }
            </Modal.Dialog>
        </Modal>
    )
}