import React from 'react';
import { Card as MUICard, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import './Cart.module.css'; 

const Card = ({ album }) => {
    return (
        <div className="wrapper">
            <MUICard className="card">
                <CardMedia
                    component="img"
                    height="300"
                    image={album.image}
                    alt={album.title}
                    sx={{ objectFit: 'cover' }}
                />
                <div className="banner">
                    <Chip label={`${album.follows} Follows`} className="chip" size="small" />
                </div>
                <CardContent>
                    <div className="titleWrapper">
                        <Typography variant="subtitle2" noWrap>
                            {album.title}
                        </Typography>
                    </div>
                </CardContent>
            </MUICard>
        </div>
    );
};

export default Card;
