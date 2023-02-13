const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".button-open-modal");
const modalButtonDone = document.querySelector(".modal__button-done");
const modalButtonClose = document.querySelector(".modal__button-close");

openModalButton.addEventListener("click", (e) => {
  openModal();
});

modal.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target)
    if (target.classList.contains("modal__button-done")
    || target.classList.contains("modal__button-close")
    || target.classList.contains("modal")) closeModal()
})

const closeModal = () => {
  modal.classList.remove("active");
};

const openModal = () => {
  modal.classList.add("active");
};
