const productSelect = document.querySelector(".order-form select");
if (productSelect) {
    for (const product of Store.products.filter(item => item.isAvailable)) {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.title;
        productSelect.append(option);
    }
    const requested = new URLSearchParams(location.search).get("product");
    if (Array.from(productSelect.options).some(option => option.value === requested)) {
        productSelect.value = requested;
    }
}

for (const form of document.querySelectorAll("form")) {
    form.noValidate = true;
    const message = document.createElement("p");
    message.setAttribute("role", "status");
    form.append(message);

    form.addEventListener("submit", event => {
        event.preventDefault();
        const phone = form.querySelector('input[type="tel"]');
        if (phone) {
            const digits = phone.value.replace(/\D/g, "").length;
            const validPhone = !phone.value || /^\+?[\d\s().-]+$/.test(phone.value) &&
                digits >= 10 && digits <= 15;
            phone.setCustomValidity(validPhone ? "" : "Укажите от 10 до 15 цифр.");
        }

        if (!form.reportValidity()) {
            message.textContent = "Проверьте обязательные поля и формат контактных данных.";
            message.className = "form-message form-message--error";
            return;
        }

        message.textContent = "Учебная заявка подготовлена.";
        message.className = "form-message form-message--success";
        form.reset();
    });
}
