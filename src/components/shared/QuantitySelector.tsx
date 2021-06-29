import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import StyledButton from './Styledbutton';
import { RowContainer } from './RowContainer';

type QuantitySelectorProps = {
  value: number,
  min?: number,
  max?: number,
  onStepUp: MouseEventHandler,
  onStepDown: MouseEventHandler,
};

export default function QuantitySelector({
  value,
  min = 0,
  max = 99,
  onStepUp,
  onStepDown,
}: QuantitySelectorProps): JSX.Element {
  const isValueMin = value <= min;
  const isValueMax = value >= max;

  return (
    <SelectorContainer>
      <StyledButton
        text='-'
        onClick={onStepDown}
        disabled={isValueMin}
      />
      <ValueWrapper>
        {value}
      </ValueWrapper>
      <StyledButton
        text='+'
        onClick={onStepUp}
        disabled={isValueMax}
      />
    </SelectorContainer>
  );
}

const SelectorContainer = styled(RowContainer)`
  & > * {
    width: 2rem;
    height: 100%;
    vertical-align: middle;
    text-align: center;
  }
`;

const ValueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  font-size: .8rem;
  color: ${({ theme }) => theme.black};
  background-color: white;
`;
