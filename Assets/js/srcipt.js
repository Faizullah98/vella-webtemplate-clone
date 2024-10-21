const acc = document.querySelectorAll(".accordian-title");
const desc = document.querySelectorAll(".accordian-desc");
acc.forEach((element, index) => {
    element.addEventListener('click', () => {
        // Hide all descriptions
        desc.forEach(d => d.style.display = "none");
        
        // Show the clicked accordion's description
        desc[index].style.display = "block";
    });
});