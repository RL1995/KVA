//import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Pic1 from '../../../public/images/Kitchen.jpg'
import Pic2 from '../../../public/images/Laundry.jpg'
import Pic3 from '../../../public/images/A1.jpg';
import Pic4 from '../../../public/images/A2.jpg';
import Pic5 from '../../../public/images/B1.jpg';
import Pic6 from '../../../public/images/B2.jpg';
import Pic7 from '../../../public/images/B3.jpg';
import Pic8 from '../../../public/images/B4.jpg';
import Pic9 from '../../../public/images/B5.jpg';
import Pic10 from '../../../public/images/B6.jpg';
import Pic11 from '../../../public/images/B7.jpg';
import Pic12 from '../../../public/images/C1.jpg';
import Pic13 from '../../../public/images/C2.jpg';
import Pic14 from '../../../public/images/C3.jpg';
import Pic15 from '../../../public/images/C4.jpg';
import Pic16 from '../../../public/images/D1.jpg';
import Pic17 from '../../../public/images/D2.jpg';
import Pic18 from '../../../public/images/D3.jpg';
import Pic19 from '../../../public/images/D4.jpg';
import Pic20 from '../../../public/images/E1.jpg';
import Pic21 from '../../../public/images/E2.jpg';
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