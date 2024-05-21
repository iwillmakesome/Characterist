import Modal from '@/components/Modal/Modal.jsx';
import { StyledAddCharacter } from './CharacterModalStyles.js';
import BMO from '@public/bmo.png';

export default function characterModal({ setIsModalOpen }) {
  return (
    <Modal
      modalTitle={'Character Modal'}
      modalClose={() => {
        setIsModalOpen(false);
      }}
    >
      <StyledAddCharacter>
        <h2>Character Name</h2>
        <input />
        <h2>Select Character Image</h2>
        <input />
        <button>Add Character</button>
      </StyledAddCharacter>
    </Modal>
  );
}
