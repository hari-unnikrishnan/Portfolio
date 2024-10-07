$(document).ready(function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "hover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    });
});



$(document).ready(function () {

    $('#forgot-password').click(function (e) {
        e.preventDefault();
        $('#login-box').hide();
        $('#reset-box').show();
    });


    $('#create-new-account').click(function (e) {
        e.preventDefault();
        $('#login-box').hide();
        $('#create-box').show();
    });


    $('#back-to-login').click(function (e) {
        e.preventDefault();
        $('#reset-box').hide();
        $('#login-box').show();
    });


    $('#back-to-login-create').click(function (e) {
        e.preventDefault();
        $('#create-box').hide();
        $('#login-box').show();
    });
});


// about

let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;


function updateCarousel() {
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}vw)`;
}


document.getElementById('left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
    updateCarousel();
});


document.getElementById('right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});


images.forEach((img) => {
    img.addEventListener('click', () => {
        const info = img.getAttribute('data-info');
        document.getElementById('popup-info').innerText = info;
        document.getElementById('popup').style.display = 'block';
    });
});


document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});


document.getElementById('popup').addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        document.getElementById('popup').style.display = 'none';
    }
});
// contact

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();


    document.getElementById("thankYouPopup").style.display = "flex";


    this.reset();
});


document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("thankYouPopup").style.display = "none";
});