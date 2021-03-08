import React, {useEffect} from 'react'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const CardCarousel = () => {

    useEffect(() => {

        
    })

    return (
        <div className='FeaturedEvent'>
            <Carousel
                plugins={[
                'infinite',
                {
                resolve: autoplayPlugin,
                options: {
                    interval: 500,
                }
                },
            ]}   
            animationSpeed={200}
            >
            <div>sdsadsa</div>
            <div>dsadsadax</div>
            {/* <img src={imageThree} /> */}
            </Carousel>
        </div>
    )
}

export default CardCarousel