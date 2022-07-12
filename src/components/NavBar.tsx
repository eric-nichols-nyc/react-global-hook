import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useStore } from '../hooks-store/store';

function NavBar() {
  console.log('NAV RENDERED')
  const { globalState } = useStore();
  const { cart } = globalState;

  useEffect(() => {
    console.log(globalState.cart)
  }, [globalState.cart])

  return (
    <div className="navbar">
      <div className="icon">
        <span>{cart.length}</span>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  )
}

export default NavBar