const birthday = document.querySelector("#birthday");
const textHasil = document.querySelector("p");

const getUsia = () => {
    const now = new Date().getFullYear();
    const hasil = now - birthday.value

    textHasil.innerHTML = textHasil.innerHTML + " " + hasil
}