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

function createPost (post, callback) {
    setTimeout (() => {
        posts.push(post);
        callback ();
    }, 2000);
}

createPost ({title: 'Post Three', body: 'This is post three'}, getPosts);