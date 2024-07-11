import { storys } from "./components/story.js"
import { reload } from "./js/utils.js"
import { post } from "./components/post.js"

const story = document.querySelector('.story')
const posts = document.querySelector('.posts')

fetch('https://jsonplaceholder.typicode.com/photos?_start=100&_limit=200')
    .then(res => res.json())
    .then(res => reload(res,story,storys))

fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100')
    .then(res => res.json())
    .then(res => reload(res, posts, post))