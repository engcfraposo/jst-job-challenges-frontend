/* eslint-disable react/no-unescaped-entities */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Content,
  Container,
  Title,
  Image,
  AboutBox,
  AboutTitle,
  AboutText,
} from './styles';
import background from '../../assets/background.svg';

const About: React.FC = () => {
  return (
    <>
      <Content>
        <Title>Análise de Portifólio do Github</Title>
        <Container>
          <AboutBox>
            <AboutTitle>Sobre o Projeto</AboutTitle>
            <AboutText>
              O Análise de Portifólio do Github é um projeto em formato de
              DashBoard que tem como finalidade evidênciar aspectos
              quantitativos de produtividade em programação dos respectivos
              respoitórios.
            </AboutText>
            <AboutTitle>
              MIT License - Direitos autorais (c) 2020 engcfraposo
            </AboutTitle>
            <AboutText>
              A permissão é concedida, gratuitamente, a qualquer pessoa que
              obtenha uma cópia deste software e dos arquivos de documentação
              associados (o "Software"), para negociar no Software sem
              restrições, incluindo, sem limitação, os direitos de uso, cópia,
              modificação, fusão , publicar, distribuir, sublicenciar e / ou
              vender cópias do Software e permitir que as pessoas a quem o
              Software é fornecido o façam, sob as seguintes condições:
            </AboutText>
            <AboutText>
              O aviso de direitos autorais acima e este aviso de permissão devem
              ser incluídos em todas as cópias ou partes substanciais do
              Software.
            </AboutText>
            <AboutTitle>
              O SOFTWARE É FORNECIDO "TAL COMO ESTÁ", SEM GARANTIA DE QUALQUER
              TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO MAS NÃO SE LIMITANDO A
              GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UMA FINALIDADE
              ESPECÍFICA E NÃO INFRACÇÃO. EM NENHUM CASO OS AUTORES OU TITULARES
              DOS DIREITOS DE DIREITOS AUTORAIS RESPONSABILIZARÃO POR QUALQUER
              RECLAMAÇÃO, DANOS OU OUTRA RESPONSABILIDADE, SEJA EM AÇÃO DE
              CONTRATO, TORT OU OUTRA FORMA, DECORRENTE DE, FORA DE OU EM
              CONEXÃO COM O SOFTWARE OU O USO OU OUTROS NEGÓCIOS NO PROGRAMAS.
            </AboutTitle>
          </AboutBox>
          <Image src={background} />
        </Container>
      </Content>
    </>
  );
};

export default About;
