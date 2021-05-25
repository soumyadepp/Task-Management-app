import PropTypes from 'prop-types'
import Button from './button';

const Header = ({ title, onAdd }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text="Add" color="green"
                onClick={onAdd} />
        </header >
    )
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string,
}
export default Header
