// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'

const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})

const Trophy = () => {
  const theme = useTheme()
  const imageSrc = theme.palette.mode === 'light' ? 'triangle-light.png' : 'triangle-dark.png'

  return (
    <Card sx={{ position: 'relative' }}>
      <CardContent>
        <Typography variant='h6'>Congratulations Jiri Mikulas 🥳</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Truck Driver of Spring
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          Total Waste Collection 40,000 KilloTon
        </Typography>
        <Button size='small' variant='contained'>
          Watch All Statistics 
        </Button>
        <TriangleImg alt='triangle background' src={`/images/misc/${imageSrc}`} />
        <TrophyImg alt='trophy' src='/images/cards/trophy.png' />
      </CardContent>
    </Card>
  )
}

export default Trophy
