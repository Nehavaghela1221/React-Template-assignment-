import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const images = [
  {
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/s/l/u/-original-imagzj6h9yp9zh2f.jpeg?q=70',
    title: 'Breakfast',
    width: '10%',
  },
  {
    url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/xif0q/shoe/l/v/w/-bg-enhanced-original-imagmdbwrthkchxg.jpeg?q=70&crop=true',
    title: 'Breakfast',
    width: '10%',
  },
  
  {
    url: 'https://rukminim2.flixcart.com/image/832/832/xif0q/sunglass/n/q/g/l-pv-223p-94-41014-provogue-original-imags6ffhgfdmngq.jpeg?q=70&crop=false',
    title: 'Burgers',
    width: '10%',
  },
  {
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/dress/k/9/l/m-ulss19dr09-05-796-uptownie-lite-original-imagssh7m8hxufrg.jpeg?q=70',
    title: 'Camera',
    width: '10%',
  },
  {
    url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/suitcase/w/4/2/22-trolley-1-trolley-01-cabin-check-in-set-sapna-40-20-original-imagtvgwykrfw8me.jpeg?q=70',
    title: 'Camera',
    width: '10%',
  },{
    url: 'https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100',
    title: 'Camera',
    width: '10%',
  },

  {
    url: 'https://rukminim2.flixcart.com/image/612/612/kk5rgy80/shoe-rack/u/b/w/metal-5-layer-maroon-shoe-shoe-caxon-maroon-original-imafzkfnddhgbg46.jpeg?q=70',
    title: 'Camera',
    width: '10%',
  },
  {
    url: 'https://rukminim2.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70',
    title: 'Camera',
    width: '10%',
  },
  {
    url: 'https://rukminim2.flixcart.com/image/416/416/kpk3csw0/regionalbooks/o/v/p/think-like-a-monk-paperback-ikigaiii-hardcover-combo-set-original-imag3rm6zjkdzhcm.jpeg?q=70&crop=false',
    title: 'Camera',
    width: '10%',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <Box sx={{ display: 'flex',justifyContent:'space-evenly',marginTop:'20px', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
