import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Tabs, Tab } from '@material-ui/core';
import Hero from './Hero';
import Team from './Team';
import HoSData from './HoSData';
import pako from 'pako';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		if (window.location.hash) {
			this.state = JSON.parse(pako.inflate(atob(window.location.hash.replace(/^#/,'')), {to: 'string'}));
		} else {
			this.state = {
				heroes: {
					"Warrior": { hero: "Kincaid" },
					"Mystic": { hero: "Kjartan" },
					"Healer": { hero: "Fyona" },
					"Sneak": { hero: "Selen" }
				},
				level: 17
			};

			for (let slot in this.state.heroes) this.resetHero(slot, this.state.heroes[slot]);
		}
	}

	resetHero(slot, hero) {
		const data = HoSData[slot][hero.hero];
		hero.slot = slot;
		hero.Level = this.state.level;
		hero.att = {};
		for (let a in data.base.att)
			hero.att[a] = data.base.att[a];
		hero.skl = {};
		for (let a in data.base.skl)
			hero.skl[a] = data.base.skl[a];
		hero.tal = {};
		for (let a in data.base.tal)
			hero.tal[a] = data.base.tal[a];
	}

	onChangeSlot(slot, hero) {
		this.setState(state => {
			const heroes = Object.assign({}, state.heroes);
			heroes[slot].hero = hero;
			this.resetHero(slot, heroes[slot]);
			return {heroes};
		}, this.updateHash.bind(this));
	}

	onChangeHero(slot, hero) {
		this.setState(state => {
			const heroes = Object.assign({}, state.heroes);
			heroes[slot] = hero;
			return {heroes};
		}, this.updateHash.bind(this));
	}

	onChangeLevel(level) {
		this.setState(state => {
			const heroes = Object.assign({}, state.heroes);
			for (let slot in heroes) {
				heroes[slot].Level = level;
			}
			return {level, heroes};
		}, this.updateHash.bind(this));
	}

	updateHash() {
		console.log(this.state);
		window.location.hash = btoa(pako.deflate(JSON.stringify(this.state), {to: 'string'}));
	}

	render() {
		const {heroes, level, tab = 'team'} = this.state;
		const slots = Object.keys(heroes);
		const onChangeLevel = this.onChangeLevel.bind(this);
		const onChangeSlot = this.onChangeSlot.bind(this);
		return (
			<div className="app-container">
				<MediaQuery query='(min-width:1600px)'>
				<div className="team-column">
					<Team heroes={heroes} level={level} onTeamLevel={onChangeLevel} onSlot={onChangeSlot}/>
				</div>
				{slots.map(slot => (
					<div key={slot} className="hero-column">
						<Hero slot={slot} hero={heroes[slot]} onChange={hero => this.onChangeHero(slot, hero)}/>
					</div>
				))}
				<div style={{clear:'both'}}></div>
				</MediaQuery>
				<MediaQuery query='(max-width:1599px)'>
					<Tabs value={tab} onChange={(e, tab) => this.setState({tab})}>
						<Tab value='team' label='Team'><Team heroes={heroes}/></Tab>
						{slots.map(slot => (
							<Tab key={slot} value={slot} label={heroes[slot].hero}><Hero hero={heroes[slot]}/></Tab>
						))}
					</Tabs>
					{tab === 'team' && <Team heroes={heroes} level={level} onTeamLevel={onChangeLevel} onSlot={onChangeSlot}/>}
					{tab !== 'team' && <Hero slot={tab} hero={heroes[tab]} onChange={hero => this.onChangeHero(tab, hero)}/>}
				</MediaQuery>
			</div>
		);
	}
}

export default App;
