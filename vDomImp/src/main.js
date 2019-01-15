import createElement from './createElement'
import render from './render'
import mount from './mount'
import diff from './diff'

const createVApp = count => createElement('div', {
    attrs: {
        id: 'app',
        dataCount: count
    },
    children: [
        'The current count is: ',
        String(count),
        createElement('img', {
            attrs: {
                src: 'https://media.giphy.com/media/ECSalSdhUhRcI/giphy.gif'
            }
        })
    ]
})

let count = 0
const vApp = createVApp(count)
const $app = render(vApp)

//Mount $app to the empty div
let $rootEl = mount($app, document.getElementById('app'))

setInterval(() => {
    count++
    const vNewApp = createVApp(count)
    const patch = diff(vApp, vNewApp)

    //Patch will return the new $rootEl in case
    //the whole $rootEl will be replaced
    $rootEl = patch($rootEl)

    vApp = vNewApp
}, 1000)