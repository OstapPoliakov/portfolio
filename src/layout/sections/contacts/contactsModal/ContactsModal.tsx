import { ElementRef, useRef } from "react";
import Modal from 'react-modal'
import { S } from '../Contacts_Styles';
import { StyledButton } from '../../../../components/Button.ts';
import { toast } from 'react-toastify';
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

export const ContactsModal: React.FC<ContactsModalPropsType> = ({ isOpen, onRequestClose, parentSelector, closeTimeoutMS }: ContactsModalPropsType) => {

    const form = useRef<ElementRef<'form'>>(null);
    const inputNameRef = useRef<HTMLInputElement | null>(null)

    const sendEmail = (e: any) => {
      
      console.log("Форма отправлена");
      e.preventDefault();

      if(!form.current) return

      // Удаляем все предыдущие toast (если есть)
      toast.dismiss();

      // создается toast для состояния Loading (отправка сообщения)
      const toastId = toast.loading("Отправка сообщения...", {
        position: "bottom-left",
        toastId: "form-submit",
        style: {
          fontFamily: "Gilroy-Medium",
          fontSize: "14px"
        }
      });

      emailjs
        .sendForm('service_d21w2to', 'template_wvj8dwn', form.current, {
          publicKey: 'dro38UNOyiVUS0zRC',
        })
        .then(
          () => {
            toast.update(toastId,
              {
                render: "Сообщение успешно отправлено!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeButton: true,
              }
            );
            console.log('SUCCESS!');
          },)
        .catch((error) => {
            toast.update(toastId,
              {
                render: "Ошибка при отправке сообщения",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeButton: true,
              }
            );
            console.log('FAILED with: ', error.text);
          }
        )

          // () => {
          //   toast.success('Сообщение успешно отправлено!');
          //   console.log('SUCCESS!');
          // },
          // (error) => {
          //   toast.error('Ошибка при отправке сообщения');
          //   console.log('FAILED...', error.text);
            
          // },
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
        closeTimeoutMS={closeTimeoutMS}
        onAfterOpen={() => inputNameRef.current?.focus()}
        shouldFocusAfterRender={false}  // убираем фокус по умолчанию на форме
        // style={{ content: {transition: 'opacity 1s ease-in-out'} }}
        // aria={{
        //   labelledby: "Send message",
        //   describedby: 'modal-description',
        // }}
      >
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder="Name" name={"user_name"} ref={inputNameRef}/>
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