import styles from './TableInfo.module.scss';

import { t } from 'i18next';

import MetricUtils from '../../../../utils/MetricUtils';

const TableInfo = props => {
  const { minTemperature, maxTemperature, feelTemperature, pressure } = props;

  const { degrees } = MetricUtils();

  return (
    <div className={`${styles.TableInfo} dark:bg-clear-black`}>
      <table>
        <tbody>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>{t('Min. temperature')}:</td>
            <td className={styles.tableCell}>
              {minTemperature}
              {degrees}
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>{t('Max. temperature')}:</td>
            <td className={styles.tableCell}>
              {maxTemperature}
              {degrees}
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>{t('Feels like')}:</td>
            <td className={styles.tableCell}>
              {feelTemperature}
              {degrees}
            </td>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.tableCell}>{t('Pressure')}:</td>
            <td className={styles.tableCell}>
              {pressure}
              {t('mbar')}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
