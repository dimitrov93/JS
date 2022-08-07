import JokeArticle from './JokeArticle'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { render, screen, cleanup } from '@testing-library/react';

function wait(time) {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(true)
        }, time)
    });

    return promise
}

// test('Joke Article', () => {
//     const container = document.getElementById('div')
//     document.body.appendChild(container);
    
//     const root = ReactDOM.createRoot(container);
//     const value = 'Chuck Norris something funny';
    
//     act(() => {
//         root.render(<JokeArticle text={value} />);
//     })
//     const actual = document.querySelector('.jokeText').textContent;
//     expect(value).toEqual(actual);
// })


afterEach(cleanup)

test('Test using test library',  () => {
    const value = 'Chuck Norris something funny';

    render(<JokeArticle text={value} />);

    expect(screen.getByText(value)).toBeInTheDocument();
})