let arr = [
    { dp: 'https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { dp: 'https://images.pexels.com/photos/7063778/pexels-photo-7063778.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/7063778/pexels-photo-7063778.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { dp: 'https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { dp: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { dp: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400' },
]

let stores = document.querySelector('#stores')
let storyContent = document.querySelector('.storyContent')

arr.forEach((elem) => {
    let storyDiv = `
        <div class="story">
            <img src='${elem.dp}' alt="">
        </div>`
    
    stores.insertAdjacentHTML("beforeend", storyDiv);
})

let story = document.querySelectorAll('.story')

story.forEach((e, index) => {
    e.addEventListener('click', (det) => {
        // Clear the storyContent before adding a new story
        storyContent.innerHTML = '';

        // Create a new story element with the clicked story's content
        let selectedStory = `
            <div class="selected-story">
                <img src='${arr[index].story}' alt="">
            </div>`
        
        storyContent.insertAdjacentHTML("beforeend", selectedStory);
    })
})
