import logo from './assets/react.svg'

function Header() {
  return (
    <div className='py-3 px-2' style={{ background: 'white' }}>
        <img 
            src={logo} alt="React logo"
            style={{ height: '40px', verticalAlign: 'top' }}
        />
        <span className='h1 pt-4 m-2'>React Counter</span>
    </div>
  )
}

export default Header