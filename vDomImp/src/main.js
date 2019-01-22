import createElement from './JS/createElement'
import render from './JS/render'
import mount from './JS/mount'
import diff from './JS/diff'

const createVApp = count => createElement('div', {
    attrs: {
        id: 'app',
        dataCount: count
    },
    children: [
        'The current count is: ',
        String(count),
        ...Array.from({ length: count }, () => createElement('img', {
            attrs: {
                src: 'https://media.giphy.com/media/ECSalSdhUhRcI/giphy.gif'
            }
        }))
    ]
})

const vApp = createVApp(0)
const $app = render(vApp)

//Mount $app to the empty div
let $rootEl = mount($app, document.getElementById('app'))

setInterval(() => {
    const n = Math.floor(Math.random() * 10)
    const vNewApp = createVApp(n)
    const patch = diff(vApp, vNewApp)

    //Patch will return the new $rootEl in case
    //the whole $rootEl will be replaced
    $rootEl = patch($rootEl)

    vApp = vNewApp
}, 1000)
