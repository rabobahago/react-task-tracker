import PropTypes from 'prop-types'
const Button = ({ text, color, handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        style={{ backgroundColor: color }}
        className="btn"
      >
        {text}
      </button>
    </div>
  )
}
Button.defaultProps = {
  color: 'steelblue',
}
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
}
export default Button
