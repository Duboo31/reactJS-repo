import PropTypes from "prop-types"
import styles from "./style/Button.module.css";

const Button = ({text}) => {
  return (
    <div>
      <button className={styles.boom}>{text}</button>
      <button className={styles.power}>{text}</button>
    </div>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;