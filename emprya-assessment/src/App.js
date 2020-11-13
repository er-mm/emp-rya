import React, {useEffect, useState} from 'react';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 600,
        height: 250,
        backgroundColor: "#ededed"
    },
    link: {
        textDecoration: 'none'
    }
}))

function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
    .then(res => res.json())
    .then(data => setData(data.results));
  },[])
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row" spacing={4}>
        {
            data.map((planet, index) => (
                <Grid item key={planet.name+index}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h3">Name : {planet.name}</Typography>
                                <Typography variant="h4">Population : {planet.population}</Typography>
                                <Typography variant="h4">Films</Typography>
                                {
                                  planet.films.map((film,index) => (
                                    
                                      <Typography variant="h4">{film}</Typography>
                                  ))
                                }
                            </CardContent>
                        </Card>
                </Grid>
            ))
        }
        </Grid>
      
    </ThemeProvider>
  );
}

export default App;
