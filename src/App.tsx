import React, { useState } from 'react';
import logo from './assets/logo.svg';
import Header from './components/Header'
import Portfolio from './components/Portfolio/Portfolio'
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import './styles/App.css';
import { View } from './utilities/Enums';
import Footer from './components/Footer';



function App() {
    const [view, setView] = useState(View.Portfolio); 

    function changeView(newView: View) {
        console.log("Change view to: ", newView);
        setView(newView);
    };
    return (
        <div className="App">
            <Header changeView={changeView} />
            {
                view === View.Portfolio ?
                    <Portfolio/>
                    :
                    view === View.Experience ?
                        <Experience/>
                        :
                        view === View.About ?
                            <About/>
                            :
                            <p>Error: Unknown view type</p>
            }
            <Footer/>      
        </div>
    );
}

export default App;
