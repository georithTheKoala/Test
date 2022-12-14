// Still under maintained
const hamburger = document.getElementById('hamburger');
const drawer = document.querySelector('.sidebar');

const addAttribute = () => {
  drawer.setAttribute("id", "drawer");
    drawer.setAttribute("id", "drawer.open");
}

const removeAttribute = () => {
    drawer.removeAttribute("id", "drawer.open");
}

export {
  addAttribute,
  removeAttribute
};