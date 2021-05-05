import styled from 'styled-components';

const Button = styled.button`
  padding: 1em;
  position: absolute;
  top: 1em;
  right: 1em;
  border-radius: 1em;
  @media print {
    display: none;
  }
`;

const PrintButton = () => {
  return (
    <Button
      onClick={() => window.print()}
    >
      Print
    </Button>
  );
}

export default PrintButton;
