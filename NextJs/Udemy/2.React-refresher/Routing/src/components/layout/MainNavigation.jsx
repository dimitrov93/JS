import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritesContext from '../../store/favorites-context'
import css from './MainNavigation.module.css'


const MainNavigation = () => {
  const favCtx = useContext(FavoritesContext)
  return (
    <header className={css.header}>
        <div className={css.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                <Link to='/'>All meetups</Link>
                </li>
                <li>
                <Link to='/new-meetup'>Add new meetup</Link>
                </li>
                <li>
                <Link to='/favorites'>Favorites 
                <span className='badge'> {favCtx.totalFavorites}</span></Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation