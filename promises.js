const posts = [ // mimicking response from a server
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts () {
    setTimeout(() => {
        let output = ''; 
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000); // wait 1000 milliseconds (1 second) for response to come from server
};

function createPost (post) {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            posts.push(post);

            const error = false; // normally you'd do some kind of error checking
            if (!error) {
                resolve ();
            } else {
                reject ('Error: Something went wrong');
            }

        }, 2000);
    });
};

createPost ({title: 'Post Three', body: 'This is post three'})
    .then(getPosts) // if it's 'resolve' then run getPosts
    .catch (err => console.log (err));  // if it's 'reject', this prints the error in console

// Async / Await -- same as above but much cleaner than using multiple .then(s)
async function init () {
    await createPost ({title: 'Post Three', body: 'This is post three'}); // we're waiting for this to be done before moving onto getPosts()
    getPosts ();
} 

init ();

// Async / Await / Fetch
async function fetchUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log (data);
}

fetchUsers ();

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 2000, 'Goodbye')
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); // fetch is a bit weird so we have to parse it into json again

Promise.all ([promise1, promise2, promise3, promise4]).then((values) => console.log(values));