import { t } from 'i18next';
import Modal from '../../ui/modal/Modal';
import BackgroundChange from '../BackgroundChange/BackgroundChange';
import DarkModeChange from '../DarkModeChange/DarkModeChange';
import LanguageChange from '../LanguageChange/LanguageChange';
import MetricChange from '../MetricChange/MetricChange';

import styles from './SettingsModal.module.scss';

const SettingsModal = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal} className={styles.SettingsModal}>
      <LanguageChange />
      <MetricChange />
      <BackgroundChange />
      <DarkModeChange />
      <hr className="dark:bg-gray-50" />
      <h4 className={`${styles.Version} + dark:text-gray-50`}>
        {t('Version')}: 2.0
      </h4>
    </Modal>
  );
};

export default SettingsModal;
