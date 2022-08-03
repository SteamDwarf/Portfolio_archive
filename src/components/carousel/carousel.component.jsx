import './carousel.style.scss';
import { useState } from 'react';
import {ReactComponent as ArrowIcon} from '../../assets/icons/right-arrow-svgrepo-com.svg';

const Carousel = ({children, className}) => {
    const [curSlide, setCurSlide] = useState(0);

    const prevSlide = () => {
        if(curSlide === 0) return setCurSlide(children.length - 1);
        setCurSlide((prevSlideIndex) => prevSlideIndex - 1);
    }

    const nextSlide = () => {
        if(curSlide === children.length - 1) return setCurSlide(0);
        setCurSlide((prevSlideIndex) => prevSlideIndex + 1);
    }

    return (
        <div className={`carousel ${className}`}>
            <ArrowIcon className="carousel__arrow carousel__arrow-left" onClick={prevSlide} />

            <div className="carousel__container-wrapper">
                <div className="carousel__container" style={{transform: `translateX(-${curSlide * 100}%)`}}>
                    {children}
                </div>
            </div>

            <ArrowIcon className="carousel__arrow carousel__arrow-right" onClick={nextSlide} />
        </div>
    );
}

export default Carousel;