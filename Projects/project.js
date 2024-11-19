// Function to filter projects based on the selected category
function filterProjects(category) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => button.classList.remove('active'));

    // Activate the clicked button
    event.target.classList.add('active');

    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
        if (category === 'all') {
            image.style.display = 'block';
        } else {
            if (image.classList.contains(category)) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        }
    });
}

// Set "All Projects" as the default active filter when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.filter-btn.active').click();
});

