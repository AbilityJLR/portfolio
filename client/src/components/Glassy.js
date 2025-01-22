import './Glassy.css';

function Glassy({ children }) {
  return (
    <div className='glassy-container'>
      <div className='inner-glassy-container'>
        <div className='title'>
          {children.props.title}
        </div>
        <div className='content'>
          {children.props.children}
        </div>
      </div>
    </div>
  )
}

export default Glassy;
