import { StyledFooter } from './FooterStyles.js';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <h1>Management</h1>
        <div>
          <Link>Manage</Link>
          <Link to={'/upload'}>Upload</Link>
          <Link>File Control</Link>
          <Link>Change Password</Link>
        </div>
      </div>
    </StyledFooter>
  );
}
