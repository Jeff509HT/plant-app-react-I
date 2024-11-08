// chapitre props 
// on importe PropTypes
import PropTypes from "prop-types"

const quantityLabel = {
	1: 'peu',
	2: 'modérément',
	3: 'beaucoup'
}

function CareScale({scaleValue, careType}) {
    //const { careType} = props
    // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    // const scaleValue = props.scaleValue et
    // const careType = props.careType
    const range = [1,2,3]

    const scaleType = careType === 'light' ? '☀️' : '💧'
    return (
        <div onClick={() =>
            alert(
                `Cette plante requiert ${quantityLabel[scaleValue]} ${
                    careType === 'light' ? 'de lumière' : "d'arrosage"
                }`
            )
        }>
            {range.map((rangeElem) => 
            scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )

}

CareScale.proptypes = {
    scaleValue : PropTypes.number,
    careType : PropTypes.string,
}
export default CareScale