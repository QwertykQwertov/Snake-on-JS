// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

const xhr = new XMLHttpRequest()
const tbody = document.getElementById('tbody')
let fragment = document.createDocumentFragment()

xhr.open("GET", 'https://jsonplaceholder.typicode.com/users')

xhr.addEventListener('load', () => { addResponseToDOM(JSON.parse(xhr.responseText)) })

function addResponseToDOM(data) {
    data.forEach((user, index) => {
        user.name = user.name.split(' ')
        const tr = document.createElement('tr')
        const th = document.createElement('th')
        th.setAttribute('scope', "row")
        th.textContent = index + 1
        tr.appendChild(th)

        const fname = document.createElement('td')
        fname.textContent = user.name[0]

        const lname = document.createElement('td')
        lname.textContent = user.name[1]

        const username = document.createElement('td')
        username.textContent = user.username

        const email = document.createElement('td')
        email.textContent = user.email

        const website = document.createElement('td')
        website.textContent = user.website

        tr.appendChild(fname)
        tr.appendChild(lname)
        tr.appendChild(username)
        tr.appendChild(email)
        tr.appendChild(website)
        fragment.appendChild(tr)
        console.log(fragment)
    })
    tbody.appendChild(fragment)
}
xhr.send()

{/* <tr>
<th scope="row">1</th>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
</tr> */}