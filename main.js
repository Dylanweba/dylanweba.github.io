// window.addEventListener('DOMContentLoaded', initializeTheme);

// const root = document.documentElement;

// function setTheme(theme) {
//     root.setAttribute('data-theme', theme);
//     localStorage.setItem('preferredTheme', theme);
// }

// function initializeTheme() {
//     var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (prefersDarkMode){setTheme("dark");}
//     else {setTheme("light");}
// }

// function scrolll() {
//     var carousel = document.querySelector(".scroll-images");

//     carousel.scrollBy(-350, 0);

// }


// function scrollr() {
//     var carousel = document.querySelector(".scroll-images");
    
//     carousel.scrollBy(350, 0);

// }

window.addEventListener('DOMContentLoaded', initializeTheme);

const root = document.documentElement;
const portfolioContainer = document.querySelector('.scroll-images');
let isAnimating = false;

function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('preferredTheme', theme);
}

function initializeTheme() {
    var prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}

function smoothScroll(container, targetOffset, duration) {
    const startOffset = container.scrollLeft;
    const startTime = performance.now();

    function scroll(timestamp) {
        const elapsedTime = timestamp - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = easeOutQuart(progress);
        const scrollAmount = startOffset + (targetOffset - startOffset) * easedProgress;
        container.scrollLeft = scrollAmount;

        if (elapsedTime < duration) {
            requestAnimationFrame(scroll);
        }
    }

    function easeOutQuart(t) {
        return 1 - (--t) * t * t * t;
    }

    requestAnimationFrame(scroll);
}

function scrolll() {
    if (isAnimating) return;
    isAnimating = true;
    const firstChild = portfolioContainer.querySelector('.child');
    const scrollAmount = firstChild.offsetWidth + parseInt(window.getComputedStyle(firstChild).marginLeft); // Add margin
    portfolioContainer.scrollLeft -= scrollAmount;
    setTimeout(() => {
        portfolioContainer.appendChild(firstChild); // Move the first child to the end
        isAnimating = false;
    }, 500); // Adjust delay as needed
}

function scrollr() {
    if (isAnimating) return;
    isAnimating = true;
    const lastChild = portfolioContainer.querySelector('.child:last-child');
    const scrollAmount = lastChild.offsetWidth + parseInt(window.getComputedStyle(lastChild).marginRight); // Add margin
    const targetScroll = portfolioContainer.scrollLeft + scrollAmount;
    smoothScroll(portfolioContainer, targetScroll, 500);
    setTimeout(() => {
        portfolioContainer.insertBefore(lastChild, portfolioContainer.firstChild); // Move the last child to the beginning
        isAnimating = false;
    }, 500); // Adjust delay as needed
}



