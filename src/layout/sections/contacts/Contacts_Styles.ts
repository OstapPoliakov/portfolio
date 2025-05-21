import styled from "styled-components"
import Modal from "react-modal"
import { theme } from "../../../assets/styles/Theme"

const Contacts = styled.section`
    position: relative;
    //min-height: 100vh;
`

const Paragraph = styled.p`
    text-align: center;
    font-size: 18px;

    span {
        display: block;
    }
`

const ModalContacts = styled(Modal)`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    transform: translate(-50%, -50%);
    background: ${theme.colors.primaryBg};
    padding: 30px;
    border-radius: 12px;
    outline: none;
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    //transition: opacity 0.3s ease-in-out;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    textarea {
        resize: none;
        height: 150px;
    }
`

const Field = styled.input`
    font-family: "Gilroy-Medium", sans-serif;
    font-size: 16px;
    line-height: 1.2;
    color: ${theme.colors.font};

    width: 100%;
    padding: 10px 15px;
    border-radius: 6px;
    border: 1px solid ${theme.colors.inputBorder};

    &:focus-visible {
        border: 1px solid ${theme.colors.inputBorder};
    }
`

const BtnWrapper = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 25px;
`

export const S = {
    Contacts,
    Paragraph,
    ModalContacts,
    Form,
    Field,
    BtnWrapper,
}
