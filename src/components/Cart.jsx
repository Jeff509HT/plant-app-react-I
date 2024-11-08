// chapitre useState et useEffect
import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import PropTypes from 'prop-types'
import { plantList } from '../datas/ShoppingList'

function Cart({cart, updateCart}) {
	
	const [isOpen, setIsOpen] = useState(true)
	const total = cart
	useEffect(() => {

        alert(`J'aurai ${total}€ à payer 💸`)
		document.title = 'cart'

    }, [total])
	console.log(cart)
	return  isOpen ?(
		<div className="Lmj-cart">
			<button 
			className='Lmj-cart-toggle-button'
			onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{total > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
					{
						plantList.map((plant)=>(
							<div key={plant.id}> {plant.name} {plant.price}€ x {plant.amount}
							</div>
						)
					)}
					</ul>
					<h3> Total : {total}</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className="Lmj-cart-closed">
			<button 
			className='Lmj-cart-toggle-button'
			onClick={() => setIsOpen(true)}
			>
				Ouvrir le panier
			</button>
		</div>
	)
}
export default Cart


Cart.propTypes = {
	cart : PropTypes.array,
	updateCart : PropTypes.func,
} 

/* 
// chapitre useState

function Cart() {
	const monsteraPrice = 8
	const [cart, updateCart] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	return isOpen ? (
		<div className='lmj-cart'>
			<h2>Panier</h2>
			<ul>
				<li>Monstera : {monsteraPrice}€</li> 
			</ul>
			<button onClick={()=> updateCart(cart +1)}>
				Ajouter
			</button>
			<h3>Total : {monsteraPrice * cart }€</h3>
			<button onClick={()=> updateCart(0)}>
			vider le panier
			</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
            <button className='lmj-cart-toggle-button' 
			onClick={() => setIsOpen(true)}> Ouvrir le Panier
            </button>
        </div>
	)
}
*/