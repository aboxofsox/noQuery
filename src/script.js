// Selectors
const title = $('#title')
const subtitle = $('.subtitle')

// Text

// Get the text of an element
console.log(title.text())

// Set the text of an element
subtitle.text('New subtitle text')

// Looping, element creation, and append
const names = ['Fred', 'Carl', 'Albert', 'Sara', 'Alfonso']
names.each(name => {
    const li = $_('li')
    li.text(name)
    $('#list').append(li)
})

// Events, effects, and CSS
$('#fade-out').click(_ => $('#list').fadeOut())
$('#fade-in').click(_ => $('#list').fadeIn())
$('#title').hover(
    _ => $('#title').css('color', 'red'),
    _ => $('#title').css('color', 'black')
)
// Width and height
let wh = {
    w: $('#title').width(),
    h: $('#title').height()
}

// Toggle
$('#toggle').toggle(
    _ =>$('#list').fadeOut(),
    _ => $('#list').fadeIn()
)

$('#toggle2').toggle(
    _ => $('#title').css('color', 'red'),
    _ => $('#title').css('color', 'blue')
)

// First, last, and nth
$('#list li').first().css('color', 'dodgerblue')
$('#list li').last().css('color', 'salmon')
$('#list li').nth(2).css('color', 'orange')
$('#list li').nth(3).text('George')

// Attributes
$('#list').attr('id') // Get the ID attribute
$('#list').attr('name', 'names') // Set the name attribute
console.log($('#list').attr('name'))
