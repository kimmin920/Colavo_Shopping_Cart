import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { DeleteIconGrey } from '../../styles/styledIcons';

type DeleteButtonProps = {
  onClick: MouseEventHandler,
};

export default function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <StyledButton
      onClick={onClick}
    >
      <DeleteIconGrey size={16}/>
    </StyledButton>
  );
}

const StyledButton = styled.div`
  width: fit-content;
  cursor: pointer;
`;
