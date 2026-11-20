const requestedId = new URLSearchParams(location.search).get("product") || "phone-pro";
const item = Store.products.find(product => product.id === requestedId);
const main = document.querySelector("#main-content");

if (!item) {
    const message = document.createElement("h1");
    message.textContent = "Товар не найден";
    const back = document.createElement("a");
    back.href = "catalog.html";
    back.textContent = "Вернуться в каталог";
    const section = document.createElement("section");
    section.className = "container cart-section";
    section.append(message, back);
    main.replaceChildren(section);
} else {
    document.title = item.title + " — TechStore";
    for (const [selector, value] of Object.entries({
        ".hero__subtitle": item.category,
        ".page-hero__title": item.title,
        ".page-hero__description": item.description,
        ".product__category": item.category,
        ".product__title": item.title,
        ".product__description": item.description,
        ".product__price": Store.money(item.price),
    })) {
        document.querySelector(selector).textContent = value;
    }
    const illustration = document.querySelector("#product-illustration");
    const type = item.id.split("-")[0];
    illustration.src = "images/" + (type === "sound" ? "audio" : type) + "-960.svg";
    illustration.alt = item.title;
    const table = document.querySelector(".characteristics__table tbody");
    table.replaceChildren();
    for (const feature of Store.features[item.id]) {
        const row = document.createElement("tr");
        const label = document.createElement("th");
        label.scope = "row";
        label.textContent = feature.label;
        const value = document.createElement("td");
        value.textContent = feature.value;
        row.append(label, value);
        table.append(row);
    }
    for (const link of main.querySelectorAll('a[href="order.html"]')) {
        link.href = "order.html?product=" + encodeURIComponent(item.id);
        if (!item.isAvailable) link.hidden = true;
    }
    const action = document.createElement("button");
    action.type = "button";
    action.className = "button";
    action.textContent = item.isAvailable ? "В корзину" : "Нет в наличии";
    action.disabled = !item.isAvailable;
    action.dataset.addToCart = item.id;
    document.querySelector(".product__info").append(action);
}
