const headers = {
    'Content-Type': 'application/json',
    Authorization: 'insert-token-here',
};

const body = {
    userID: 10,
    title: 'Demo addition',
    body: 'This the body of the new post.',
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error));
