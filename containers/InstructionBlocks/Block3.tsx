import { CodeSnippet } from 'carbon-components-react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { InstructionItem } from '../../components/InstructionItem';

const Styled = {
  CodeSnippet: styled(CodeSnippet)`
    color: gray;
  `
};

const instructions = [
  `Say we now want to also fetch and display all of a users posts. On the initial page load, only the five latest posts should be loaded.`,
  'Create a button that will fetch the next sequential batch of 5 posts when clicked.',
  'Ideally, the majority of this logic should live within a custom hook called useFetchPosts.',
  'Use the following endpoint structure: ',
  '(Bonus) Come up with a caching strategy for the posts'
];

const endpoint = `
endpoint: https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca/post?limit=5

pagination query params example: https://dummyapi.io/data/v1/user?page=1&limit=10
Take 10 elements on a second page(page number starts from zero). Return items from 11 to 20 in a default order.
`;

export const Block3 = () => {
  return (
    <>
      <InstructionItem number={1} instruction={instructions[0]} />
      <InstructionItem number={2} instruction={instructions[1]} />
      <InstructionItem number={3} instruction={instructions[2]} />
      <InstructionItem number={4} instruction={instructions[3]} />
      <InstructionItem number={5} instruction={instructions[4]} />
      <Styled.CodeSnippet hideCopyButton>{endpoint}</Styled.CodeSnippet>
    </>
  );
};
