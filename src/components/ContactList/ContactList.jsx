import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from "./ContactList.module.css";


const ContactsList = ({ arr, onClick }) => {
  return (
    <ul className={styles.contacts__list}>
      {arr.map(item => (
        <li className={styles.contacts__item}
          key={item.id = uuidv4()}>{item.name}: {item.number}
            <button className={styles.contacts__btn} type="button" onClick={() => onClick(item.id)}>X</button>
        </li>
      ))}
    </ul >
  )
}

ContactsList.propTypes = {
  arr: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ContactsList;