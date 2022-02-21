import Button from "./Button";
import Card from "./Card";
import styles from './Modal.module.css';

const Modal = ({ error, onModalClose }) => {
  const onClose = () => {
    onModalClose();
  }

  return (
    <>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Invalid input</h2>
        </header>
        <div className={styles.content}>
          {error}
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={onClose}>Okay</Button>
        </footer>
      </Card>
    </>
  )
}

export default Modal;