import styled from 'styled-components';
import { colors } from '../styles/contants.js';
import LockSVG from '../components/svgs/LockSvg.jsx';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function LockPage() {
  const navigate = useNavigate();
  const password = '88988';

  const passwordInputHandler = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value === password) {
        console.log('unlock');
        localStorage.setItem('isLock', false);
        navigate(localStorage.getItem('lastURL'));
      } else {
        e.target.value = '';
        console.log('wrong password');
      }
    }
  };

  return (
    <>
      <StyledBackground>
        <LockSVG color={colors.baseColor3} width={100} height={100} />
        88988
        <input
          type='password'
          onKeyDown={(e) => {
            passwordInputHandler(e);
          }}
        />
      </StyledBackground>
    </>
  );
}

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.baseColor1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    font-size: 70px;
    font-weight: bold;
    color: ${colors.baseColor3};
  }

  input {
    width: 300px;
    height: 40px;
    margin-top: 30px;
    background: ${colors.baseColor2};
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 50px;
    text-align: center;
  }
`;
