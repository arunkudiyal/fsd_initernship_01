// documnet --> Object representation of the Documnet (HTML)

// console.dir(document)

// console.log(document.URL)
// console.log(document.all);

// // Access the header
// console.log(document.all[8])
// document.all[10].textContent = 'My Application'

// IDENTIFIER METHODS - 5 in total

// 1.
// getElementById() - grab an element based on the id | UNIQUE
// const headerTitle = document.getElementById('header-title')
// console.log(headerTitle)

// WHY ARE THE ACCESSING THE DATA??
// headerTitle.style.color = 'black'
// headerTitle.style.fontFamily = 'cursive'

// const subTitle = document.getElementById('sub-title')
// console.log(subTitle)

// // Modification or changes functions
// // subTitle.textContent = 'Add Products'
// // subTitle.innerText = 'New Products'
// // subTitle.innerHTML = '<h4 class="my-class">I changed the Title</h4>'

// // Styles | CSS
// const container = document.getElementById('main')
// console.log(container)

// container.style.backgroundColor = 'red'
// container.style.fontFamily = 'cursive'

// // make something hidden
// container.style.display = 'none'

// 2.
// getElementsByClassName()
// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems)

// for(let i=0; i < listItems.length; i++) {
//     if(i%2 != 0) {
//         listItems[i].style.backgroundColor = 'rgb(100, 150, 200)'
//         listItems[i].style.color = 'white'
//     }
// }

// 3.
// getElementsByTagName()
// const headingTwo = document.getElementsByTagName('h2')
// console.log(headingTwo)

// document.getElementsByTagName('h2')[1].innerText = 'My Items'

// 4. 
// querySelector -> id(#) + className(.) + tagName
// It only returns the first instance of the chosed id, className or tagName
// const headerTitle = document.querySelector('#header-title')
// console.log(headerTitle)

// headerTitle.textContent = 'Changed Content...'

// const listItems = document.querySelector('.list-group-item')
// console.log(listItems)

// const headingTwo = document.querySelector('h2')
// console.log(headingTwo)

// 5.
// querySelectorAll() -> id, className or tagName
// const headerTitle = document.querySelectorAll('#header-title')
// console.log(headerTitle)

// const listItems = document.querySelectorAll('.list-group-item')
// console.log(listItems)

// for(let i=0; i < listItems.length; i++) {
//     if(i%2 === 0) {
//         listItems[i].style.backgroundColor = 'blue'
//         listItems[i].style.color = 'white'
//     }
// }

// const headingTwo = document.querySelectorAll('h2')
// console.log(headingTwo)

// headingTwo[0].style.color = 'grey'
// headingTwo[1].style.color = 'grey'


// DOM EVENTS, EVENT LISTNERS & EVENT PARAMETERS
// Event -> Actions that you do in the app (click, double-click, scroll,...)
// Event Listner -> Make sure what to do on what action - function()

// 1. Access the element
// const btn = document.querySelector('#button')
// console.log(btn)

// // 2. addEventListner() to the element
// btn.addEventListener('click', () => {
//     console.log('Button was Clicked...')
// })

// // const clickEventListner = () => {
// //     console.log('Click Event Ocuuered')
// // }

// // const submitButton = document.querySelector('#submitBtn')
// // submitButton.addEventListener('click', clickEventListner)

// const submitButton = document.querySelector('#submitBtn')
// console.log(submitButton)

// // Event Parameter - A parameter passed to a function / method which listnes to an event
// submitButton.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(e)
//     console.log('Form was submitted successfully...')
// })


// const textInput = document.querySelector('#text-input')
// console.log(textInput)

// Events - keydown, keyup
// textInput.addEventListener('keyup', (e) => {
//     // console.log(e)
//     console.log(e.target.value)
// })

// cut Event
// textInput.addEventListener('cut', () => {
//     console.log('CUT Evenet Occured...')
// })

// textInput.addEventListener('copy', () => {
//     console.log('COPY Evenet Ocuuered!')
// })

// textInput.addEventListener('paste', () => {
//     console.log('PASTE Evenet Occured...')
// })

// const listItems = document.querySelectorAll('.list-group-item')
// console.log(listItems)

// for(let i=0 ; i < listItems.length; i++) {
//     listItems[i].addEventListener('dblclick', () => {
//         listItems[i].style.backgroundColor = 'blue'
//         listItems[i].style.color = 'white'
//     })
// }

// for(let i=0 ; i < listItems.length; i++) {
//     listItems[i].addEventListener('click', () => {
//         listItems[i].style.backgroundColor = 'grey'
//         listItems[i].style.color = 'black'
//     })
// }


// CREATING HTML ELEMENT USING DOM

// const div = document.createElement('div')
// console.log(div)

// // set ID and class - setAttribute
// div.setAttribute('id', 'my-div')
// div.setAttribute('class', 'my-div-class')
// console.log(div)

// const submitBtn = document.querySelector('#submitBtn')
// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault()

//     const text = document.querySelector('#text-input').value

//     const li = document.createElement('li')
//     li.setAttribute('class', 'list-group-item')
//     li.innerText = text

//     console.log(li)

//     // Step 1 - Find the parent element
//     const ul = document.querySelector('#items')
    
//     // Step 2 - Put the element you created as a child to the parent
//     // parentVariable.appendChild(newElement)
//     ul.appendChild(li)
// })