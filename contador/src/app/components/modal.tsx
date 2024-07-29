'use client';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 250px;
  background: rgba(255, 255, 255, 0.5);
`;
const Text = styled.div`


`

export function Modal() {
  return (
    <Container>
      <Conteudo>
        <Text>
            <h1>Contagem regressiva</h1>
            dias, horas , minutos, segundos
        </Text>
      </Conteudo>
    </Container>
  );
}

export default Modal;
