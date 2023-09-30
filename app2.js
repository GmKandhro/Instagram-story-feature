let arr = [
    { dp: 'https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { dp: 'https://images.pexels.com/photos/7063778/pexels-photo-7063778.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/7063778/pexels-photo-7063778.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { dp: 'https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { dp: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/5325105/pexels-photo-5325105.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { dp: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400', story: 'https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=400' },
]

let stores = document.querySelector('#stores')
let fullScreen = document.querySelector('.fullScreen')
let bar = document.querySelector('.bar');

let storyDiv = ''
arr.forEach((elem , index) => {
     storyDiv += `
        <div  class="story">
            <img id='${index}' src='${elem.dp}' alt="">
        </div>`
    
   
})
stores.innerHTML = storyDiv
stores.addEventListener('click', (dets) => {
    let value = arr[dets.target.id].story;
    bar.style.display = 'block';

    bar.style.animation = 'none'; // Remove the animation
    void bar.offsetWidth; // Trigger reflow to apply the change immediately
    bar.style.animation = 'bar ease-in-out 3s 1'; // Reapply the animation

    fullScreen.style.display = 'block';
    fullScreen.style.backgroundImage =  `url(${value})`;
    
    setTimeout(() => {
        fullScreen.style.display = 'none';
        bar.style.display = 'none'
    }, 3000);
});