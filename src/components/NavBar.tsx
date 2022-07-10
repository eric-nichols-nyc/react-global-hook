import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useStore } from '../hooks-store/store';

function NavBar() {
  const { globalState } = useStore();
  useEffect(() => {
    console.log(globalState)
  }, [globalState])

  return (
    <div className="navbar">
      <div className="icon">
        <span>{globalState.cart.length}</span>
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </div>
  )
}

export default NavBar