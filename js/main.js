document.getElementById('aboutUsLink').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor click behavior

    const target = document.getElementById('about_us');
    window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth' // Smooth scroll animation
    });
});

function tu() {
    alert("Thanks For Joining Our Newsletter.");
};