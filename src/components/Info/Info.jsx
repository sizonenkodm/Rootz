import React from 'react';
import styles from './Info.module.scss';

import Button from 'components/Button';
import Accordion from 'components/Accordion';

const information = [
    {
        id: 1,
        title: 'What can I do to protect our planet?',
        info: 'Not to make an open fire in nature and to clean up litter; not to pollute open water bodies; to switch to alternative energy sources; to reduce the use of non-renewable resources.',
    },
    {
        id: 2,
        title: 'How to save nature ecology?',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quisquam non corporis nulla recusandae hic voluptatibus doloribus suscipit molestias perferendis veniam iusto, commodi esse eius laudantium aut, illo praesentium quo.',
    },
    {
        id: 3,
        title: 'What is nature conservation?',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, quisquam non corporis nulla recusandae hic voluptatibus doloribus suscipit molestias perferendis veniam iusto, commodi esse eius laudantium aut, illo praesentium quo.',
    },
];

const Info = () => {

    const handleClick = () => {
        // This function for future functionality with API connection
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Ready to Get started?</h1>
                <p>When pattern is mentioned in interior design, it is easy to associate it with a geometric patterned wallpaper or colourful prints on interior fabrics.</p>
                <Button
                    type='submit'
                    text='Contact us'
                    width={166}
                    handler={handleClick}
                />
            </div>
            <div className={styles.info}>
                {
                    information.map(el => <Accordion key={el.id} {...el} />)
                }
            </div>
        </div>
    );
};

export default Info;