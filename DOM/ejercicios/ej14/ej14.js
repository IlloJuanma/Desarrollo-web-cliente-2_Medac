document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((menuItem) => {
        const submenu = menuItem.querySelector(".submenu");
        if (submenu) {
            menuItem.addEventListener("click", () => {
                menuItems.forEach((item) => {
                    const itemSubmenu = item.querySelector(".submenu");
                    if (itemSubmenu && item !== menuItem) {
                        itemSubmenu.style.display = "none";
                    }
                });
                if (submenu.style.display === "block" || submenu.style.display === "") {
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";
                }
            });
        }
    });
});


