import styles from './Notification.module.scss';

const Notification = ({ message }) => (
  <h2 className={styles.message}>{message}</h2>
);

export default Notification;
