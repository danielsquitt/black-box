import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getFormatDate, getFormatTime } from '../../lib/clock';

const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px 0 20px;
  p{
    margin: 3px 0;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

function Clock() {
  const [date, setDate] = useState({
    date: '',
    time: '',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const d = new Date();
      setDate({
        date: getFormatDate(d),
        time: getFormatTime(d),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ClockWrapper>
      <p>{date.date}</p>
      <p>{date.time}</p>
    </ClockWrapper>
  );
}

export default Clock;
