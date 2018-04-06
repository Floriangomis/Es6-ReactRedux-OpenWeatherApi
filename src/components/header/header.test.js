import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header';

describe('Header', () => {

    const { title, subtitle, btns } = {
        title: 'Title',
        subtitle: 'Subtitle',
        btns: [
            {
                value: 'Twitter',
                icon: 'icon-twitter-squared',
                link: 'https://twitter.com/'
            },
            {
                value: 'spotify',
                icon: 'icon-spotify',
                link: 'https://google.com'
            },
            {
                value: 'instagram',
                icon: 'icon-instagram',
                link: 'https://www.instagram.com/'
            }
        ]
    };

    test('Should mounth the component correctly without any bug', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header title={title} subtitle={subtitle} btns={btns} />, div);
    });

});
