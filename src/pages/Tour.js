import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage'
import CustomizedAccordions from '../components/Accordion';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';

const Tour = () => <Container sx={{width: 900 }}>
  <Typography variant='h3' component='h1' marginTop={3}>
    Explore the world!
  </Typography>
  <Box marginTop={3} sx={{display: 'flex'}}>
    <img src='https://lp-cms-production.imgix.net/2021-12/shutterstockRF_173501879.jpg?auto=format&ar=16%3A9&q=40&w=1920&h=1080&dpr=1' alt='' width={480} />
    <ImageCollage />
  </Box>
  <Box>
    <Typography variant='h6' component='h4' marginTop={3}>
      About this ticket
    </Typography>
    <Typography variant='paragraph' component='p' marginTop={2}>
      lorem ipsum que nunca sirvio para ponerlo en automatico aqui en el html o css tengo que checar por que rayos no sirvio buuuu ./ buu that mana fdqwpoirhniowebntfikuwebnfgioewn
    </Typography>
  </Box>
  <Box marginBottom={10}>
    <Typography variant='h6' component='h4' marginTop={4} marginBottom={2}>
      Frequently asks questions
    </Typography>
    <CustomizedAccordions />
  </Box>
  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation >
      <BasicModal />
    </BottomNavigation>
  </Paper>
</Container>

export default Tour;