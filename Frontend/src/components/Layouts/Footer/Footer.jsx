import { StyledFooter } from './FooterStyles.js';
import { Link } from 'react-router-dom';
import Title from '../../Title.jsx';

export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <h2>Upload</h2>
        <div>
          <Link to={'/upload'}>Upload Scene</Link>
          <Link to={'/add_character'}>Add Character</Link>
          <Link to={'/add_media'}>Add Media Content</Link>
        </div>

        <h2>Context</h2>
        <div>
          <h4>010-11234-5678</h4>
          <h4>12345@gmail.com</h4>
        </div>
      </div>
    </StyledFooter>
  );
}
