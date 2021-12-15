import noQuery from './lib/core.js'
noQuery.init()

// Selectors
const title = $('#title')

// Events and styling
$('#toggle').on('click', _ => $('#toggle-text').fadeOut())
$('#title').on('mouseover', _ => $('#title').css('color', 'red'))
$('#title').on('mouseleave', _ => $('#title').css('color', 'black'))

// each() and append()
let arr = ['Home', 'About', 'Contact']
arr.each(i => {
    let li = $_('li')
    li.text(i)
    $('#list').append(li)
})

// attr()
// console.log($('#toggle-btn').attr('id'))
// console.log($('#toggle-btn').attr('id'))

// css()
$('#title').css('font-family', 'sans-serif')
$('#title').css('color', 'dodgerblue')

// mouse events
$('#title').css('transition', 'color 0.2s ease')
$('#title').css('cursor', 'pointer')
$('#title').hover(
    _ => $('#title').css('color', 'skyblue'),
    _ => $('#title').css('color', 'dodgerblue')
)

$('#subtitle').css('color', 'scale 0.2s ease')
$('#subtitle').mouseenter(_ => $('#subtitle').css('color', 'salmon'))


// fadeIn() and fadeOut()
$('#fade-out').click(_ => $('#toggle-text').fadeOut())
$('#fade-in').click(_ => $('#toggle-text').fadeIn())

