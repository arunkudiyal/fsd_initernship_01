// documnet --> Object representation of the Documnet (HTML)

console.dir(document)

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