import React from "react";
import { S } from "./Contacts_Styles.ts";
import { SectionTitle } from "../../../components/SectionTitle.ts";
import { useState } from "react";
import { Container } from "../../../components/Container.ts";
import { StyledButton } from "../../../components/Button.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { ContactsModal }from "./contactsModal/ContactsModal.tsx";

export const Contact: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <S.Contacts id="contacts">
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <FlexWrapper direction="column" align="center" justify="space-between" wrap="nowrap" gap="40px">
                    <S.Paragraph>
                        <span>Want to know more or just chat?</span>
                        <span>You are welcome!</span>
                    </S.Paragraph>
                    <StyledButton onClick={() => setIsModalOpen(true)} type="submit" width="180px" height="42px">Send message</StyledButton>
                </FlexWrapper>
                <ContactsModal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    parentSelector={() => document.getElementById('contacts')!}
                    closeTimeoutMS={300}
                />
            </Container>
        </S.Contacts>
    )
}