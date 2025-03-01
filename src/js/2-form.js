const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Початкові дані
let formData = { email: "", message: "" };

// Перевіряємо наявність даних у локальному сховищі при завантаженні сторінки
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
}

// Обробник події input (збереження даних у локальне сховище)
form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробник події submit (відправлення форми)
form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    // Очищення форми, локального сховища та об'єкта formData
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: "", message: "" };
});