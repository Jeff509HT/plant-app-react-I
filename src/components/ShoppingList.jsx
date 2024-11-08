// chapitre liste et condition
import PropTypes from 'prop-types'
import {plantList} from '../datas/ShoppingList.js'
import PlantItem from './PlantItem.jsx'
function ShoppingList({cart, updateCart}) {

  return (
    <>
    <ul>
        {plantList.map((plant)=>(
          <div key={plant.id}>
            <PlantItem 
                  id={plant.id}
                  cover={plant.cover}
                  name={plant.name}
                  water={plant.water}
                  light={plant.light}
                  
					      />
                <button onClick={() => updateCart(cart+1)}> Ajouter</button>
          </div>
            
            ))}
    </ul>
    </>
    
  )
}

ShoppingList.propTypes = {
	cart : PropTypes.array,
	updateCart : PropTypes.func,
} 

export default ShoppingList