import { ReactElement } from 'react';
import styled from 'styled-components';

const Styled = {
  Instruction: styled.p`
    margin: 0;
    padding: 0;
    font-size: 18px;
    color: var(--text-color);
  `
};

type InstructionItemProps = {
  number: number;
  instruction: string;
};

export const InstructionItem = ({ number, instruction }: InstructionItemProps): ReactElement => {
  return <Styled.Instruction>{`${number}. ${instruction}`}</Styled.Instruction>;
};
