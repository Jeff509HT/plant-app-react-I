// chapitre sur les evennements et les props
import PropTypes from 'prop-types'
import '../styles/PlantItem.css'
import CareScale from './CareScale'

// fonction pour l'evennement
function handleClick(plantName) {
  console.log('✨ Ceci est un clic ✨')
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

function PlantItem({name, cover,id,light,water}) {
  return (
    <li key={id} className='lmj-plant-item' onClick={()=>handleClick(name)}>
        <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}  />
        {name}
        <CareScale careType='water' scaleValue={water} />
        <CareScale careType='light' scaleValue={light} />
    </li>
  )
}

PlantItem.propTypes ={
    name : PropTypes.string,
    cover : PropTypes.string,
    id : PropTypes.string,
    light : PropTypes.number,
    water : PropTypes.number,
}
/*
PlantItem.defaultProps = {
  name: 'Nom  par défaut',
}
  */
export default PlantItem