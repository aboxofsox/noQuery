# noQuery
A reqlly dumb implementation of jQuery-like syntax.

First and foremost, it should go without saying, if you care about the quality of your code **do not use this library**. It's bad voodoo to create new prototype methods. Anyways, this really isn't for anyone that *actually* cares about code, it does target jQuery users after all...

### Usage
The best way to use this library is to just import the CDN.

[CDN](https://cdn.hellojeff.dev/noQuery.min.js)
```js
import noQuery from 'https://cdn.jsdelivr.net/gh/aboxofsox/noQuery@main/dist/noQuery.min.js'
noQuery.init()
```
Then call `noQuery.init()` to initialize the awfulness.

### Selector
Just like jQuery, we can use `$`.
```js
$('#some-id')
```
Easy peasy.

### Events
For now, this library only supports `element.on()`, but it looks something like:
```js
$('#some-id').on('click', e => console.log(e.target.textContent))
```

### CSS
You can even do styles like jQuery
```js
$('#some-id').css('background-color', 'blue')
$('#some-id').css('font-family', 'sans-serif')
```
I'll have to revisit the logic for this since it doesn't account for something like `list-style-type`.

### Each, Element Creation, and Append
We can iterate through an array or nodelist, create an element, and append it to whatever. Do note tha the syntax for element creation is `$_(tagname)`.
```js
const arr = ['bob', 'sally', 'mitch', 'randy']
arr.each(i => {
  const li = $_('li')
  li.text(i)
  $('#list').append(li)
})
```
Oh, and you can set or read the text with `$('#some-id').text()`

### Attr
You can get or set the attribute
```js
$('#some-id').attr('some-attribute') // reads the attribute
$('#some-id').attr('some-attribute', 'value') // sets the attribute
```

### Width and Height
We can ge the width and height of an element
```js
$('#some-id').width()
$('#some-id').height()
```

### First and Last
We can get the first and/or last element in a nodelist.
```js
$('#list li').first()
$('#list li').last()
```

### Fade in, Fade out, and Hide
We can fade elements in and out, or hide them.
```js
$('#fadeOut-btn').on('click', _ => $('#some-id').fadeOut())
$('#fadeIn-btn').on('click', _ => $('#some-id').fadeIn())
$('#hide-btn').on('click', _ => $('#hide-btn').hide())
```
`$().show()` is currently in the works.

### Toggle switch
`toggle()` takes in two functions, and toggles between them. 
```js
$('#toggle').toggle(
  _ => $('#target').fadeOut(),
  _ $('#target).fadeIn()
)
```


#### Todo
- [ ] show()
- [x] toggle()
- [ ] Specific event listeners `$('#some-id').mouseenter(() => {})`
- [x] Fix known issues with the `document.querySelctorAll()` binding.
- [ ] Transitions
- [ ] Slide in and out
- [ ] Slide direction 

Again, and I can't stress this enough, this wasn't meant to be used in a production environment. I just wanted to see if it were possible to create such a syntax without the bloaty garbage that came with jQuery. Turns out, you can, but with limitations if you don't handle the state of things.
