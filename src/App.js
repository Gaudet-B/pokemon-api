import { useState } from 'react'
import axios from 'axios'


function App() {

  const [state, setState] = useState()
  
  const pokemons = []

  const displayPokemon = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      pokemons.push(arr[i].name)
    }
  }

  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then(response => setState(response.data))
      // .then(displayPokemon(state.results))
      .catch(error => console.log(error))
  }

  if (!state){
    
  } else {displayPokemon(state.results)}

  return (
    <div className="d-flex flex-column mx-5 my-5">
      <button onClick={fetchPokemon} className="btn btn-outline-light" style={{margin: 'auto'}} >Fetch Pokemon</button>
      <br />
      <ul className="text-light">
        {pokemons.map((pokemon, i) => {
          return <li key={i}>{pokemon}</li>
        })
        }
      </ul>
    </div>
  );
}

export default App;
