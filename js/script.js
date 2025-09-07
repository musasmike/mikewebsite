
// ***************************************************************************** //
//    SIDE BAR 
// ***************************************************************************** //
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}


// ***************************************************************************** //
//    PAGES ANIMATIONS
// ***************************************************************************** //
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.scroll-fade');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        { threshold: 0.1 }
    );

    elementsToAnimate.forEach(element => observer.observe(element));
});


