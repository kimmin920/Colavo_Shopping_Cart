import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { DeleteIconGrey } from '../../styles/styledIcons';

type DeleteButtonProps = {
  onClick: MouseEventHandler,
};

export default function DeleteButton({
  onClick,
}: DeleteButtonProps): JSX.Element {
  return (
    <StyledButton
      onClick={onClick}
    >
      <DeleteIconGrey size={16}/>
    </StyledButton>
  );
}

const StyledButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  margin-left: .5rem;
`;
