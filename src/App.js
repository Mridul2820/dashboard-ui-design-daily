import React from 'react'
import Cards from './components/Cards'
import Main from './components/Main'
import NavBar from './components/NavBar'
import GlobalStyles from './GlobalStyles/GlobalStyles'

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <NavBar />
            <Main />
            <Cards />
        </div>
    )
}

export default App
