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
  Container 
} from '@material-ui/core'; 

import { PhotoCamera } from '@material-ui/icons';

function App() {
  return (
   <>
    <CssBaseline/>
    <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera/>
        <Typography variant='h6'>
          PhotoAlbum
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
            PhotoAlbum
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
            hello everyon this is a phot album, imtrying to make this sentetnace as long as possible so we cans eee how it wokrs
          </Typography>
        </Container>
      </div>
    </main>
   </>
        
    
  );
}

export default App;

