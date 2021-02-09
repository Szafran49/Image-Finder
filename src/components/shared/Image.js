import { useState } from 'react'
import styled from 'styled-components'
import Modal from '@material-ui/core/Modal'
const StyledImage = styled.img`
  width: 100% !important;
  height: auto !important;
`
const StyledModalImage = styled.img`
  display:block;
  margin-left: auto;
  margin-right: auto;
`
const StyledModalBody = styled.div`
  position: absolute;
  width: 500px;
  left:0;
  right:0;
  margin:auto;
  background-color: white;
  text-align:center;
  padding: theme.spacing(2, 4, 3);
`
export default function Image({ image, location, id, username, modalImage }) {
    const [open, setOpen] = useState(false)
    function handleOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    const body = (
        <StyledModalBody>
            <p id="modal-username">Autor: {username}</p>
            <p id="modal-location">
                Miejsce: {location !== null ? location : "Nie podano miejsca wykonania zdjęcia."}
            </p>
            <StyledModalImage src={modalImage} alt={id} />
            <Image />
        </StyledModalBody>
    );

    return (
        <>
            <StyledImage src={image} alt={id} onClick={handleOpen} />
            <Modal
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-username"
                aria-describedby="modal-location"
            >
                {body}
            </Modal>
        </>
    )
}   