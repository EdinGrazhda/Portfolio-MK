document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-button");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const description = document.getElementById("description");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");
            let descText = '';

            galleryItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });

            switch (filter) {
                case "all":
                    descText = "All";
                    break;
                case "led":
                    descText = "LED Designs";
                    break;
                case "projects":
                    descText = "Projects";
                    break;
            }

            description.textContent = descText;
        });
    });

    // Show all items initially
    galleryItems.forEach(item => {
        item.style.display = "block";
    });
});
