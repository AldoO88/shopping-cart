import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useId } from 'react'

const Filters = () => {
  const { filters, setFilters } = useFilters()


  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input 
          type='range' 
          id='price' 
          name='price' 
          min='0' 
          max='1000' 
          onChange={handleChangeMinPrice}  
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select  id='category' onChange={handleChangeCategory }>
          <option value='all'>Todas</option>
          <option value='laptops'>Portatiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}

export default Filters