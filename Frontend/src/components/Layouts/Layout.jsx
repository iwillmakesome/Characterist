import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// styles
import { StyledLayout, StyledMain } from './LayoutStyles.js';

// components
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';

export default function Layout() {
  const navigate = useNavigate();
  const [isLock, setIsLock] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('isLock') === 'true') {
      setIsLock(true);
      navigate('/lock');
    } else {
      setIsLock(false);
    }
  }, []);

  return (
    <>
      <StyledLayout>
        <Header />
        <StyledMain>{!isLock && <Outlet />}</StyledMain>
        <Footer />
      </StyledLayout>
    </>
  );
}
