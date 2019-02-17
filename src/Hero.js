import React from 'react';
import { Grid, Paper, Typography, Chip } from '@material-ui/core';
import HoSData from './HoSData';
import Selector from './Selector';

export default function Hero(props) {
	const {onChange} = props;
	const hero = JSON.parse(JSON.stringify(props.hero));
	const data = HoSData[props.slot][hero.hero];
	function change(type, key, value) {
		hero[type][key] = value;
		onChange(hero);
	}
	function calculateStat(stat) {
		var value = data.base[stat] || 0;
		for (var factor in data.factor[stat]) {
			value += data.factor[stat][factor] * (hero.att[factor] || hero[factor]);
		}
		return value;
	}
	const calcVal = HoSData.calcVal.bind(null, hero);
	function remain(type) {
		let total = 0;
		for (let i = 0; i <= hero.Level; i++) total += data.levels[type][i];
		for (let key in data.base[type]) total -= hero[type][key] - data.base[type][key];
		return total;
	}
	const ratt = remain('att');
	const rskl = remain('skl');
	const rtal = remain('tal');
	return (
		<Grid container spacing={8}>
			<Grid item xs={4}>
				<Paper className="green">
					<Typography variant="h6">{hero.hero}</Typography>
				</Paper>
			</Grid>
			{Object.keys(data.factor).map(stat => 
				<Grid item xs={4} key={stat}>
					<Paper className="blue pill">
						<strong>
							<Chip className="badge" label={calculateStat(stat)}/>
							{stat}
						</strong>
					</Paper>
				</Grid>
			)}
			<Grid item xs={12}>
				<Typography variant="h6">Attributes <small>({ratt} remain)</small></Typography>
			</Grid>
			{Object.keys(hero.att).map(attribute => 
				<Grid item xs={4} key={attribute}>
					<Selector title={attribute} value={hero.att[attribute]} min={data.base.att[attribute]} max={16} remain={ratt} onChange={v => change('att', attribute, v)}/>
				</Grid>
			)}
			<Grid item xs={12}>
				<Typography variant="h6">Skills <small>({rskl} remain)</small></Typography>
			</Grid>
			{Object.keys(hero.skl).map(skill => 
				<Grid item xs={4} key={skill}>
					<Selector title={skill} value={hero.skl[skill]} min={data.base.skl[skill]} max={16} remain={rskl} onChange={v => change('skl', skill, v)}/>
				</Grid>
			)}
			<Grid item xs={12}>
				<Typography variant="h6">Talents <small>({rtal} remain)</small></Typography>
			</Grid>
			<Grid item xs={12}>
				{Object.keys(hero.tal).map(talent => 
					<Grid container spacing={8} alignItems="center" style={{opacity: hero.tal[talent] ? 1 : 0.3}} key={talent}>
						<Grid item xs={4}>
							<Selector title={talent} value={hero.tal[talent]} min={data.base.tal[talent]} max={hero.Level >= data.talents[talent].level ? 10 : 0} remain={rtal} onChange={v => change('tal', talent, v)}/>
							<div style={{textAlign:'center',fontSize:12}}>{data.talents[talent].type}</div>
						</Grid>
						{['cost', 'attack', 'heal', 'security', 'self', 'buff', 'curse', 'info'].map(type => data.talents[talent][type] &&
							<Grid item xs={type === 'cost' ? 2 : true} key={type}>
								<Paper className={`${type} card`}>
									<Typography>
										{Object.keys(data.talents[talent][type]).map(key => {
											const val = calcVal(talent, type, key);
											if (val === 0 && hero.tal[talent] > 0) return;
											return <span key={key}>{key}: <span className="value">{val}</span><br/></span>;
										})}
									</Typography>
								</Paper>
							</Grid>
						)}
					</Grid>
				)}
			</Grid>
		</Grid>
	);
}