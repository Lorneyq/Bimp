import { Switch } from '@headlessui/react';

import styles from './Toggle.module.scss';

const Toggle = ({
  checked,
  onChange,
  checkName,
  uncheckName,
  title,
  isCenter,
  className,
}) => {
  return (
    <div>
      <h2 className={styles.Title}>{title}</h2>
      <div
        className={`flex ${
          isCenter ? 'justify-center' : ''
        } ${className} items-center`}
      >
        <span className={styles.ToggleName}>{uncheckName}</span>
        <Switch checked={checked} onChange={onChange} className={styles.Toggle}>
          <span
            className={`${
              checked
                ? 'translate-x-[26px] mobile-s:translate-x-[36px] tablet-s:translate-x-[46px]'
                : 'translate-x-1 mobile-s:translate-x-2 tablet-s:translate-x-2'
            } dark:bg-dark`}
          />
        </Switch>
        <span className={styles.ToggleName}>{checkName}</span>
      </div>
    </div>
  );
};

export default Toggle;
