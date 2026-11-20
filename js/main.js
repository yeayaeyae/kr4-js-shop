const modal = document.querySelector("#request-modal");
const openButtons = document.querySelectorAll("[data-modal-open]");
const closeButtons = document.querySelectorAll("[data-modal-close]");

if (modal) {
    openButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.showModal();
        });
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            modal.close();
        });
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
}

const menuButton = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primary-nav");
if (menuButton && primaryNav) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    primaryNav.classList.toggle("is-open", !expanded);
  });
  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      primaryNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}


const cartCount = document.querySelector("#cart-count");
function refreshCartCount() { if (!cartCount || !window.Store) return; cartCount.textContent = Object.values(Store.readCart()).reduce((a,b)=>a+b,0); }
refreshCartCount(); window.addEventListener("cart:changed", refreshCartCount);
document.addEventListener("click", (event) => {
 const button = event.target.closest("[data-add-to-cart]");
 if (!button) return;
 Store.addToCart(button.dataset.addToCart);
 button.textContent = "Добавлено";
 window.setTimeout(() => { button.textContent = "В корзину"; }, 1400);
});
