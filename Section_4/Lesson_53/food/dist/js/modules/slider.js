function slider({container,slide,nextArrow,prevArrow,totalCounter,currentCounter,wrapper,field}) {
    // Slider
    let currentSlide = 1,
        offset = 0; // My version

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          currentElement = document.querySelector(currentCounter),
          totalElement = document.querySelector(totalCounter),
          next = document.querySelector(nextArrow),
          prev = document.querySelector(prevArrow),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
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
        if (offset == wordToNumber(width) * (slides.length - 1)) { 
            offset = 0;
        }else{
            offset += wordToNumber(width);
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
            offset = wordToNumber(width) * (slides.length - 1);
        }else{
            offset -= wordToNumber(width);
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
            offset = wordToNumber(width) * (slideTo -1);
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

    function wordToNumber(word) {
        const number = word.replace(/\D/g, "");
        return +number;
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
}

export default slider;