// @flow
import React from 'react';
import { Wrapper, Reset } from './GameControls.styles';

type Props = {
  resetBoard: (void) => void,
};

const GameBoardInputs = (props: Props) => {
  return (
    <Wrapper>
      <Reset type="submit" onClick={props.resetBoard}>
        Reset
      </Reset>
    </Wrapper>
  );
};

export default GameBoardInputs;
