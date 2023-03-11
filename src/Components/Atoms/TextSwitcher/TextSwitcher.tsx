import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #22292F;
  text-align: center;
`;

const TextSwitcher = () => {
  const texts = ['Cristo + Tecnología', 'Cristo + Tecnología' ,'= Impulso Cristiano'];
  const [currentText, setCurrentText] = useState(texts[0]);
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex+ 1) % texts.length;
      setCurrentText(texts[currentIndex]);
    }, 900);

    return () => clearInterval(interval);
  }, [texts]);

  return <StyledText>{currentText}</StyledText>;
};

export default TextSwitcher;
