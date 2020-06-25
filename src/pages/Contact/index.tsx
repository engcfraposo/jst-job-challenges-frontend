/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, FormEvent } from 'react';
import {
  Content,
  Container,
  Title,
  Image,
  ContactBox,
  ContactTitle,
  ContactButton,
  ContactImput,
  ContactTextArea,
} from './styles';
import background from '../../assets/background.svg';

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [text, setText] = useState<string>('');

  function handleContact(event: FormEvent) {
    event.preventDefault();
    const data = {
      name,
      email,
      phone,
      text,
    };
    return alert(
      `Email enviado para ${data.name}, Logo responderemos pelo e-mail:
      ${data.email} ou pelo telefone: ${data.phone} `,
    );
  }

  return (
    <>
      <Content>
        <Title>Análise de Portifólio do Github</Title>
        <Container>
          <Image src={background} />
          <ContactBox onSubmit={handleContact}>
            <ContactTitle>Contato</ContactTitle>
            <ContactImput
              placeholder="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ContactImput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ContactImput
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <ContactTextArea
              value={text}
              onChange={(e) => setText(e.target.value)}
            >
              Descreva seu problema
            </ContactTextArea>
            <ContactButton type="submit" placeholder="Enviar">
              Enviar
            </ContactButton>
          </ContactBox>
        </Container>
      </Content>
    </>
  );
};

export default Contact;
