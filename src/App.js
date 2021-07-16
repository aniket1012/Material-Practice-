import React from 'react'
import { 
  Typography,
  AppBar, 
  Card, 
  CardActions, 
  CardContent, 
  ardMedia, 
  CssBaseline,
  Grid, 
  Toolbar, 
  Container,
  Button 
} from '@material-ui/core'; 

import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';



function App() {

  const classes = useStyles()

  return (
   <>
    <CssBaseline/>
    <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera className={classes.icon}/>
        <Typography variant='h6'>
          PhotoAlbum
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.container}>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            PhotoAlbum
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            hello everyon this is a phot album, imtrying to make this sentetnace as long as possible so we cans eee how it wokrs
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button variant='contained' color='primary'>
                  See my photos
                </Button> 
              </Grid>
              <Grid item>
                <Button variant='contained' color='primary'>
                  Secondary Action 
                </Button> 
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      
    </main>
   </>
        
    
  );
}

export default App;

