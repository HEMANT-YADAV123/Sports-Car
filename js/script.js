//toggle menu button

function toggleMenu()
{
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav')
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// chnage the background video when click on the gallery images
function changeVideo(name)
{
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');


    bgVideoList.forEach(video =>{
        video.classList.remove('active');
        if(video.classList.contains(name))
        {
            video.classList.add('active');
        }
    });

//mapping the model name with chnage in car video.
    models.forEach(model =>{
        model.classList.remove('active');
        if(model.classList.contains(name))
        {
            model.classList.add('active');
        }
    });

//mapping the trailer video change.
    trailers.forEach(trailer =>{
        trailer.classList.remove('active');
        if(trailer.classList.contains(name))
        {
            trailer.classList.add('active');
        }
    });
}

//change play to pause and pause to play
function toggleplay()
{
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active')
    pause.classList.toggle('active')
}

// video pause & play

function pauseVideo()
{
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video =>{
        video.pause();
    })

    toggleplay()
}
function playVideo()
{
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video =>{
        video.play();
    })

    toggleplay()// jaise hi play kro change button to pause.
}
