document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("toggle-btn");
    const productList = document.querySelector(".product-list");
    let visible = true;

    btn.addEventListener("click", () => {
        if (visible) {
            productList.style.transition = "opacity 0.6s ease";
            productList.style.opacity = "0";
            setTimeout(() => productList.style.display = "none", 600);
        } else {
            productList.style.display = "flex";
            productList.style.opacity = "0";
            productList.style.transition = "opacity 0.6s ease";
            setTimeout(() => productList.style.opacity = "1", 10);
        }
        visible = !visible;
    });
});
