import { useState } from 'react';
import BackgroundOverlay from '../ui/overlay/BackgroundOverlay';
import SettingsButton from '../ui/settings-button/SettingsButton';
import SettingsModal from './SettingsModal/SettingsModal';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <SettingsButton openModal={isOpen ? closeModal : openModal} />
      {isOpen && (
        <>
          <SettingsModal closeModal={closeModal} />
          <BackgroundOverlay />
        </>
      )}
    </>
  );
};

export default Settings;
