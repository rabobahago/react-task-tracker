import PropTypes from 'prop-types'
const Button = ({ text, color, onAdd }) => {
  return (
    <div>
      <button
        onClick={onAdd}
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
