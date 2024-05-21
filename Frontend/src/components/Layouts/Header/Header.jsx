import { Link, useNavigate } from 'react-router-dom';

import { StyledHeader, StyledLogo, StyledLock } from './HeaderStyles.js';
import { colors } from '@/styles/contants.js';

import Donut from '@/assets/Donut.webp';
import LockSvg from '@/components/svgs/LockSvg.jsx';
import SearchBar from '@/components/SearchBar/SearchBar.jsx';

export default function Header() {
  const navigate = useNavigate();

  const LockClickHandler = () => {
    localStorage.setItem('lastURL', window.location.pathname);
    localStorage.setItem('isLock', true);
    navigate('/lock');
  };
  return (
    <>
      <StyledHeader>
        <StyledLogo>
          <Link to={'/'}>
            <img src={Donut} alt='logo' />
            <h1>{'Characterist'}</h1>
          </Link>
        </StyledLogo>
        <SearchBar />
        <StyledLock>
          <button onClick={LockClickHandler}>
            <div>
              <LockSvg color={colors.baseColor3} width={15} height={15} />
            </div>
          </button>
        </StyledLock>
      </StyledHeader>
    </>
  );
}
