import React, { ElementRef, useRef } from "react";
import Modal from 'react-modal'
import { S } from '../Contacts_Styles';
import { StyledButton } from '../../../../components/Button.ts';
import emailjs from '@emailjs/browser';

// Устанавливаем "привязку" к корневому элементу
// (нужно для семантики)
Modal.setAppElement('#root')

type ContactsModalPropsType = {
    isOpen: boolean
    onRequestClose: () => void
    parentSelector?: () => HTMLElement
    closeTimeoutMS?: number
};

export const ContactsModal: React.FC<ContactsModalPropsType> = ({ isOpen, onRequestClose, parentSelector }: ContactsModalPropsType) => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
      e.preventDefault();

      if(!form.current) return

      emailjs
        .sendForm('service_d21w2to', 'template_wvj8dwn', form.current, {
          publicKey: 'dro38UNOyiVUS0zRC',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        // очистка формы после отправки
        e.target.reset()
        // закрываем модальное окно
        onRequestClose()
      }

  return (
    <>
      <S.ModalContacts
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Feedback form"
        overlayClassName="modal-overlay"
        parentSelector={parentSelector}
        closeTimeoutMS={500}
        // style={{ content: {transition: 'opacity 1s ease-in-out'} }}
        // aria={{
        //   labelledby: "Send message",
        //   describedby: 'modal-description',
        // }}
      >
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder="Name" name={"user_name"}/>
          <S.Field required placeholder="Email" name={"email"}/>
          <S.Field required placeholder="Subject" name={"subject"}/>
          <S.Field required as="textarea" placeholder="Message" name={"message"} />
          <S.BtnWrapper>
            <StyledButton type="submit">Send message</StyledButton>
            <StyledButton type="button" onClick={onRequestClose}>Close</StyledButton>
          </S.BtnWrapper>
        </S.Form>
      </S.ModalContacts>
    </>
  )
}