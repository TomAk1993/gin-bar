const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n => n.
    addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    }));


    // Gallery

    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox'
    document.body.appendChild(lightbox);

    const images = document.querySelectorAll('.image');


    images.forEach(image => {
        image.addEventListener('click', e => {
            lightbox.classList.add('active')
            const img = document.createElement('img')
            img.classList.add('image-size')
            img.src = image.src
            while (lightbox.firstChild) {
                lightbox.removeChild(lightbox.firstChild)
            }
            lightbox.appendChild(img)
        })
    });

    lightbox.addEventListener('click', e => {
        if(e.target !== e.currentTarget) return
        lightbox.classList.remove('active');
    })

    // Form Submit

    const form = document.getElementById('form')
    const phone = document.getElementById('phone')

    form.addEventListener('submit', (e) => {
       alert('Message Sent')
    })