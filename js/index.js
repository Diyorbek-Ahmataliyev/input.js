

// JavaScript kodini boshlash
document.addEventListener("DOMContentLoaded", function () {
  // Shaklni va foydalanuvchi profil qismiga qo'shiladigan elementlarni olish
  const form = document.querySelector("form");
  const nameInput = document.querySelector(".name");
  const titleInput = document.querySelector(".title");
  const descriptionInput = document.querySelector("textarea");
  const fileInput = document.querySelector(".custom-file-input");
  const usersProfileSection = document.querySelector(".users__profile");

  // Shakl yuborilganda bajariladigan funktsiya
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Shaklni yuborishni oldini olish

    // Foydalanuvchi ma'lumotlarini olish
    const name = nameInput.value.trim();
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const file = fileInput.files[0];

    // Ma'lumotlarni tekshirish (to'ldirilganligini)
    if (!name || !title || !description || !file) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }

    // Faylni URL-ga aylantirish
    const reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e.target.result;
      // Yangi foydalanuvchi profilini yaratish
      const newUserProfile = document.createElement("div");
      newUserProfile.classList.add("user__profile");

      newUserProfile.innerHTML = `
        <div class="user__photo">
          <img src="${imageUrl}" alt="user">
        </div>
        <div class="user__info">
          <h2>${name}</h2>
          <h3>${title}</h3>
          <p>${description}</p>
        </div>
      `;

      // Yangi profilni foydalanuvchilar qismiga qo'shish
      usersProfileSection.appendChild(newUserProfile);

      // Shaklni tozalash
      form.reset();
    };

    // Rasmni yuklash
    reader.readAsDataURL(file);
  });
});
