import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AccessTime } from '@mui/icons-material';
import Rating from '@mui/material/Rating';


const TourCard = () => {
  return (
  <Grid item xs={3}>
    <Paper elevation={3}>
      <img src='https://www.visafirst.com/blog/wp-content/uploads/2021/07/pyramids-of-Giza-in-Egypt.jpg' 
      alt=''
      className='img'
      />
      <Box paddingX={1}>
        <Typography variant="subtitle1" component="h2">
          Magic egypt!
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <AccessTime sx={{ width: 12.5 }} />
          <Typography variant='body2' component='p' marginLeft={0.5}>
            5 hours
          </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center'}} marginTop={3}>
          <Rating 
          name="read-only" 
          value={4.5} 
          precision={0.5} 
          size='small' 
          readOnly 
          />
          <Typography variant='body2' component='p' marginLeft={0.5}>
            4.5 
          </Typography>
          <Typography variant='body2' component='p' marginLeft={0.5}>
            (655 reviews) 
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6' component='h3' marginTop={0}>
            From C $147 
          </Typography>
        </Box>
      </Box>
    </Paper>
  </Grid>
  );
};

export default TourCard;