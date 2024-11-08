
import {Navigate, Route,Routes} from 'react-router-dom'
import { OnePiceMoviePages } from "../OnePiceMoviePages"
import { PersonPages } from "../PersonPages"
import { CharactersPages } from '../CharactersPages'

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path='/' element ={<OnePiceMoviePages/>}/>
      <Route path='characters/:mal_id' element ={<CharactersPages/>} />
      <Route path='person/:mal_id' element ={<PersonPages/>} />
      {/* <Route path='/' element ={<Navigate to="/movies"/>} /> */}
    </Routes>
    </>
  )
}
