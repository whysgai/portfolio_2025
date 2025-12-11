import React, { useState } from 'react';
import logo from './assets/logo.svg';
import Header from './components/Header'
import Portfolio from './components/Portfolio/Portfolio'
import './styles/App.css';
import { View } from './utilities/Enums';

const [view, setView] = useState(View.Portfolio); 

function changeView(newView: View) {
	setView(newView);
};

function App() {
	return (
		<div className="App">
		<Header changeView={changeView} />
		{
			view === View.Portfolio ?
				<Portfolio/>
				:
				view === View.Experience ?
					<Portfolio/>
					:
					view === View.About ?
						<Portfolio/>
						:
						<p>Error: Unknown view type</p>
		}
		
		</div>
	);
}

export default App;
