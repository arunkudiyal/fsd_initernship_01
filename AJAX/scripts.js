// Client-Server Communication - XMLHttpRequest()

// Step 1 - create XHR Object
// const xhr = new XMLHttpRequest()
// const url = `https://api.github.com/users`

// // Step 2 - Open the portal of communication b/w the client and the API
// xhr.open('GET', url)

// // Step 3 - Check on the readyState and check for status
// xhr.onreadystatechange = () => {
//     if(xhr.readyState === 4 && xhr.status === 200) {
//         // Parse the JSON in AOO or Objects
//         const response = JSON.parse(xhr.responseText)
//         console.log(response)

//         // Access the container div
//         const myContainer = document.querySelector('#my-container')

//         for(let i=0; i < 30; i++) {
//             const image = document.createElement('img')
//             image.setAttribute('src', response[i].avatar_url)

//             const para = document.createElement('p')
//             para.setAttribute('class', 'lead')
//             para.textContent = `Login : ${response[i].login}`

//             myContainer.appendChild(image)
//             myContainer.appendChild(para)
//         }
//     }
// }

// // Step 4 - Send the request
// xhr.send()


var btn = document.querySelector('#search-button')

btn.addEventListener('click', () => {
    var username = document.querySelector('#text').value
    console.log(username)

    const xhr = new XMLHttpRequest()
    const url = `https://api.github.com/users/${username}`

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)

            console.log(response)
            
            const image = document.createElement('img')
            image.setAttribute('src', response.avatar_url)

            const text = document.createElement('p')
            text.setAttribute('class', 'lead')
            text.textContent = `USERNAME - ${response.login}`

            document.querySelector('#my-container').appendChild(image)
            document.querySelector('#my-container').appendChild(text)
        }
    }

    xhr.send()
})