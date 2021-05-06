import styles from './Section.module.scss';

const Section = ({ title, children }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    {children}
  </>
);

export default Section;
