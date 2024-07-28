import { useCart } from '../hooks/useCart';
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export const Footer = ( ) => {
  const { filters } = useFilters()
  const { cart } = useCart()
  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ - <span>Ing. Aldo González</span></h4>
      <h5>Shooping Cart whit useContext and useReducer</h5>
    </footer>
  )
   
}