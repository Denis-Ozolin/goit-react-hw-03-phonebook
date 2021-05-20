import PropTypes from 'prop-types';
import styles from "./Filter.module.css";


const Filter = ({ value, onChange }) => (
    <>
      <p className={styles.filter__title}>Find contacts by name:</p>
      <input className={styles.filter__input} type="text" value={value} onChange={onChange} />
    </>
  )

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Filter;