import React, { useState } from 'react';
import styles from './Carousel.module.scss';

import CarouselItem from 'components/CarouselItem';

const sliderItems = [
    {
        id: 1,
        title: 'Save water',
        text: 'Taking on the issue of ensuring access to safe water requires worldwide effort.',
        img: 'assets/carousel/img1.svg',
        positionNum: 3
    },
    {
        id: 2,
        title: 'Plant trees',
        text: 'Some information about the topic that was written in the title',
        img: 'assets/carousel/img2.svg',
        positionNum: 4
    },
    {
        id: 3,
        title: 'Save energy',
        text: 'Some information about the topic that was written in the title',
        img: 'assets/carousel/img3.png',
        positionNum: 5
    },
    {
        id: 4,
        title: 'Avoid plastic',
        text: 'Some information about the topic that was written in the title',
        img: 'assets/carousel/img4.svg',
        positionNum: 1
    },
    {
        id: 5,
        title: 'Choose organic',
        text: 'Some information about the topic that was written in the title',
        img: 'assets/carousel/img5.svg',
        positionNum: 2
    }
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [direction, setDirection] = useState(null);

    const prevHandler = () => {
        currentSlide === 1
            ? setCurrentSlide(5)
            : setCurrentSlide(prevState => prevState - 1);

        sliderItems.forEach(el => {
            el.positionNum === 1 ? el.positionNum = 5 : el.positionNum -= 1;
        });

        setDirection('left');
        setTimeout(() => {
            setDirection(null);
        }, 800);
    }

    const nextHandler = () => {
        currentSlide === 5
            ? setCurrentSlide(1)
            : setCurrentSlide(prevState => prevState + 1);

        sliderItems.forEach(el => {
            el.positionNum === 5 ? el.positionNum = 1 : el.positionNum += 1;
        });

        setDirection('right');
        setTimeout(() => {
            setDirection(null);
        }, 800);
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel__wrapper}>
                <img className={styles.carousel__wrapper_main} src='assets/carousel/main.svg' alt='main' />
                {
                    sliderItems.sort((a, b) => a.positionNum > b.positionNum ? 1 : -1).map(el => <CarouselItem key={el.id} {...el} direction={direction} />)
                }
            </div>
            <div className={styles.carousel__switcher}>
                <button
                    className={styles.carousel__switcher_btn}
                    onClick={prevHandler}
                >
                    &lt;
                </button>
                <p className={styles.carousel__switcher_num}>{currentSlide}<span> / 5</span></p>
                <button
                    className={styles.carousel__switcher_btn}
                    onClick={nextHandler}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;