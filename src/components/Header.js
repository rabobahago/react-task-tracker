import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
  const handleClick = (e) => {
    console.log(e)
  }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button handleClick={handleClick} color="green" text="Add" />
    </header>
  )
}
Header.defaultProps = {
  title: 'Task Tracker',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header