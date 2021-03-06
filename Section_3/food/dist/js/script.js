window.addEventListener("DOMContentLoaded", () => {
    // tabs
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabsParent = document.querySelector(".tabheader__items")

    function hideTabContent() {
        tabsContent.forEach(item =>{
            item.classList.add("hide");
            item.classList.remove("show","fade");
        });
    
        tabs.forEach(item =>{
            item.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add("show","fade");
        tabsContent[i].classList.remove("hide",);
        tabs[i].classList.add("tabheader__item_active");
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click",(event) =>{
        const target = event.target;

        if (target && target.classList.contains("tabheader__item")){
            tabs.forEach ((item, i) =>{
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
        const t = Date.parse(endtime)- Date.parse(new Date()),
              days = Math.floor(t / (1000*60 * 60 * 24)),
              hours = Math.floor((t / (1000*60 *60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t /1000)%60);
        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function getZero (num) {
        if (num >=0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setClock(selector,endtime) {
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

            if(t.total <=0 ){
                clearInterval(timerInterval);
                days.innerHTML = "0";
                hours.innerHTML = "0";
                minutes.innerHTML = "0";
                seconds.innerHTML ="0";
            }
        }
    }

    setClock(".timer", deadline);

    // Modal

    const btn = document.querySelectorAll("[data-modal]"),
          closeModal = document.querySelector(".modal__close"),
          modal = document.querySelector(".modal");
    
    function showModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        clearInterval(modalTimer);
    }

    btn.forEach(i => {
        i.addEventListener("click",showModal);
    });

    function hideModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
    closeModal.addEventListener("click",hideModal);

    modal.addEventListener("click",(e) =>{
        if (e.target === modal) {
            hideModal();
        }
    });

    document.addEventListener("keydown", (e) =>{
        if(e.code === "Escape"){
            hideModal();
        }
    });

    // const modalTimer = setTimeout(showModal,2000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight){
           showModal();
           window.removeEventListener("scroll",showModalByScroll);
        }
    }

    window.addEventListener("scroll",showModalByScroll);


    // ???????????????????? ???????????? ?????? ????????????????

    class MenuCard{
        constructor(src, alt,title,descr,price,parentSelector, ...classes ){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }
        
        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement("div");

            if(this.classes.length === 0){
                this.element = "menu__item";
                element.classList.add(this.element);
            }else{
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML =`
                <img src=${this.src} alt="${this.alt}">
                <h3 class="menu__item-subtitle">???????? ${this.title}</h3>
                <div class="menu__item-descr">???????? ${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">????????:</div>
                    <div class="menu__item-total"><span>${this.price}</span> ??????/????????</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        "???????? '????????????'",
        "???????? '????????????' - ?????? ?????????? ???????????? ?? ?????????????????????????? ????????: ???????????? ???????????? ???????????? ?? ??????????????. ?????????????? ???????????????? ?? ???????????????? ??????????. ?????? ?????????????????? ?????????? ?????????????? ?? ?????????????????????? ?????????? ?? ?????????????? ??????????????????!",
        5,
        ".menu .container",
        // "menu__item",
        // "big"
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        "???????? '??????????????'",
        "?? ???????? ???????????????????? ???? ???????????????????? ???? ???????????? ???????????????? ???????????? ????????????????, ???? ?? ???????????????????????? ???????????????????? ????????. ?????????????? ????????, ????????????????????????, ???????????? - ?????????????????????? ???????? ?????? ???????????? ?? ????????????????!",
        7,
        ".menu .container",
        "menu__item"
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        "???????? '??????????????'",
        "???????? ???????????????????? - ?????? ???????????????????? ???????????? ????????????????????????: ???????????? ???????????????????? ?????????????????? ?????????????????? ??????????????????????????, ???????????? ???? ??????????????, ????????, ???????????? ?????? ????????????, ???????????????????? ???????????????????? ???????????? ???? ???????? ???????? ?? ?????????????????? ???????????????????????????? ??????????????.",
        9,
        ".menu .container",
        "menu__item"
    ).render();
});