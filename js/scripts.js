// Intro Text Animation
var typed = new Typed(".auto-type", {
    strings: ["Mike Musas", "A Data Analyst"],
    typeSpeed: 100,
    backSpeed: 20,
    loop: true
})


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
