import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyle from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = () => {
    const classes = useStyle();
    const [type, setType] = useState('restaurants');
    const [ratting, setRatting] = useState('');
    const places = [
        { name: 'Cool Place' },
        { name: 'Best Beer' },
        { name: 'Best Steak' },
        { name: 'Cool Place' },
        { name: 'Best Beer' },
        { name: 'Best Steak' },
    ]
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants,Hotel & Attractions around you</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants">Restaurants</MenuItem>
                    <MenuItem value="hotel">Hotel</MenuItem>
                    <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Ratting</InputLabel>
                <Select value={ratting} onChange={(e) => setRatting(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}
export default List