import PropTypes from 'prop-types';
const Button = ({text, onClick, color})=>{
    return(

          <button 
            className='btn' 
            onClick={onClick}
            style={{color}}
            >
          {text}
          </button>
    );
}

Button.defaultProps = {
    color: 'steelblue',
  }

Button.propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string
}

export default Button;