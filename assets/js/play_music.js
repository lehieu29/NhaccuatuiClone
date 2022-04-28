// const playProcess = $('.box__playing__process');

// playProcess.onclick = (e) => {
//     
// }

function renderPlayMusic(data, indexCategory, indexGenre) {
    //top100...
    let listMusic = renderListMusic(data.songs);

    return `
        <div class="breadCrumb">
            <span class="hover--primary cursor--pointer breadCrumb__text">Nghe nhạc</span>
            > 
            <span class="hover--primary cursor--pointer breadCrumb__text breadCrumb__playlist">Playlist ${data.name}</span>
            > 
            <span class="hover--primary cursor--pointer breadCrumb__text">V.A</span>
        </div>

        <div class="name__title">Top 100 ${data.name} Hay Nhất</div>
        <span style="font-size: 2.2rem; color: #333; margin: 0 4px;">-</span>
        <div class="name__singer hover--primary cursor--pointer">V.A</div>

    <div class="box__playing">
        <audio class="play__music"></audio>
        <img src="${boxRightArray[indexCategory][indexGenre + 1].image}" alt="" class="box__playing__img">

        <div class="box__playing__process__wrapper cursor--pointer">
            <div class="box__playing__process">
                <div class="box__playing__curr__process"></div>
            </div>
        </div>

        <div class="box__playing__action">
            <div class="box__playing__left">
                <div class="box__playing__prev cursor--pointer" style="background-size: 10px 12px;"></div>
                <div class="box__playing__play cursor--pointer" style="background-size: 15px 20px;"></div>
                <div class="box__playing__next cursor--pointer" style="background-size: 10px 12px;"></div>

                <div class="box__playing__time">
                    <div class="box__playing__currentTime">00:00</div>
                    <span style="color: #848484; margin-right: 4px">/</span>
                    <div class="box__playing__totalTime">00:00</div>
                </div>
            </div>

            <div class="box__playing__right">
                <div class="box__autoplay__wrapper">
                    <label for="box__autoplay" class="box__autoplay cursor--pointer">
                        <input type="checkbox" name="" id="box__autoplay" hidden>
                        <span class="box__autoplay__check"></span>
                    </label>
                </div>
                <div class="box__random__play cursor--pointer" style="background-size: 22px 20px;"></div>
                <div class="box__repeat__play cursor--pointer" style="background-size: 16px 14px;"></div>

                <div class="box__switch__quality__wrapper cursor--pointer">
                    128kbps
                    <ul class="box__switch__quality__list">
                        <div class="box__switch__quality__title">Chất lượng</div>
                        <li class="box__switch__quality__item">320kbps</li>
                        <li class="box__switch__quality__item">128kbps</li>
                    </ul>
                </div>

                <div class="box__volume__control cursor--pointer" style="background-size: 34px 21px;">
                    <div class="box__volume__version ver-3" style="background-size: 20px"></div>
                    <div class="box__volume__process__wrapper">
                        <div class="box__volume__process">
                            <div class="box__curr__volume"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>

    <ul class="list__song__album">
        ${listMusic}
    </ul>

    <div class="box__menu__player">
        <div class="box__user__upload">
            <img src="https://avatar-nct.nixcdn.com/avatar/2011/08/23/nhaccuatui.jpg" alt="" class="box__user__upload__img">
            <div class="box__user__upload__info">
                <div class="box__user__upload__from">Tạo bởi: </div> 
                <div class="box__user__upload__name">nhaccuatui</div>
            </div>
        </div>

        <ul class="box__menu__list">
            <li class="box__menu__item hover--primary cursor--pointer">
                <p style="background: url(https://stc-id.nixcdn.com/v11/images/ic_heart.png) no-repeat; width: 20px; height: 20px; margin-right: 4px"></p>
                Thêm vào
            </li>
            <li class="box__menu__item hover--primary cursor--pointer">
                <p style="background: url('https://stc-id.nixcdn.com/v11/images/ic_download.png') no-repeat; width: 20px; height: 20px; margin-right: 4px"></p>
                Tải playlist
            </li>
            <li class="box__menu__item hover--primary cursor--pointer">
                <p style="background: url(https://stc-id.nixcdn.com/v11/images/ic_share.png) no-repeat; height: 20px; width: 24px; margin-right: 4px"></p>
                Chia sẻ
            </li>
        </ul>
    </div>

    <div class="box__menu__tag">
        <div style="display: flex; align-items: center">
            <div class="box__menu__tag__title">
                Tags:
            </div>
            <ul class="box__tag__list">
                <li class="box__tag__item cursor--pointer">Nhạc Trẻ</li>
                <li class="box__tag__item cursor--pointer">Du Lịch</li>
                <li class="box__tag__item cursor--pointer">Mua Sắm - Shopping</li>
                <li class="box__tag__item cursor--pointer">Đi Dạo - Chạy Bộ</li>
                <li class="box__tag__item cursor--pointer">Bar - Club</li>
                <li class="box__tag__item cursor--pointer">Top 100</li>
            </ul>
        </div>
        <div class="box__menu__tag__more">
            <div class="box__menu__tag__more__icon"></div>
            <h4 style="font-weight: 500; margin: 0" class="cursor--pointer">Xem thêm</h4>
        </div>
    </div>

    <div class="box__lyric__wrapper">
        <div class="box__lyric__title">
            <h3 class="box__lyric__name__wrapper">
                Lời bài hát:
                <span class="box__lyric__name">Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh</span>
            </h3>

            <div class="box__lyric__musician__wrapper">
                Nhạc sĩ:
                <span class="box__lyric__musician" style="margin-left: 4px">V.A</span>
            </div>
            <div class="box__lyric__userUpload__wrapper">
                Lời đăng bởi:
                <span class="box__lyric__userUpload cursor--pointer" style="margin-left: 4px; color: var(--primary-color);">V.A</span>
            </div>
        </div>

        <div class="box__lyric">
            
        </div>
    `
}

function renderListMusic(data) {
    return data.map((item, index) => {
        return `
            <li class="list__song__item">
                <div class="list__song__info">
                    <span class="list__song__order">${index + 1}.</span>
                    
                    <div class="list__song__name hover--primary cursor--pointer">${item.title}</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem; margin: 0 4px;">-</span>
                    <div class="list__song__singer hover--primary cursor--pointer">${item.creator}</div>
                </div>

                <div class="list__song__action">
                    <div class="list__song__play cursor--pointer"></div>
                    <div class="list__song__addAlbum cursor--pointer"></div>
                    <div class="list__song__download cursor--pointer"></div>
                    <div class="list__song__playNewTab cursor--pointer"></div>
                </div>
            </li>
        `;
    }).join('');
}

function handlePlayMusic(data, index) {
    var currentIndex = index;
    var currentVolume = 1;
    var isPlaying = false;
    var isRandom = false;
    var isRepeat = false;
    var playedPlaylist = [];
    var config = JSON.parse(localStorage.getItem("Nhaccuatui")) || {};

    // data 100 song
    const audioPlayMusic = $('.play__music');

    start();

    function start() {
        loadCurrentSong();

        // Phát nhạc
        $('.box__playing__play').classList.add('pause');
        isPlaying = true;
        audioPlayMusic.play();



        // Load config
        loadConfig();

        handleEvents();
    }

    function setConfig(key, value) {
        config[key] = value;
        localStorage.setItem("Nhaccuatui", JSON.stringify(config));
    }

    function loadConfig() {

        if (config.isRandom) isRandom = config.isRandom;
        if (config.isRepeat) isRepeat = config.isRepeat;
        
        if (config.currentVolume >= 0) currentVolume = config.currentVolume;

        //Active 2 nút
        $('.box__random__play').classList.toggle('active', isRandom);
        $('.box__repeat__play').classList.toggle('active', isRepeat);

        // Xử lý Volume
        renderVersion();
        changeWidthVolume();
        if (currentVolume == 0) {
            $('.box__volume__control').classList.add('mute');
        }
    }

    function loadCurrentSong() {
        audioPlayMusic.src = data[currentIndex].music;

        activeSongPlayMusic();

        resetTime();
    }

    function handleEvents() {
        // Xử lý khi ấn btn play/pause
        const playPauseBtn = $('.box__playing__play');
        playPauseBtn.onclick = () => {
            playPauseBtn.classList.toggle('pause');

            if (isPlaying) {
                audioPlayMusic.pause();
                isPlaying = false;
            } else {
                audioPlayMusic.play();
                isPlaying = true;
            }
        }

        // Xử lý khi ấn btn next
        const nextBtnPlay = $('.box__playing__next');
        nextBtnPlay.onclick = () => {
            nextSong();

            loadCurrentSong();

            console.log(currentIndex);

            if (!isPlaying) {
                // Nếu isPlaying = false
                playPauseBtn.click();
            } else {
                audioPlayMusic.play();
                isPlaying = true;
            }
        }

        //Xử lý khi ấn btn prev
        const prevBtnPlay = $('.box__playing__prev');
        prevBtnPlay.onclick = () => {
            if (!isRandom) {
                prevSong();
            } else {
                randomSong();
            }

            loadCurrentSong();

            if (!isPlaying) {
                // Nếu isPlaying = false
                playPauseBtn.click();
            } else {
                audioPlayMusic.play();
                isPlaying = true;
            }
        }

        // Xử lý khi ấn btn random
        const randomBtnPlay = $('.box__random__play');
        randomBtnPlay.onclick = () => {
            isRandom = !isRandom;

            randomBtnPlay.classList.toggle('active');

            setConfig("isRandom", isRandom);
        }

        // Xử lý khi ấn vào btn Repeat
        const repeatBtnPlay = $('.box__repeat__play');
        repeatBtnPlay.onclick = () => {
            isRepeat = !isRepeat;

            repeatBtnPlay.classList.toggle('active');

            setConfig("isRepeat", isRepeat);
        }

        // Xử lý khi ấn vào btn volume
        const volumeBtnPlay = $('.box__volume__control'); //toggle class mute
        let oldVolume;
        volumeBtnPlay.onclick = () => {
            // Nếu âm lượng đang khác 0 thì cho bằng 0
            if (currentVolume != 0) {
                oldVolume = currentVolume;
                currentVolume = 0;
                audioPlayMusic.volume = 0;
            } else if (currentVolume == 0) {
                // Nếu âm lượng đang bằng 0 thì gán lại giá trị cũ
                console.log(oldVolume);
                if(oldVolume) {
                    currentVolume = oldVolume;
                } else {
                    currentVolume = 1;
                }
            }

            setConfig("currentVolume", currentVolume);


            volumeBtnPlay.classList.toggle('mute');

            // Render version là 3 cái vòng vòng )))
            renderVersion();

            // Set width cho thanh volume
            changeWidthVolume();
        }

        // Xử lý khi next bài hát
        function nextSong() {
            if (!isRepeat) {
                if (isRandom) {
                    randomSong();
                } else {
                    currentIndex++;

                    if (currentIndex == data.length) {
                        currentIndex = 0;
                    }
                }
            }
        }

        // Xử lý khi prev bài hát
        function prevSong() {
            if (!isRepeat) {
                if (isRandom) {
                    randomSong();
                } else {
                    currentIndex--;

                    if (currentIndex < 0) {
                        currentIndex = data.length - 1;
                    }
                }
            }
        }

        // Xử lý khi random bài hát
        function randomSong() {
            playedPlaylist.push(currentIndex);

            let newIndex = Math.floor(Math.random() * data.length); // Random từ 0 -> 99 

            // Nếu mảng đã đầy thì reset thành mảng trống
            if (playedPlaylist.length == data.length) {
                playedPlaylist = [];
            }

            //playedPlaylist.push()
            for (let i = 0; i < playedPlaylist.length; i++) {
                while (newIndex === playedPlaylist[i]) {
                    newIndex = Math.floor(Math.random() * data.length);
                }
            }

            currentIndex = newIndex;
        }

        // Xử lý khi bài hát chạy (thời gian thay đổi)
        const currProcess = $('.box__playing__curr__process'); // Thanh chạy tiến độ nhạc
        const parentProcess = currProcess.offsetParent;
        const currTime = $('.box__playing__currentTime'); // Thời gian chạy tiến độ nhạc
        const totalTime = $('.box__playing__totalTime');

        audioPlayMusic.ontimeupdate = () => {
            if (audioPlayMusic.duration) {
                currTime.textContent = renderTime(audioPlayMusic.currentTime);
                totalTime.textContent = renderTime(audioPlayMusic.duration);


                const processWidth = Math.floor(audioPlayMusic.currentTime / audioPlayMusic.duration * parentProcess.offsetWidth)

                currProcess.style.width = processWidth + 'px';
            }

            // Tính thời gian ra theo định dạng phút:giây
            function renderTime(n) {
                let minute = parseInt(n / 60);
                let second = parseInt(n - minute * 60);

                if (minute < 10) {
                    minute = '0' + minute;
                }

                if (second < 10) {
                    second = '0' + second;
                }

                return `${minute}:${second}`
            }
        }

        // Xử lý khi tua
        parentProcess.onclick = (e) => {
            const seekWidth = e.clientX - parentProcess.getBoundingClientRect().left;

            audioPlayMusic.currentTime = seekWidth / parentProcess.offsetWidth * audioPlayMusic.duration;
        }

        // Xử lý khi hết bài hát
        audioPlayMusic.onended = () => {
            nextBtnPlay.click();
        }

        // Xử lý tăng giảm âm lượng
        const boxVolumeProcess = $('.box__volume__process__wrapper');
        boxVolumeProcess.onclick = (e) => {
            const volumeHeight = boxVolumeProcess.offsetHeight - (e.clientY - boxVolumeProcess.getBoundingClientRect().top);

            currentVolume = volumeHeight / boxVolumeProcess.offsetHeight;

            // Nếu currentVolume < 0 thì gán = 0
            if (currentVolume < 0) currentVolume = 0;

            setConfig("currentVolume", currentVolume);

            if (currentVolume != 0) {
                if (volumeBtnPlay.matches('.mute')) {
                    volumeBtnPlay.classList.remove('mute');
                }
            }

            if (currentVolume == 0) {
                if (!volumeBtnPlay.matches('.mute')) {
                    volumeBtnPlay.classList.add('mute');
                }
            }

            //Set volume cho audio ở trong function renderVersion

            renderVersion();

            changeWidthVolume();

            e.stopPropagation();
        }

        // Xử lý khi click vào item music
        const listSongs = $$('.list__song__info');
        [...listSongs].forEach((itemSong, index) => {
            itemSong.onclick = () => {
                currentIndex = index;

                loadCurrentSong();

                audioPlayMusic.play();
            }
        })
    }

    // Xóa order songs thêm ảnh gif, đổi lyric
    function activeSongPlayMusic() {
        activeGifActive();

        changeLyricSong();
    }

    // Xóa order thêm ảnh gif
    function activeGifActive() {
        const listSongAlbum = $('.list__song__album');
        const listItemPlay = $$('.list__song__item');

        if ($('.list__song__item.list__song__item--active')) {
            $('.list__song__item.list__song__item--active').classList.remove('list__song__item--active');
        }
        listItemPlay[currentIndex].classList.add('list__song__item--active');

        listSongAlbum.scrollTop = listItemPlay[currentIndex].offsetHeight * currentIndex;
    }

    function changeLyricSong() {
        const boxLyricName = $('.box__lyric__name');

        boxLyricName.textContent = data[currentIndex].title;
    }

    function resetTime() {
        const currProcess = $('.box__playing__curr__process'); // Thanh chạy tiến độ nhạc
        const currTime = $('.box__playing__currentTime'); // Thời gian chạy tiến độ nhạc
        const totalTime = $('.box__playing__totalTime');

        currProcess.style.width = '0';

        currTime.textContent = '00:00';
        totalTime.textContent = '00:00';
    }

    // Xử lý render ảnh version âm lượng
    function renderVersion() {
        const volumeVersion = $('.box__volume__version');

        if (currentVolume >= 0.7) {
            volumeVersion.classList.remove('ver-1');
            volumeVersion.classList.remove('ver-2');
            volumeVersion.classList.add('ver-3');
        } else if (0.3 <= currentVolume && currentVolume < 0.7) {
            volumeVersion.classList.remove('ver-1');
            volumeVersion.classList.add('ver-2');
            volumeVersion.classList.remove('ver-3');
        } else if (currentVolume > 0) {
            volumeVersion.classList.add('ver-1');
            volumeVersion.classList.remove('ver-2');
            volumeVersion.classList.remove('ver-3');
        } else {
            volumeVersion.classList.remove('ver-1');
            volumeVersion.classList.remove('ver-2');
            volumeVersion.classList.remove('ver-3');
        }

        audioPlayMusic.volume = currentVolume;
    }

    // Xử lý set width cho thanh volume
    function changeWidthVolume() {
        const boxVolumeProcess = $('.box__volume__process__wrapper');
        const boxCurrVolume = $('.box__curr__volume');

        boxVolumeProcess.style.display = 'block'; // Để lấy được height xong ẩn đi

        const volumeHeight = currentVolume * boxVolumeProcess.offsetHeight;

        boxVolumeProcess.style.display = 'none';

        boxCurrVolume.style.height = volumeHeight + 'px';
    }
}
