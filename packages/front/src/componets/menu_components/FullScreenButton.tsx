import React, { useState, useEffect } from 'react';
import { BsArrowsFullscreen, BsFullscreenExit } from 'react-icons/bs';
import styled from 'styled-components';

const FullScreenEnter = styled(BsArrowsFullscreen)`
  display: inline-block;
  height: 25px;
  width: 25px;
  margin: 10px 20px;
  color: white;
  flex-shrink: 0;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: #c5c5c5;
  }
`;

const FullScreenExit = styled(BsFullscreenExit)`
  display: inline-block;
  height: 30px;
  width: 30px;
  margin: 10px 20px;
  color: white;
  flex-shrink: 0;
  transition: color 0.1s ease-in-out;
  &:hover {
    color: #c5c5c5;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function FullScreenButton() {
  const [state, setState] = useState(false);
  const onclick = () => {
    if (state) {
      window.document.exitFullscreen();
    } else {
      window.document.documentElement.requestFullscreen();
    }
  };

  useEffect(() => {
    const handleChange = () => {
      setState(window.document.fullscreenElement !== null);
    };
    document.addEventListener('fullscreenchange', handleChange);
    return () => document.removeEventListener('fullscreenchange', handleChange);
  }, [state]);

  return (
    <ButtonWrapper>
      {state ? (
        <FullScreenExit onClick={() => onclick()} />
      ) : (
        <FullScreenEnter onClick={() => onclick()} />
      )}
    </ButtonWrapper>
  );
}

export default FullScreenButton;
