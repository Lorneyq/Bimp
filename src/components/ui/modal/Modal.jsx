import { useEffect } from 'react';
import styles from './Modal.module.scss';

import CloseButton from '../../ui/close-button/CloseButton';

const Modal = ({ closeModal, children, className }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={`${styles.Modal} ${className} dark:bg-dark`}>
      <CloseButton closeModal={closeModal} />
      {children}
    </div>
  );
};

export default Modal;
