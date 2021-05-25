window.addEventListener("DOMContentLoaded", () => {
    // tabs
    const tabs = document.querySelectorAll(".tabheader__item"),
        tabsContent = document.querySelectorAll(".tabcontent"),
        tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add("hide");
            item.classList.remove("show", "fade");
        });

        tabs.forEach(item => {
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade");
        tabsContent[i].classList.remove("hide", );
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // timer
    const deadline = "2021-03-11";

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timerInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timerInterval);
                days.innerHTML = "0";
                hours.innerHTML = "0";
                minutes.innerHTML = "0";
                seconds.innerHTML = "0";
            }
        }
    }

    setClock(".timer", deadline);

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


    // используем классы для карточек

    // class MenuCard{
    //     constructor(src, alt,title,descr,price,parentSelector, ...classes ){
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.classes = classes;
    //         this.parent = document.querySelector(parentSelector);
    //         this.transfer = 27;
    //         this.changeToUAH();
    //     }

    //     changeToUAH() {
    //         this.price = this.price * this.transfer;
    //     }

    //     render() {
    //         const element = document.createElement("div");

    //         if(this.classes.length === 0){
    //             this.element = "menu__item";
    //             element.classList.add(this.element);
    //         }else{
    //             this.classes.forEach(className => element.classList.add(className));
    //         }

    //         element.innerHTML =`
    //         <img src=${this.src} alt="${this.alt}">
    //         <h3 class="menu__item-subtitle"> ${this.title}</h3>
    //         <div class="menu__item-descr"> ${this.descr}</div>
    //         <div class="menu__item-divider"></div>
    //         <div class="menu__item-price">
    //             <div class="menu__item-cost">Цена:</div>
    //             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
    //         </div>
    //         `;
    //         this.parent.append(element);
    //     }
    // }

    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} : status ${res.status}`);
        }

        return await res.json();
    };

    getResource("http://localhost:3000/menu")
        .then(data => createCard(data));

    function createCard(data) {
        data.forEach(({
            img,
            altimg,
            title,
            descr,
            price
        }) => {
            const element = document.createElement("div");
            element.classList.add("menu__item");

            const toUAH = price * 27;

            element.innerHTML = `
                <img src=${img} alt="${altimg}">
                <h3 class="menu__item-subtitle"> ${title}</h3>
                <div class="menu__item-descr"> ${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${toUAH}</span> грн/день</div>
                </div>
            `;

            document.querySelector(".menu .container").append(element);
        });
    }

    // forms

    const forms = document.querySelectorAll("form");

    const message = {
        loading: "img/form/spinner.svg",
        success: "Спасибо! Скоро с вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // const object= {};
            // formData.forEach(function (value,key) {
            //     object[key] = value;
            // });

            postData("http://localhost:3000/requests", json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });

        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        showModal();
        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(".modal").append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            hideModal();
        }, 4000);
    }


    // Slider
    let currentSlide = 1,
        offset = 0; // My version

    const slides = document.querySelectorAll(".offer__slide"),
          slider = document.querySelector(".offer__slider"),
          currentElement = document.querySelector("#current"),
          totalElement = document.querySelector("#total"),
          next = document.querySelector(".offer__slider-next"),
          prev = document.querySelector(".offer__slider-prev"),
          slidesWrapper = document.querySelector(".offer__slider-wrapper"),
          slidesField = document.querySelector(".offer__slider-inner"),
          width = window.getComputedStyle(slidesWrapper).width;

    currentSlideIndicator();

    slidesField.style.width = 100 * slides.length +"%";
    slidesField.style.display = "flex";
    slidesField.style.transition= "0.5s all";

    slidesWrapper.style.overflow = "hidden";

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = "relative";

    const indicators = document.createElement("ol"),
          dots = [];
    indicators.classList.add("carousel-indicators");
    
    slider.append(indicators);

    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i+1);
        dot.classList.add("dot");
        if (i==0) {
            dot.style.opacity= "1";
        }
        indicators.append(dot);
        dots.push(dot);
    }

    next.addEventListener("click", ()=>{
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) { 
            offset = 0;
        }else{
            offset += +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (currentSlide == slides.length) {            
            currentSlide = 1;
        } else {
            currentSlide++;
        }

        dotOpacity();
        currentSlideIndicator();
    });
    prev.addEventListener("click", ()=>{
        if (offset == 0) { 
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        }else{
            offset -= +width.slice(0, width.length - 2);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (currentSlide == 1) {
            currentSlide = slides.length;
        } else {
            currentSlide--;
        }

        dotOpacity();
        currentSlideIndicator();
    });

    dots.forEach(dot => {
        dot.addEventListener("click",(e) =>{
            const slideTo = e.target.getAttribute("data-slide-to");
            
            currentSlide = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo -1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            dotOpacity();
            currentSlideIndicator();
        });
    });

    function currentSlideIndicator(){
        if (slides.length < 10) {
            currentElement.textContent =  `0${currentSlide}`;
        } else {
            currentElement.textContent =  currentSlide;
        }
    }

    function dotOpacity(){
        dots.forEach(dot => dot.style.opacity = "0.5");
        dots[currentSlide - 1].style.opacity =1;
    }

    // function hideSlides(n) {
    //     slides.forEach((slide) => {
    //         slide.style.display = "none";
    //     });
    //     slides[n].style.display = "block";
    //     slideCounter(n);
    //     console.log(slides.length);
    // }
    // hideSlides(currentSlide);

    // function next() {
    //     if (currentSlide >= slides.length - 1) {
    //         currentSlide = 0;
    //     } else {
    //         currentSlide++;
    //     }
    //     hideSlides(currentSlide);
    // }

    // function previous() {
    //     if (currentSlide <= 0) {
    //         currentSlide = slides.length - 1;
    //     } else {
    //         currentSlide--;
    //     }
    //     hideSlides(currentSlide);
    // }

    // function slideCounter(n) {
    //     if (currentSlide < 10) {
        //     currentElement.innerHTML = `0${currentSlide}`;
        //     totalElement.innerHTML = `0${slides.length}`;
        // } else {
        //     currentElement.innerHTML = currentSlide ;
        //     totalElement.innerHTML = slides.length;
        // }
    // }

    // next.addEventListener("click", next);
    // prev.addEventListener("click", previous);
});