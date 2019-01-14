import createElement from './createElement'
import render from './render'

const vApp = createElement('div', {
    attrs: {
        id: 'app'
    },
    children: [
        'Hei Verden',
        createElement('img', {
            attrs: {
                src: 'https://media.giphy.com/media/ECSalSdhUhRcI/giphy.gif'
            }
        })
    ]
})

const $app = render(vApp)
console.log(vApp)
