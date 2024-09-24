import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Typography, Button } from '@mui/material';
import Card from './../Card/Card';
import './../Section/Section.module.css';
const Section = () => {
    const [albums, setAlbums] = useState([]);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setAlbums(response.data);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchAlbums();
    }, []);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="sectionInnerWrapper" sx ={{backgroundColor : 'black'}}>
            <div className="sectionTop" sx ={{backgroundColor : 'black'}}>
                {/* <Typography variant="h4">Top Albums</Typography>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="outlined"  sx = {{backgroundColor : 'black' , color : 'rgb(25, 218, 35)'}} className="toggleText" onClick={handleToggle}>
                        {expanded ? 'Collapse' : 'Show All'}
                    </Button>
                </div> */}

                
                
            </div>
            {expanded && (
                <Grid container spacing={2} className="showAllWrapper" style={{ marginTop: '20px' }}>
                    {albums.map(album => (
                        <Grid item xs={12} sm={6} md={4} key={album.id}>
                            <Card album={album} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default Section;
