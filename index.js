import { storys } from "./components/story.js"
import { reload } from "./js/utils.js"

const story = document.querySelector('.story')

fetch('https://jsonplaceholder.typicode.com/photos?_start=100&_limit=200')
    .then(res => res.json())
    .then(res => reload(res,story,storys))