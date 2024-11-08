import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')
    function checkFooter (value){
        if(!value.includes('@')){
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
            setInputValue('')
        }
        setInputValue(value)

    }
	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={ (e) => checkFooter(e.target.value)}
            />
		</footer>
	)
}

export default Footer