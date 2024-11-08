//import React from 'react'
// chapitre pour les evenements et formulaires
import { useState } from "react"



function QuestionForm() {
    const [inputValue, setInputvalue] = useState('Posez votre question ici ?')
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputvalue(value)
        }
    }
  return (
    <div>
        QuestionForm
        <textarea 
        // quand l'utilisateur insere les donnees alors inputvalue les recevrra
            value={inputValue}
            onChange={ (e) => checkValue(e.target.value)}
        />
        <button onClick={()=> alert(inputValue)}>Alertez moi 🚨</button>
    </div>

  )
}

export default QuestionForm