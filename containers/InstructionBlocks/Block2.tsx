import { CodeSnippet } from 'carbon-components-react';
import styled from 'styled-components';
import { InstructionItem } from '../../components/InstructionItem';

const Styled = {
  CodeSnippet: styled(CodeSnippet)`
    color: gray;
  `
};

const instructions = [
  '(Discuss) What are some pros/cons to the approach you took for the profile page?',
  'Given a list of 5 unique user IDs, modify the profile page in such a way that performing the following actions result in 5 total API calls:'
];

const actions = `
  1. Navigate to /user/1
  2. Refresh
  3. Refresh
  4. Refresh
  5. Refresh

  6. Navigate to /user/2
  7. Refresh x4

  8. Navigate to /user/3
  9. Refresh x4

  10. Navigate to /user/4
  11. Refresh x4

  12. Navigate to /user/5
  13. Refresh x4
`;

export const Block2 = () => {
  return (
    <>
      <InstructionItem number={1} instruction={instructions[0]} />
      <InstructionItem number={2} instruction={instructions[1]} />
      <Styled.CodeSnippet hideCopyButton>{actions}</Styled.CodeSnippet>
    </>
  );
};
