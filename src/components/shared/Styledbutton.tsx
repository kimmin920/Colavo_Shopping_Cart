import { MouseEventHandler } from 'react';
import styled from 'styled-components';

type StyledButtonProps = {
  onClick: MouseEventHandler,
  text: string,
  disabled?: boolean,
};

export default function Styledbutton({
  text,
  disabled = false,
  onClick,
}: StyledButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 100%;
  border: none;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer' };
`;
