function modal() {
    // Modal

    const btn = document.querySelectorAll("[data-modal]"),
        //   closeModal = document.querySelector(".modal__close"),
        modal = document.querySelector(".modal");

    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        clearInterval(modalTimer);
    }

    btn.forEach(i => {
        i.addEventListener("click", showModal);
    });

    function hideModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
    // closeModal.addEventListener("click",hideModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close" == "")) {
            hideModal();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            hideModal();
        }
    });

    const modalTimer = setTimeout(showModal, 50000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight) {
            showModal();
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

module.exports = modal;