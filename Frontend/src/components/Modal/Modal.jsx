// styles
import { StyledModal } from '@/components/Modal/ModalStyles.js';

// components
import { FaXmarkSvg } from '@/components/svgs/FontAwesome6.jsx';

export default function Modal({ children, modalTitle, modalClose }) {
  return (
    <StyledModal>
      <div>
        <div>
          <h5>{modalTitle}</h5>
          <button onClick={modalClose}>
            <FaXmarkSvg color={'white'} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </StyledModal>
  );
}
