// import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

	const [searchField, setSearchField] = useState(''); // [Value, setValue]
	const[monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	console.log('rendered here');

	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((users) => setMonsters(users)
		);
	},[]);
	
	useEffect(()=>{
		const newFilteredMonsters = monsters.filter( (monster)=> {
			return monster.name.toLowerCase().includes(searchField);
		});
		
		setFilteredMonsters(newFilteredMonsters);
	},[monsters,searchField]);

	const onSearchChange = (event) => {

				const searchFieldString = event.target.value.toLowerCase(); 
				setSearchField(searchFieldString);
	};

	return(
		<div className="App">
			<h1 className='app-title'>Nekooooo Dex</h1>
			<SearchBox className='monsters-search-box' onChangeHandler = {onSearchChange} placeholder = 'Search Nekooooo' />
			<br />
			<CardList monsters={filteredMonsters}/>
        </div>
	)
}

export default App;
