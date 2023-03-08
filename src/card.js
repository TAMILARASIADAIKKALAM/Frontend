import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function MediaCard() {
13
 return (
<Card sx={{ maxWidth: 345 }}>
<CardMedia
component="img"
height="140"

image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/EBnda3IIUzAJDMXe9
0eQQqbmJJyyw5uaqPyjJYna8yYStYSTmNCA+agBA+EsBXjrWNR0VxSpiJqlAODLDgubLLU
o1vHdFxb9CHlUqXubGSaJ5DygjhNkonoClKUChbhm+HIqrg6iA8nEpDB/A7o1HR+ozCu938Ij
mTMIp82Ckl+ /rjE3wp5woUA1wVtTHRbthQoZPY2ZeI4UKGhM//2Q=="
alt="green iguana"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="div">
SKCET
</Typography>
<Typography variant="body2" color="text.secondary">
SKCET is one of the finest colleges in South India.It is well known for it's infrastructure,
academics and the placements offered. With Asia's second-largest library, SKCET is well -known
for it's architecture and maintenance.
</Typography>
</CardContent>
<CardActions>
<Button size="small">Share</Button>
<Button size="small">Learn More</Button>
</CardActions>
</Card>
 );
}