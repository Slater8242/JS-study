function showModal(modalSelector,modalTimer) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    
    console.log(modalTimer);
    if (modalTimer) {
        clearInterval(modalTimer);
    }
    
}

function hideModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "none";
    document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector,modalTimer) {
    // Modal

    const btn = document.querySelectorAll(triggerSelector),
        //   closeModal = document.querySelector(".modal__close"),
        modal = document.querySelector(modalSelector);

    btn.forEach(i => {
        i.addEventListener("click",() => showModal(modalSelector,modalTimer));
    });

    
    // closeModal.addEventListener("click",hideModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") == "") {
            hideModal(modalSelector);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape") {
            hideModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight) {
            showModal(modalSelector,modalTimer);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export {hideModal};
export {showModal};