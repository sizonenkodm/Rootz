import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './CarouselItem.module.scss';

const CarouselItem = (props) => {
    const { title, text, img, positionNum, direction } = props;

    const itemClass = cn({
        [styles.variant1]: positionNum === 3,
        [styles.variant2]: positionNum === 2 || positionNum === 4,
        [styles.variant3]: positionNum === 1 || positionNum === 5,
        [styles.mr30ml100]: positionNum === 2,
        [styles.mr70ml30]: positionNum === 4,
        [styles.ml_calc]: positionNum === 1,
        [styles.fadeInLeft]: direction === 'right',
        [styles.fadeInRight]: direction === 'left',
    });

    const contentClass = cn({
        [styles.content]: true,
        [styles.mt_content]: positionNum === 3
    });

    return (
        <div className={itemClass}>
            <img src={img} alt='topic-img' />
            <div className={contentClass}>
                {positionNum === 3 ? <h2>{title}</h2> : <h3>{title}</h3>}
                {positionNum === 3 && <p>{text}</p>}
            </div>
        </div>
    );
};

CarouselItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    img: PropTypes.string.isRequired,
    positionNum: PropTypes.number.isRequired,
    direction: PropTypes.string
}

CarouselItem.defaultProps = {
    text: '',
    direction: null
}

export default CarouselItem;