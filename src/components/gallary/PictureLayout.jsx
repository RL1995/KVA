//import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pic1 from '../../..src/../assets/images/A1.jpg' //p0\kva\src\assets\images\A1.jpg
import Pic2 from '../../..src/../assets/images/A2.jpg'
import Pic3 from '../../..src/../assets/images/B1.jpg';
import Pic4 from '../../..src/../assets/images/A2.jpg';
import Pic5 from '../../..src/../assets/images/B1.jpg';
import Pic6 from '../../..src/../assets/images/B2.jpg';
import Pic7 from '../../..src/../assets/images/B3.jpg';
import Pic8 from '../../..src/../assets/images/B4.jpg';
import Pic9 from '../../..src/../assets/images/B5.jpg';
import Pic10 from '../../..src/../assets/images/B6.jpg';
import Pic11 from '../../..src/../assets/images/B7.jpg';
import Pic12 from '../../..src/../assets/images/C1.jpg';
import Pic13 from '../../..src/../assets/images/C2.jpg';
import Pic14 from '../../..src/../assets/images/C3.jpg';
import Pic15 from '../../..src/../assets/images/C4.jpg';
import Pic16 from '../../..src/../assets/images/D1.jpg';
import Pic17 from '../../..src/../assets/images/D2.jpg';
import Pic18 from '../../..src/../assets/images/D3.jpg';
import Pic19 from '../../..src/../assets/images/D4.jpg';
import Pic20 from '../../..src/../assets/images/E1.jpg';
import Pic21 from '../../..src/../assets/images/E2.jpg';
import Box from '@mui/material/Box';


const allPics = [
    {
        img: Pic1,
        title: 'Kitchen',
    },
    {
        img: Pic2,
        title: 'Kitchen',
    },
    {
        img: Pic3,
        title: 'Outside',

    },
    {
        img: Pic4,
        title: 'Outside',

    },
    {
        img: Pic5,
        title: 'Outside',
    },
    {
        img: Pic6,
        title: 'Outside',

    },
    {
        img: Pic7,
        title: 'Kitchen',

    },
    {
        img: Pic8,
        title: 'Kitchen',

    },
    {
        img: Pic9,
        title: 'Kitchen',

    },
    {
        img: Pic10,
        title: 'Kitchen',

    },
    {
        img: Pic11,
        title: 'Kitchen',

    },
    {
        img: Pic12,
        title: 'Kitchen',

    },
    {
        img: Pic13,
        title: 'Kitchen',

    },
    {
        img: Pic14,
        title: 'Kitchen',

    },
    {
        img: Pic15,
        title: 'Kitchen',

    },
    {
        img: Pic16,
        title: 'Kitchen',

    },
    {
        img: Pic17,
        title: 'Kitchen',

    },
    {
        img: Pic18,
        title: 'Kitchen',

    },
    {
        img: Pic19,
        title: 'Kitchen',

    },
    {
        img: Pic20,
        title: 'Kitchen',

    },
    {
        img: Pic21,
        title: 'Kitchen',

    },

]




function PictureLayout() {

    return (
        <Box>
            <ImageList variant="masonry" cols={3} gap={10}>
                {allPics.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={item.img}
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default PictureLayout;