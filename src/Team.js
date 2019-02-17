import React from 'react';
import HoSData from './HoSData';
import { Grid, Select, MenuItem, Typography, Paper } from '@material-ui/core';
import Selector from './Selector';

export default function Team(props) {
	const { heroes, level, onTeamLevel, onSlot } = props;
	const slots = Object.keys(heroes);
	const buffs = {'Curses': {}, 'Team Buffs': {}};
	for (let slot of slots) {
		buffs['Team Buffs'] = calculateStats(slot, buffs['Team Buffs'], 'buff');
	}
	for (let slot of slots) {
		buffs[heroes[slot].hero] = calculateStats(slot, buffs['Team Buffs'], 'self');
	}
	for (let slot of slots) {
		buffs.Curses = calculateStats(slot, buffs.Curses, 'curse');
	}
	function calculateStats(slot, init, type) {
		let buff = Object.assign({}, init);
		let talents = HoSData[slot][heroes[slot].hero].talents;
		let hero = heroes[slot];
		for (let t in talents) {
			let talent = talents[t];
			if (talent[type]) {
				for (let stat in talent[type]) {
					let val = HoSData.calcVal(hero, t, type, stat);
					if (val === 0) continue;
					if (!buff[stat]) buff[stat] = 0;
					buff[stat] += val;
				}
			}
		}
		return buff;
	}
	return (
		<Grid container spacing={8}>
			{slots.map(slot => (
				<Grid item xs={3} key={slot}>
					<Typography variant="h6">{slot}</Typography>
				</Grid>
			))}
			{slots.map(slot => (
				<Grid item xs={3} key={slot}>
					<Select value={heroes[slot].hero} fullWidth={true} onChange={e => onSlot(slot, e.target.value)}>
						{Object.keys(HoSData[slot]).map(name =>
							<MenuItem key={name} value={name}>{name}</MenuItem>
						)}
					</Select>
				</Grid>
			))}
			<Grid item xs={6}>
				<Typography variant="h6">Team Level</Typography>
			</Grid>
			<Grid item xs={6}>
				<Selector value={level} min="1" max="64" onChange={onTeamLevel} />
			</Grid>
			<Grid item xs={12}>
				{Object.keys(buffs).map(slot =>
					<Grid container spacing={8} key={slot}>
						<Grid item xs={12}>
							<Typography variant="h6">{slot}</Typography>
						</Grid>
						{Object.keys(buffs[slot]).map(stat =>
							<Grid item xs={3} key={stat}>
								<Paper className={`${{'Curses': 'curse', 'Team Buffs': 'buff'}[slot] || 'self'} card`}>
									<Typography>
										<span dangerouslySetInnerHTML={{__html: stat}}/>:&nbsp;
										<span className="value">{buffs[slot][stat]}</span>
									</Typography>
								</Paper>
							</Grid>
						)}
					</Grid>
				)}
			</Grid>
		</Grid>);
}