import React from 'react';
import { Input, InputAdornment, IconButton, Paper } from '@material-ui/core';
import { ChevronRight, ChevronLeft } from '@material-ui/icons';

export default function Selector(props) {
	let max = props.max;
	if (props.remain !== undefined) max = Math.min(max, props.value + props.remain);
	return (
		<Paper className="selector">
			<strong>{props.title}</strong><br/>
			<Input
				type="number"
				inputProps={{min: props.min, max, step: "1"}}
				value={props.value}
				onChange={e => props.onChange(Math.max(props.min, Math.min(max, +e.target.value)))}
				fullWidth={true}
				startAdornment={
					<InputAdornment position="start">
						<IconButton onClick={e => props.onChange(props.value - 1)} disabled={props.value <= props.min}>
							<ChevronLeft/>
						</IconButton>
					</InputAdornment>
				}
				endAdornment={
					<InputAdornment position="end">
						<IconButton onClick={e => props.onChange(props.value + 1)} disabled={props.value >= max}>
							<ChevronRight/>
						</IconButton>
					</InputAdornment>
				}
			/>
		</Paper>
	);
}