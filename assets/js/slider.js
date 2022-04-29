function Slider(options) {
    window.addEventListener('load', function () {
        const sliderTrack = $(options.sliderTrack);
        const mySlides = $$(options.sliderItem);
        //Thời gian transition (Vd: transition: all 0.5s linear)
        const timeAnimation = 500;

        let dots;

        if (options.isDot) {
            dots = $$(options.sliderDots);
        }

        const prevBtn = $(options.arrowPrev);
        const nextBtn = $(options.arrowNext);

        let sliderTrackWidth = 0;

        //Lấy translateX
        let style = window.getComputedStyle(sliderTrack);
        let matrix = new WebKitCSSMatrix(style.transform);
        let positionX = matrix.m41;
        //End

        // Tính tổng width của tất cả slide
        for (let i = 0; i < mySlides.length; i++) {
            sliderTrackWidth += mySlides[i].offsetWidth;
        }

        // Set width cho sliderTrack
        sliderTrack.style.width = sliderTrackWidth + 'px';

        let slideIndex = 2;
        let slideWidth = $(options.sliderItem).offsetWidth;

        if (options.centerMode) {
            slideIndex = $('.slider--center').dataset.index;

            // Lấy width của slide không phải slide ở giữa
            slideWidth = $(`${options.sliderItem}:not(.slider--center)`).offsetWidth;
        }

        let newSlideIndex = slideIndex; // Ban đầu = 2
        let currentSlideIndex = slideIndex; // Ban đầu = 2

        let isSlideShow = true;

        // Dừng slide khi di chuột vào
        if (options.pauseOnHover) {
            const hoverSelector = $(options.hoverSelector);

            hoverSelector.onmouseenter = (e) => {
                isSlideShow = false;
            }

            hoverSelector.onmouseleave = (e) => {
                isSlideShow = true;
            }
        }

        if (options.autoPlay) {
            this.setInterval(() => {
                if (isSlideShow) {
                    nextBtn.click();
                }
            }, options.time);
        }

        nextBtn.addEventListener('click', handleNextBtn);
        prevBtn.addEventListener('click', handlePrevBtn);

        if (options.isDot) {
            [...dots].forEach(function (dot) {
                dot.onclick = () => {
                    currentSlideIndex = newSlideIndex;
                    newSlideIndex = parseInt(dot.dataset.index) + 2;

                    changeSlide();
                }
            })
        }

        function handleNextBtn() {
            currentSlideIndex = newSlideIndex;

            newSlideIndex++;

            changeSlide();

            handleSlideToLoop(); // Check xem slide tới cuối chưa

            // Khi slide chạy remove event và kích hoạt lại event sau khi slide chạy xong
            nextBtn.removeEventListener('click', handleNextBtn);
            prevBtn.removeEventListener('click', handlePrevBtn);

            setTimeout(() => {
                nextBtn.addEventListener('click', handleNextBtn);
                prevBtn.addEventListener('click', handlePrevBtn);
            }, timeAnimation);
        }

        function handlePrevBtn() {
            currentSlideIndex = newSlideIndex;

            newSlideIndex--;

            changeSlide();

            handleSlideToLoop(); // Check xem slide có phải là slide số 1 không => Chuyển về slide số ...

            // Khi slide chạy remove event và kích hoạt lại event sau khi slide chạy xong
            nextBtn.removeEventListener('click', handleNextBtn);
            prevBtn.removeEventListener('click', handlePrevBtn);

            setTimeout(() => {
                nextBtn.addEventListener('click', handleNextBtn);
                prevBtn.addEventListener('click', handlePrevBtn);
            }, timeAnimation);
        }

        // Chuyển slide
        function changeSlide() {
            HandleChangeSlide();

            sliderTrack.style.transition = `transform ${timeAnimation / 1000}s ease`;
        }

        // Xử lý chuyển slide
        function HandleChangeSlide() {
            if (options.centerMode) {
                mySlides[currentSlideIndex].classList.remove('slider--center');
                mySlides[newSlideIndex].classList.add('slider--center');
            }

            //Handle Dots
            if (options.isDot) {
                if (newSlideIndex <= mySlides.length - 2 && newSlideIndex >= 1) {
                    if (newSlideIndex == mySlides.length - 2) {
                        $(`${options.sliderDots}.slider__dot--active`).classList.remove('slider__dot--active');
                        dots[0].classList.add('slider__dot--active');
                    } else if (newSlideIndex == 1) {
                        $(`${options.sliderDots}.slider__dot--active`).classList.remove('slider__dot--active');
                        dots[dots.length - 1].classList.add('slider__dot--active');
                    } else {
                        $(`${options.sliderDots}.slider__dot--active`).classList.remove('slider__dot--active');
                        dots[newSlideIndex - 2].classList.add('slider__dot--active');
                    }
                }
            }

            positionX += (currentSlideIndex - newSlideIndex) * slideWidth;

            sliderTrack.style.transform = `translateX(${positionX}px)`;
        }

        // Check khi newSlide tới cuối, setTimeout đợi khi kết thúc sự kiện transition rồi set newSlide về đầu để loop
        function handleSlideToLoop() {
            if ((newSlideIndex >= options.sliderLength + 2) || (newSlideIndex <= 1)) {
                this.setTimeout(() => {
                    currentSlideIndex = newSlideIndex;

                    if (newSlideIndex >= options.sliderLength + 2) {
                        newSlideIndex = 2;
                    } else {
                        //Nếu ở slide số 1 
                        newSlideIndex = options.sliderLength + 1;
                    }

                    sliderTrack.style.transition = 'none';

                    HandleChangeSlide();
                }, timeAnimation); // gán ở trên cùng = 500
            }
        }
    })
}