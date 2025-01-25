import './Glassy.css';

function Glassy({ children, size }) {
  return (
    <div className='glassy-container' >
      <div className='inner-glassy-container' style={{ width: size.width, minHeight: size.height }}>
        {children}
      </div>
    </div>
  )
}

export default Glassy;
