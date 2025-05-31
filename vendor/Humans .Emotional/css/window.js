
// "use strict";
// var initPreloader = function() {
//     $(document).ready(function($) {
//         $('body').addClass('preloader-site');
//     });

    
//     $(window).on("load", function() {
//         setTimeout(function() {
//             $('.preloader-wrapper').fadeOut(500); 
//             $('body').removeClass('preloader-site');
//         }, 3000); 
//     });
// }
// initPreloader();


// window.addEventListener('load', function() {
//     const preloader = document.getElementById('preloader');
//     const content = document.querySelector('.content');
//     if (preloader) {
//         setTimeout(() => {
//             preloader.style.opacity = '0'; 
//             content.style.opacity = '1'; 
//             setTimeout(() => {
//                 preloader.style.display = 'none'; 
//             }, 300);
//         }, 100); 
//     }
// });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



const backgrounds = [
    'image/photo1.jpg',
    'image/photo2.jpg',
    
];

let currentIndex = 0;

const heroBackground = document.querySelector('.hero-background');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


const changeBackground = () => {
    heroBackground.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
};

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    changeBackground();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % backgrounds.length; 
    changeBackground();
});


changeBackground();


const navbarLinks = document.getElementById('navbar-links');


function toggleMenu() {
    navbarLinks.classList.toggle('active'); 
}


document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);


angular.module('humansApp', [])
    .controller('MainController', ['$scope', function($scope) {
        $scope.loading = true;

      
        setTimeout(function() {
            $scope.loading = false;
            $scope.$apply();
        }, 1000); 
    }])
    .component('navbar', {
        templateUrl: 'templates/navbar.html'
    })
    .component('heroSection', {
        templateUrl: 'templates/hero.html'
    })
    .component('mainContent', {
        templateUrl: 'templates/mainContent.html'
    })
    .component('ourStory', {
        templateUrl: 'templates/ourStory.html'
    })
    .component('howItWorks', {
        templateUrl: 'templates/howItWorks.html'
    })
    .component('signUp', {
        templateUrl: 'templates/signUp.html'
    })
    .component('footerComponent', {
        templateUrl: 'templates/footer.html'
    });

    document.addEventListener("click", function(event) {
        const scrollable = document.getElementById("scrollable");
        
      
        if (!scrollable.contains(event.target)) {
         
            scrollable.style.transform = `translateX(-100px)`;
            
          
            setTimeout(() => {
                scrollable.style.transform = `translateX(0)`;
            }, 1000); 
        }
    });
    

