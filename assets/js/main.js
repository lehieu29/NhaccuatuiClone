const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

console.log("API mình lấy từ: https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST");

const chartsMusic = [
    [
        {
            name: "Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh",
            singer: "ERIK",
            image: "https://avatar-ex-swe.nixcdn.com/song/2022/01/26/4/e/f/e/1643184497199.jpg",
        },
        {
            name: "Đế Vương",
            singer: "Đình Dũng, ACV",
        },
        {
            name: "Hoa Tàn Tình Tan",
            singer: "Giang Jolle",
        },
        {
            name: "Có Em Đây",
            singer: "Như Việt, Dunghoangpham, ACV",
        },
        {
            name: "Là Do Em Xui Thôi",
            singer: "Khói, Sofia, Châu Đăng Khoa",
        },
        {
            name: "Có Hẹn Với Thanh Xuân",
            singer: "MONSTAR",
        },
        {
            name: "Thức Giấc",
            singer: "Da LAB",
        },
        {
            name: "Chạy Về Nơi Phía Anh",
            singer: "Khắc Việt",
        },
        {
            name: "Tệ Thật, Anh Nhớ Em",
            singer: "Thanh Hưng",
        },
        {
            name: "Cưới Thôi",
            singer: "Masew, Masiu, Bray, TAP",
        },
    ],
    [
        {
            name: "Stay",
            singer: "The Kid LAROI, Justin Bieber",
            image: "https://avatar-ex-swe.nixcdn.com/song/2021/07/09/5/5/8/2/1625815274622.jpg",
        },
        {
            name: "abcdefu",
            singer: "GAYLE",
        },
        {
            name: "Double Take",
            singer: "Dhruv",
        },
        {
            name: "Light Switch",
            singer: "Charlie Puth",
        },
        {
            name: "Head In The Clouds",
            singer: "Hayd",
        },
        {
            name: "Thunder",
            singer: "Gabry Ponte, LUM!X, Prezioso",
        },
        {
            name: "Industry Baby",
            singer: "Lil Nas X, Jack Harlow",
        },
        {
            name: "Like My Father",
            singer: "Jax",
        },
        {
            name: "Build A Bitch",
            singer: "Bella Poarch",
        },
        {
            name: "Bad Habits",
            singer: "Ed Sheeran",
        },
    ],
    [
        {
            name: "Still Life",
            singer: "BIGBANG",
            image: "https://avatar-ex-swe.nixcdn.com/song/2022/04/05/a/4/7/f/1649125037969.jpg",
        },
        {
            name: "Tomboy",
            singer: "(G)I-DLE",
        },
        {
            name: "DARARI",
            singer: "TREASURE",
        },
        {
            name: "Money",
            singer: "LISA",
        },
        {
            name: "O.O",
            singer: "NMIXX",
        },
        {
            name: "Lalisa",
            singer: "LISA",
        },
        {
            name: "My Bag",
            singer: "(G)I-DLE",
        },
        {
            name: "JIKJIN",
            singer: "TREASURE",
        },
        {
            name: "Loco",
            singer: "ITZY",
        },
        {
            name: "Dumb Dumb",
            singer: "JEON SOMI",
        },
    ]
];

const chartsMV = [
    [
        {
            name: "Chạy Về Nơi Phía Anh",
            singer: "Khắc Việt",
            image: "./assets/img/chayvenoiphiaanh.jpg",
        },
        {
            name: "Lỡ Mai Này",
            singer: "Bozitt, LilGee Phạm",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/04/04/7/e/4/f/1649034549603.jpg"
        },
        {
            name: "Có Em Là Đủ",
            singer: "Will",
            image: "./assets/img/coemladu.jpg"
        },
        {
            name: "Người Thương Em Cả Đời Em Xua Đuổi",
            singer: "Như Việt",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/03/24/4/b/3/6/1648110115130.jpg"
        },
        {
            name: "Dừng Làm Bạn",
            singer: "Mr White",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/04/01/a/c/f/d/1648801793780.jpg"
        }
    ],
    [
        {
            name: "Abcdefu",
            singer: "GAYLE",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/03/27/7/7/e/8/1648377644464_536.jpg",
        },
        {
            name: "Women",
            singer: "Doja Cat",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/03/28/3/0/8/9/1648472827227.jpg"
        },
        {
            name: "Beg For You",
            singer: "Charli XCX, Rina Sawayama",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/03/26/d/9/1/0/1648279280342.jpg"
        },
        {
            name: "Light Switch",
            singer: "Charlie Puth",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/03/28/3/0/8/9/1648472241232.jpg"
        },
        {
            name: "Frozen",
            singer: "Madonna, Sickick, 070 Shake",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/04/16/8/e/a/0/1650113301839.jpg"
        }
    ],
    [
        {
            name: "Lalisa",
            singer: "LISA",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2021/09/10/6/3/e/8/1631271393534_536.jpg",
        },
        {
            name: "Still Life",
            singer: "BIGBANG",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/04/05/2/9/b/a/1649125542335.jpg"
        },
        {
            name: "O.O",
            singer: "NMIXX",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/03/22/1/6/a/c/1647930533442.jpg"
        },
        {
            name: "Doom Doom Ta",
            singer: "TRI.BE",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2022/04/12/8/6/a/8/1649776256868.jpg"
        },
        {
            name: "Money (Performance Video)",
            singer: "LISA",
            image: "https://avatar-ex-swe.nixcdn.com/mv/2021/09/24/1/e/9/a/1632454903356.jpg"
        }
    ]
];

const goToPage = $('.goToPage');

// Go to page
window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop || window.scrollY;

    if (scrollTop > 0) {
        goToPage.style.display = 'block';
    } else if (scrollTop === 0) {
        goToPage.style.display = 'none';
    }

    goToPage.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })
}

// Bật/tắt quảng cáo
const inputAdvertise = $('.advertise__wrapper input[type="checkbox"]');

inputAdvertise.onchange = () => {
    const advertiseText = $('.advertise__text');

    if (!inputAdvertise.checked) {
        advertiseText.style.top = '-15px';
    } else {
        advertiseText.style.top = '15px';
    }
};

// Bật/tắt modal Login
function toggleModal(formBtnSelector, formSelector) {
    const headerBtn = $(formBtnSelector);
    const formElement = $(formSelector);

    const formModal = formElement.querySelector('.form__nct');
    const blurElement = formElement.querySelector('.blur');
    const formClose = formElement.querySelector('.form__close');

    const formGroup = formElement.querySelectorAll('.form__group');
    const inputElements = formElement.querySelectorAll('.form__group input');
    const errorElements = formElement.querySelectorAll('.form__error');

    headerBtn.onclick = () => {
        formModal.style.display = 'block';
        blurElement.style.display = 'block';
    }

    formClose.onclick = () => {
        formModal.style.display = 'none';
        blurElement.style.display = 'none';

        [...formGroup].forEach((form) => {
            if (form.matches('.success')) {
                form.classList.remove('success');
            }

            if (form.matches('.invalid')) {
                form.classList.remove('invalid');
            }
        });

        [...inputElements].forEach((inputElement) => {
            inputElement.value = "";
        });

        [...errorElements].forEach((error) => {
            error.textContent = '';
        })
    }
}

function handleFormLogin() {
    const formLogin = $('.form__login');
    const formError = $('.form__login .form__error');

    const userName = formLogin.querySelector('#user-name');
    const passWord = formLogin.querySelector('#password');

    formLogin.onsubmit = (e) => {
        e.preventDefault();

        let config = JSON.parse(localStorage.getItem("NhaccuatuiAccount")) || {};

        let isLogin = false;

        if (config.account) {
            let account = config.account;

            for(let i = 0; i < account.length; i++) {
                if (userName.value === account[i].userName && passWord.value === account[i].password) {
                    renderLogin('.form__login', userName.value);
                    isLogin = true;
                }
            }
        }

        
        if (!isLogin) {
            formError.innerHTML = `<div class="error__text"><i class="ti-close form__error__icon"></i>Sai tài khoản hoặc mật khẩu</div>`;
        }
    }
}

function renderLogin(form, username) {
    const formModal = document.querySelector(`${form} .form__nct`);
    const blurElement = document.querySelector(`${form} .blur`);

    formModal.style.display = 'none';
    blurElement.style.display = 'none';

    const loginElement = $('.signup__login');
    const userName = $('.user__name');

    loginElement.classList.add('login');
    userName.textContent = username;

    logout();
}

function logout() {
    const logOut = $('#logout');

    logOut.onclick = function() {
        const loginElement = $('.signup__login');
        loginElement.classList.remove('login');
    }
}

//  End handle modal login

// Chuyển tab select (Top 20)
function handleTransferTabSelect(selector, option) {
    const tabSelects = $$(`${selector} .charts__select__item`);
    const contentSelect = $(`${selector} .charts__list`);

    [...tabSelects].forEach((tab, index) => {
        tab.onclick = function () {
            $(`${selector} .charts__select__item.charts__select--active`).classList.remove('charts__select--active');
            tab.classList.add('charts__select--active');

            if (option === 0) {
                contentSelect.innerHTML = renderContentTabMusic(chartsMusic, index, option);
            } else if (option === 1) {
                contentSelect.innerHTML = renderContentTabMusic(chartsMV, index, option);
            }
        }
    });
}

// Top 20 (ở Home)
function renderContentTabMusic(charts, index, option) {
    return charts[index].map((music, index) => {
        let singer = renderName(music.singer);

        if (index == 0) {
            if (option == 0) {
                // Music
                return `
                    <li class="charts__item">
                        <div class="charts__item__img__wrapper">
                            <img src="${music.image}" alt="" class="charts__item__img">
                            <span class="charts__item__order">${index + 1}</span>
                        </div>
                        <div class="charts__item__info">
                            <div class="charts__item__name">${music.name}</div>
                            ${singer}
                        </div>
                    </li>
                `;
            } else if (option == 1) {
                // MV
                return `
                    <li class="charts__item">
                        <div class="charts__item__info__wrapper cursor--pointer">
                            <div class="blur"></div>
                            <img src="${music.image}" alt="" class="charts__item__img" style="width: 100%; height: auto">
                            <span class="charts__item__order">${index + 1}</span>
                            <a href="" class="list__album__play"></a>
                            <div class="charts__item__info">
                                <div class="charts__item__name">${music.name}</div>
                                ${singer}
                            </div>
                        </div>
                    </li>
                `;
            }
        } else {
            if (option == 0) {
                return `
                    <li class="charts__item">
                        <span class="charts__item__order">${index + 1}</span>
                        <div class="charts__item__info">
                            <div class="charts__item__name">${music.name}</div>
                            ${singer}
                        </div>
                    </li>
                `
            } else if (option == 1) {
                return `
                    <li class="charts__item">
                        <div class="charts__item__info__wrapper cursor--pointer">
                            <div class="blur"></div>
                            <img src="${music.image}" alt="" class="charts__item__img" style="width: 110px; height: auto">
                            <span class="charts__item__order">${index + 1}</span>
                            <a href="" class="list__album__play">
                                <img src="https://stc-id.nixcdn.com/v11/images/icon-48x48-play.png" alt="" style="width: 28px; height: 28px">
                            </a>
                        </div>
                        <div class="charts__item__info">
                            <div class="charts__item__name">${music.name}</div>
                            ${singer}
                        </div>
                    </li>
                `;
            }
        }
    }).join('');
}

function renderName(singerName) {
    let singers = singerName.split(', ');

    let singer;

    if (singers.length > 1) {
        singer = singers.map((singer, index) => {
            if (index === singers.length - 1) {
                return `<div class="charts__item__singer">${singer}</div>`
            }

            return `
                <div class="charts__item__singer">${singer}</div>
                <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
            `
        }).join('');
    } else {
        singer = `<div class="charts__item__singer">${singers}</div>`
    }

    return singer;
};

// End render top 20

//Begin render top 100

// Begin top 100
// https://raw.githubusercontent.com/lehieu29/NhaccuatuiClone/master/API.json
// ../API.json
// const urlAPI = "../API.json"
const urlAPI = "https://raw.githubusercontent.com/lehieu29/NhaccuatuiClone/master/API.json";

const boxRightArray = [
    [
        "Việt Nam",

        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545.jpg",
            text: "Top 100 Nhạc Trẻ Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600244061118.jpg",
            text: "Top 100 Nhạc Trữ Tình Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/29/f/9/f/7/1601348348354.jpg",
            text: "Top 100 Nhạc Trịnh Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/29/f/9/f/7/1601348292491.jpg",
            text: "Top 100 Nhạc Tiền Chiến Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2021/04/07/2/7/0/9/1617776161396.jpg",
            text: "Top 100 Rap Việt Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600244112678.jpg",
            text: "Top 100 Remix Việt Hay Nhất"
        }
    ],
    [
        "Âu Mỹ",

        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2021/11/02/b/4/7/0/1635818384011.jpg",
            text: "Top 100 Pop USUK Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600239245257.jpg",
            text: "Top 100 Electronica/Dance Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/26/b/e/2/9/1622014521880.jpg",
            text: "Top 100 Rap/ Hip Hop Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600250971140.jpg",
            text: "Top 100 Blues/Jazz Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600250721042.jpg",
            text: "Top 100 Nhạc Country Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/26/b/e/2/9/1622014540231.jpg",
            text: "Top 100 Nhạc Latin Hay Nhất"
        },
    ],
    [
        "Châu Á",

        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600239362951.jpg",
            text: "Top 100 Nhạc Hàn Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600250531723.jpg",
            text: "Top 100 Nhạc Hoa Hay Nhất"
        },
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2021/04/08/5/5/a/6/1617867524987.jpg",
            text: "Top 100 Nhạc Nhật Hay Nhất"
        }
    ],
    [
        "Không Lời",
        {
            image: "https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600250876973.jpg",
            text: "Top 100 Nhạc Không Lời Hay Nhất"
        }
    ]
];

const slider = $('.slider');

const boxLeft = $('.box--left');
const boxRight = $('.box--right');

const charts = $$('.charts');

//Get tab select top 100
const top100s = $$('.top100__music .sub__menu__item');

fetch(urlAPI)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        handleTransferTop100(data);
    })

function handleTransferTop100(data) {
    // Bắt sự kiện click top 100
    [...top100s].forEach((genre, index) => {
        genre.onclick = () => {
            let indexCategory = index; //Category: Việt Nam, Âu Mỹ, Châu Á, Không Lời
            let indexGenre = 0; // Default = 0 //Genre: Nhạc Trẻ, Trữ Tình, Tiền Chiến, ...

            switch (indexCategory) {
                case 0: {
                    boxLeft.innerHTML = renderMusic(data.songs.top100_VN, indexGenre);
                    break;
                }
                case 1: {
                    boxLeft.innerHTML = renderMusic(data.songs.top100_AM, indexGenre);
                    break;
                }
                case 2: {
                    boxLeft.innerHTML = renderMusic(data.songs.top100_CA, indexGenre);
                    break;
                }
                case 3: {
                    boxLeft.innerHTML = renderMusic(data.songs.top100_KL, indexGenre);
                    break;
                }
            }

            handleEventToRenderPagePlayMusic(data, indexCategory, indexGenre);
            handleTransferGenre(data, indexCategory);

            // Ẩn slider
            slider.style.display = 'none';

            // Render Box Right
            renderBoxRight(indexGenre);

            // Xử lý khi click vào các element box right
            handleEventsBoxRight(data);

            // Reset title document
            document.title = 'NhacCuaTui Clone - Nghe nhạc mới HOT nhất, tải nhạc MP3 chất lượng cao';

            // Go to page
            goToPage.click();
        }
    })
}

function renderHomePage() {
    const logoHome = $('.header__logo');

    logoHome.onclick = function() {
        slider.style.display = 'block';
        boxLeft.innerHTML = `
        <div class="list__album__wrapper">
        <div class="list__album__heading">
            <h2>KHÁM PHÁ MỚI</h2>
        </div>

        <ul class="list__album">
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/nhactregaynghien.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Nhạc Trẻ Gây Nghiện</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/kpop_on.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">K-POP ON!</span>
            </li>

            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/top20_vpop.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">20 Ca Khúc Nhạc Trẻ Hot Nhất Tuần</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/kpop_daebak.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">K-Pop Deabak</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/debut_song.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">US-UK Debut Songs</span>
            </li>
        </ul>
    </div>

    <div class="list__album__wrapper">
        <div class="list__album__heading">
            <h2>NHỮNG NGÀY GIÓ MƯA RƠI</h2>
        </div>

        <ul class="list__album">
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/rain.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Dưới Những Cơn Mưa - Nhạc Buồn Và Tâm Trạng</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/street.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Mưa Qua Phố Vắng - Nhạc Trữ Tình Hay Nhất Về Mưa</span>
            </li>

            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/kyucmua.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Ký Ức Mưa</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/muacungnoinho.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Mưa Cùng Nỗi Nhớ</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/conmuathanhxuan.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Cơn Mưa Tuổi Thanh Xuân</span>
            </li>
        </ul>
    </div>

    <div class="list__album__wrapper">
        <div class="list__album__heading">
            <h2>ĐÀ LẠT CUỐI TUẦN</h2>
        </div>

        <ul class="list__album">
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/acoustic_coffee.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Acoustic Cà Phê Tối Lãng Mạn</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/anhdanh.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Anh Dành Cho Em Hết</span>
            </li>

            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/coffee.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Acoustic Cà Phê Cuối Tuần</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/chonoibuontrongtim.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Acoustic Cho Nỗi Buồn Trong Tim</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/coffee__buon.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Acoustic & Cà Phê Buồn</span>
            </li>
        </ul>
    </div>

    <div class="list__album__wrapper">
        <div class="list__album__heading">
            <h2>
                MỚI PHÁT HÀNH
                <span class="list__album--arrow"></span>
            </h2>
        </div>

        <ul class="list__album">
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-headphone"></i>
                        <div class="list__album__listens__view">
                            518.716
                        </div>
                    </div>
                    <img src="./assets/img/bray.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Cưới Em</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">B Ray</span>
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-headphone"></i>
                        <div class="list__album__listens__view">
                            95.415
                        </div>
                    </div>
                    <img src="./assets/img/chitay.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">OK Em Buồn</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Hoàng Yến Chibi</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">Dư Quốc Vương</span>
                </div>

            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-headphone"></i>
                        <div class="list__album__listens__view">
                            23.274
                        </div>
                    </div>
                    <img src="./assets/img/bae.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Bae</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Phát Huy T4</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">Như Ý</span>
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-headphone"></i>
                        <div class="list__album__listens__view">
                            61.126
                        </div>
                    </div>
                    <img src="./assets/img/tuoigi.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Tuổi Gì...!</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">SUZIE</span>
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-headphone"></i>
                        <div class="list__album__listens__view">
                            3.054
                        </div>
                    </div>
                    <img src="./assets/img/cautraloi.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Câu Trả Lời</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Mcee Blue</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">Zury</span>
                </div>
            </li>
        </ul>

        <ul class="list__album">
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/felling.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">The Feelings</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">The Fillin</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">Changg</span>
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/jametw.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Heartbeat Changes (Part 1)</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">James TW</span>
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/familia.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Familia</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Camila Cabello</span>
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/crash.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Crash (Deluxe)</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Charli XCX</span>
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="./assets/img/didn_tsay.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                </div>
                <span class="list__album__name">Everything I Didn't Say</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Ella Henderson</span>
                </div>
            </li>
        </ul>
    </div>

    <div class="list__album__wrapper">
        <div class="list__album__heading">
            <h2>
                MV HOT
                <span class="list__album--arrow"></span>
            </h2>
        </div>

        <ul class="list__album">
            <li class="list__album__item list__mv__item--bigger">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            1755
                        </div>
                    </div>
                    <img src="./assets/img/coemladu.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <div class="list__album__info">
                        <span class="list__album__name">Có Em Là Đủ</span>
                        <div class="album__name__singer__wrapper">
                            <span class="album__name__singer">Will</span>
                        </div>
                        <span class="list__album__time">03:33</span>
                    </div>
                </div>
            </li>
            <li class="list__album__item list__mv__item--bigger">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            533
                        </div>
                    </div>
                    <img src="./assets/img/meincattrang.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <div class="list__album__info">
                        <span class="list__album__name">Miền Cát Trắng (Moodshow The 2nd Show)</span>
                        <div class="album__name__singer__wrapper">
                            <span class="album__name__singer">Bảo Anh</span>
                        </div>
                        <span class="list__album__time">04:00</span>
                    </div>
                </div>
            </li>
        </ul>

        <ul class="list__album">
            <li class="list__album__item list__mv__item--small">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            409
                        </div>
                    </div>
                    <img src="./assets/img/vi1nguoi.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <span class="list__album__time">04:27</span>

                </div>
                <span class="list__album__name">Vì Một Người</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Quang Vinh</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">Yến Trang</span>
                </div>
            </li>
            <li class="list__album__item list__mv__item--small">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            214
                        </div>
                    </div>
                    <img src="./assets/img/yeulamchi.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <span class="list__album__time">03:47</span>

                </div>
                <span class="list__album__name">Yêu Làm Chi (The Show: Hát Cho Em)</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Isaac</span>
                </div>
            </li>
            <li class="list__album__item list__mv__item--small">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            160
                        </div>
                    </div>
                    <img src="./assets/img/dalothuonganh.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <span class="list__album__time">03:36</span>

                </div>
                <span class="list__album__name">Đã Lỡ Thương Anh Mất Rồi</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">minhnhat</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">Tom</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">PhamQuynh</span>
                </div>
            </li>
            <li class="list__album__item list__mv__item--small">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            91
                        </div>
                    </div>
                    <img src="./assets/img/please_say_bye.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <span class="list__album__time">03:16</span>

                </div>
                <span class="list__album__name">Please, Say Bye</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Gemini Band</span>
                </div>
            </li>
        </ul>

        <ul class="list__album">
            <li class="list__album__item list__mv__item--small">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            104
                        </div>
                    </div>
                    <img src="./assets/img/meganix.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <span class="list__album__time">06:10</span>

                </div>
                <span class="list__album__name">The Megamix</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Little Mix</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">Saweetie</span>
                </div>
            </li>
            <li class="list__album__item list__mv__item--small">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            37
                        </div>
                    </div>
                    <img src="./assets/img/onerightnow.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <span class="list__album__time">03:47</span>

                </div>
                <span class="list__album__name">One Right Now</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Post Malone</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">The Weeknd</span>
                </div>
            </li>
            <li class="list__album__item list__mv__item--small">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            14.105
                        </div>
                    </div>
                    <img src="./assets/img/chayvenoiphiaanh.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <span class="list__album__time">03:02</span>

                </div>
                <span class="list__album__name">Chạy Về Nơi Phía Anh</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">Khắc Việt</span>
                </div>
            </li>
            <li class="list__album__item list__mv__item--small">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <div class="list__album__listens">
                        <i class="ti-eye"></i>
                        <div class="list__album__listens__view">
                            10.517
                        </div>
                    </div>
                    <img src="./assets/img/chanmay.jpg" alt="" class="list__album__img">
                    <a href="" class="list__album__play"></a>
                    <span class="list__album__time">04:25</span>

                </div>
                <span class="list__album__name">Chân Mây</span>
                <div class="album__name__singer__wrapper">
                    <span class="album__name__singer">K-ICM</span>
                    <span class="album__comma">,</span>
                    <span class="album__name__singer">Phương Thanh</span>
                </div>
            </li>
        </ul>
    </div>

    <div class="list__album__wrapper">
        <div class="list__album__heading">
            <h2>
                BÀI HÁT
                <span class="list__album--arrow"></span>
            </h2>
        </div>

        <ul class="list__album" style="display: block">
            <li class="list__music__wrapper">
                <ul class="list__music">
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/henkiepsau.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Hẹn Kiếp Sau</div>
                                <div class="list__music__singer">Khả Hiệp</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            2.526.691
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/duyenphantrotreu.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Duyên Phận Trớ Trêu</div>
                                <div class="list__music__singer">Cao Nam Thành</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            13.360
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/nghecoaykhoc.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Nghe Cô Ấy Khóc Trên Radio</div>
                                <div class="list__music__singer">Thái Đinh</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            709
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/usedtome.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Used To Know Me</div>
                                <div class="list__music__singer">Charli XCX</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            22.984
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/troyesivan.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Angle Baby (Acoustic)</div>
                                <div class="list__music__singer">Troye Sivan</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            464
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/still_life.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Still Life</div>
                                <div class="list__music__singer">BIGBANG</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            155.035
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                </ul>

                <ul class="list__music">
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/dungsainamodau.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Đúng Sai Nằm Ở Đâu (Theme Song From "Ranh Giới Gia Tộc”)</div>
                                <div class="list__music__singer">S-Quang Ngọc</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            273.974
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/hennhautronggiacmo.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Hẹn Nhau Trong Giấc Mơ</div>
                                <div class="list__music__singer">Quốc Thiên</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            5.808
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/aboutdammtime.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">About Damm Time</div>
                                <div class="list__music__singer">Lizzo</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            1.048
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/alone.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Alone</div>
                                <div class="list__music__singer">Rhys Lewis</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            19
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/whatitfellike.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">What It Feels Like</div>
                                <div class="list__music__singer">Navos</div>
                                <span class="music__comma">, </span>
                                <div class="list__music__singer">Galantis</div>
                                <span class="music__comma">, </span> 
                                <div class="list__music__singer">You</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            15
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                    <li class="list__music__item">
                        <div class="list__music__info">
                            <img src="./assets/img/chanmay_music.jpg" alt="" class="list__music__img">
                            <div style="margin-left: 10px">
                                <div class="list__music__name">Chân Mây</div>
                                <div class="list__music__singer">K-ICM</div>
                                <span class="music__comma">, </span> 
                                <div class="list__music__singer">Phương Thanh</div>
                            </div>
                        </div>
                        <span class="list__music__listens">
                            <i class="ti-headphone"></i>
                            259.816
                        </span>
                        <div class="list__music__action">
                            <span class="list__music__add__playlist"></span>
                            <span class="list__music__play"></span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="list__album__wrapper">
        <div class="list__album__heading">
            <h2>
                TOP 100
                <span class="list__album--arrow"></span>
            </h2>
        </div>

        <ul class="list__album">
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <img src="https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600244112678.jpg" alt="" class="list__album__img">
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <img src="https://avatar-ex-swe.nixcdn.com/playlist/2020/09/16/e/1/f/f/1600250721042.jpg" alt="" class="list__album__img">
                </div>
            </li>

            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <img src="https://avatar-ex-swe.nixcdn.com/playlist/2021/04/08/5/5/a/6/1617867524987.jpg" alt="" class="list__album__img">
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <img src="https://avatar-ex-swe.nixcdn.com/playlist/2021/05/26/b/e/2/9/1622014540231.jpg" alt="" class="list__album__img">
                </div>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <img src="https://avatar-ex-swe.nixcdn.com/playlist/2021/11/02/b/4/7/0/1635818384011.jpg" alt="" class="list__album__img">
                </div>
            </li>
        </ul>
    </div>

    <div class="list__album__wrapper weekly__artist__chart">
        <div class="list__album__heading">
            <h2>
                Weekly artist chart
                <span class="list__album--arrow"></span>
            </h2>
        </div>

        <ul class="list__album">
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/07/01/d/4/7/8/1625125665949_600.jpg" alt="" class="list__album__img">
                </div>
                <span class="list__album__name">Anh Khoa (Cover)</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/09/07/9/8/7/e/1599443552050_600.jpg" alt="" class="list__album__img">
                </div>
                <span class="list__album__name">Dilan Vũ</span>
            </li>

            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/10/30/4/0/0/1/1572407810249_600.jpg" alt="" class="list__album__img">
                </div>
                <span class="list__album__name">Yuki Huy Nam</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/07/29/e/d/6/0/1627519632288_600.jpg" alt="" class="list__album__img">
                </div>
                <span class="list__album__name">H-Kray</span>
            </li>
            <li class="list__album__item">
                <div class="album__img__wrapper">
                    <div class="list__album__blur"></div>
                    <img src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/04/12/b/e/7/c/1649735066221_600.jpg" alt="" class="list__album__img">
                </div>
                <span class="list__album__name">Đào Ngọc Sang</span>
            </li>
        </ul>
    </div>
        `;

        boxRight.innerHTML = `
        <div class="charts charts__music">
        <div class="charts__heading cursor--pointer">
            BXH Bài Hát
        </div>

        <div class="charts__tab__select">
            <span class="charts__select__item charts__select--active cursor--pointer" data-index="0">Việt Nam</span><span class="charts__select__item cursor--pointer" data-index="1">Âu Mỹ</span><span class="charts__select__item cursor--pointer" data-index="2">Hàn Quốc</span>
        </div>

        <ul class="charts__list" data-index="0">
            <li class="charts__item">
                <div class="charts__item__img__wrapper">
                    <img src="https://avatar-ex-swe.nixcdn.com/song/2022/01/26/4/e/f/e/1643184497199.jpg" alt="" class="charts__item__img">
                    <span class="charts__item__order">1</span>
                </div>
                <div class="charts__item__info">
                    <div class="charts__item__name">Yêu Đương Khó Quá Thì Chạy Về Khóc Với Anh</div>
                    <div class="charts__item__singer">ERIK</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order color--blue">2</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Đế Vương</div>
                    <div class="charts__item__singer">Đình Dũng</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">ACV</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order color--orange">3</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Hoa Tàn Tình Tan</div>
                    <div class="charts__item__singer">Giang Jolle</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order">4</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Có Em Đây</div>
                    <div class="charts__item__singer">Như Việt</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">Dunghoangpham</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">ACV</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order">5</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Là Do Em Xui Thôi</div>
                    <div class="charts__item__singer">Khói</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">Sofia</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">Châu Đăng Khoa</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order">6</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Có Hẹn Với Thanh Xuân</div>
                    <div class="charts__item__singer">MONSTAR</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order">7</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Thức Giấc</div>
                    <div class="charts__item__singer">Da LAB</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order">8</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Chạy Về Nơi Phía Anh</div>
                    <div class="charts__item__singer">Khắc Việt</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order">9</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Tệ Thật, Anh Nhớ Em</div>
                    <div class="charts__item__singer">Thanh Hưng</div>
                </div>
            </li>
            <li class="charts__item">
                <span class="charts__item__order">10</span>
                <div class="charts__item__info">
                    <div class="charts__item__name">Cưới Thôi</div>
                    <div class="charts__item__singer">Masew</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">Masiu</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">Bray</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">TAP</div>
                </div>
            </li>
        </ul>
    </div>

    <div class="charts charts__mv">
        <div class="charts__heading cursor--pointer">
            BXH MV
        </div>

        <div class="charts__tab__select">
            <span class="charts__select__item charts__select--active cursor--pointer">Việt Nam</span><span class="charts__select__item cursor--pointer">Âu Mỹ</span><span class="charts__select__item cursor--pointer">Hàn Quốc</span>
        </div>

        <ul class="charts__list">
            <li class="charts__item">
                <div class="charts__item__info__wrapper cursor--pointer">
                    <div class="blur"></div>
                    <img src="./assets/img/chayvenoiphiaanh.jpg" alt="" class="charts__item__img" style="width: 100%; height: auto">
                    <span class="charts__item__order">1</span>
                    <a href="" class="list__album__play"></a>
                    <div class="charts__item__info">
                        <div class="charts__item__name">Chạy Về Nơi Phía Anh</div>
                        <div class="charts__item__singer">Khắc Việt</div>
                    </div>
                </div>
            </li>
            <li class="charts__item">
                <div class="charts__item__info__wrapper cursor--pointer">
                    <div class="blur"></div>
                    <img src="https://avatar-ex-swe.nixcdn.com/mv/2022/04/04/7/e/4/f/1649034549603.jpg" alt="" class="charts__item__img" style="width: 110px; height: auto">
                    <span class="charts__item__order color--blue">2</span>
                    <a href="" class="list__album__play">
                        <img src="https://stc-id.nixcdn.com/v11/images/icon-48x48-play.png" alt="" style="width: 28px; height: 28px">
                    </a>
                </div>
                <div class="charts__item__info">
                    <div class="charts__item__name">Lỡ Mai Này</div>
                    <div class="charts__item__singer">Bozitt</div>
                    <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
                    <div class="charts__item__singer">LilGee Phạm</div>
                </div>
            </li>
            <li class="charts__item">
                <div class="charts__item__info__wrapper cursor--pointer">
                    <div class="blur"></div>
                    <img src="./assets/img/coemladu.jpg" alt="" class="charts__item__img" style="width: 110px; height: auto">
                    <span class="charts__item__order color--orange">3</span>
                    <a href="" class="list__album__play">
                        <img src="https://stc-id.nixcdn.com/v11/images/icon-48x48-play.png" alt="" style="width: 28px; height: 28px">
                    </a>
                </div>
                <div class="charts__item__info">
                    <div class="charts__item__name">Có Em Là Đủ</div>
                    <div class="charts__item__singer">Will</div>
                </div>
            </li>
            <li class="charts__item">
                <div class="charts__item__info__wrapper cursor--pointer">
                    <div class="blur"></div>
                    <img src="https://avatar-ex-swe.nixcdn.com/mv/2022/03/24/4/b/3/6/1648110115130.jpg" alt="" class="charts__item__img" style="width: 110px; height: auto">
                    <span class="charts__item__order">4</span>
                    <a href="" class="list__album__play">
                        <img src="https://stc-id.nixcdn.com/v11/images/icon-48x48-play.png" alt="" style="width: 28px; height: 28px">
                    </a>
                </div>
                <div class="charts__item__info">
                    <div class="charts__item__name">Người Thương Em Cả Đời Em Xua Đuổi</div>
                    <div class="charts__item__singer">Như Việt</div>
                </div>
            </li>
            <li class="charts__item">
                <div class="charts__item__info__wrapper cursor--pointer">
                    <div class="blur"></div>
                    <img src="https://avatar-ex-swe.nixcdn.com/mv/2022/04/01/a/c/f/d/1648801793780.jpg" alt="" class="charts__item__img" style="width: 110px; height: auto">
                    <span class="charts__item__order">5</span>
                    <a href="" class="list__album__play">
                        <img src="https://stc-id.nixcdn.com/v11/images/icon-48x48-play.png" alt="" style="width: 28px; height: 28px">
                    </a>
                </div>
                <div class="charts__item__info">
                    <div class="charts__item__name">Dừng Làm Bạn</div>
                    <div class="charts__item__singer">Mr White</div>
                </div>
            </li>
        </ul>
    </div>

    <div class="discovery__playlist cursor--pointer">
        <div class="discovery__playlist__heading">
            Gợi ý dành cho bạn
        </div>
        <div class="discovery__playlist__text">Thưởng thức những ca khúc phù hợp nhất với bạn</div>

        <div class="btn__playlist">
            <span class="btn__playlist__icon">
                <i class="ti-control-play"></i>
            </span>
            <span class="btn__playlist__text">Nghe bài hát</span>
        </div>
    </div>

    <div class="theme__hot">
        <h2 class="theme__heading">
            Chủ đề Hot
            <span class="list__album--arrow"></span>
        </h2>
        <ul class="theme__list">
            <li class="theme__item cursor--pointer">
                <img src="https://avatar-ex-swe.nixcdn.com/topic/thumb/2020/06/18/9/5/f/7/1592468389855_org.jpg" alt="" class="theme__img">
            </li>
            <li class="theme__item cursor--pointer">
                <img src="https://avatar-ex-swe.nixcdn.com/topic/thumb/2020/08/13/f/d/9/1/1597291766331_org.jpg" alt="" class="theme__img">
            </li>
            <li class="theme__item cursor--pointer">
                <img src="https://avatar-ex-swe.nixcdn.com/topic/thumb/2020/06/22/9/7/b/e/1592810243009_org.jpg" alt="" class="theme__img">
            </li>
            <li class="theme__item cursor--pointer">
                <img src="https://avatar-ex-swe.nixcdn.com/topic/thumb/2020/09/10/6/a/9/b/1599734115030_org.jpg" alt="" class="theme__img">
            </li>
            <li class="theme__item cursor--pointer">
                <img src="https://avatar-ex-swe.nixcdn.com/topic/thumb/2020/09/03/4/5/9/8/1599120670684_org.jpg" alt="" class="theme__img">
            </li>
        </ul>
    </div>
        `
    }
}

function handleTransferGenre(data, indexCategory) {
    const categoryList = $$('.top100__tab__item');
    const chartsList100 = $('.charts__list100');
    const chartsList100Category = $('.charts__list100__category');
    [...categoryList].forEach((categoryItem, index) => {
        // Index là indexGenre
        categoryItem.onclick = () => {
            $('.top100__tab__item.top100__tab__item--active').classList.remove('top100__tab__item--active');
            categoryItem.classList.add('top100__tab__item--active');

            switch (indexCategory) {
                case 0: {
                    chartsList100Category.textContent = data.songs.top100_VN[index].name;
                    chartsList100.innerHTML = renderChartsList(data.songs.top100_VN[index].songs);
                    handleEventToRenderPagePlayMusic(data, indexCategory, index);
                    break;
                }
                case 1: {
                    chartsList100Category.textContent = data.songs.top100_AM[index].name;
                    chartsList100.innerHTML = renderChartsList(data.songs.top100_AM[index].songs);
                    handleEventToRenderPagePlayMusic(data, indexCategory, index);
                    break;
                }
                case 2: {
                    chartsList100Category.textContent = data.songs.top100_CA[index].name;
                    chartsList100.innerHTML = renderChartsList(data.songs.top100_CA[index].songs);
                    handleEventToRenderPagePlayMusic(data, indexCategory, index);
                    break;
                }
                case 3: {
                    chartsList100Category.textContent = data.songs.top100_KL[index].name;
                    chartsList100.innerHTML = renderChartsList(data.songs.top100_KL[index].songs);
                    handleEventToRenderPagePlayMusic(data, indexCategory, index);
                    break;
                }
            }
        }
    })
}

function handleEventToRenderPagePlayMusic(data, indexCategory, indexGenre) {
    // data to

    const musicList = $$('.charts__list100__item');

    [...musicList].forEach((musicItem, index) => {
        musicItem.onclick = () => {
            //indexCategory: Việt Nam, Âu Mỹ, ...
            //index (indexGenre): Nhạc Trẻ, Trữ Tình, ...

            switch (indexCategory) {
                case 0: {
                    boxLeft.innerHTML = renderPlayMusic(data.songs.top100_VN[indexGenre], indexCategory, indexGenre);
                    handlePlayMusic(data.songs.top100_VN[indexGenre].songs, index);
                    break;
                }
                case 1: {
                    boxLeft.innerHTML = renderPlayMusic(data.songs.top100_AM[indexGenre], indexCategory, indexGenre);
                    handlePlayMusic(data.songs.top100_AM[indexGenre].songs, index);
                    break;
                }
                case 2: {
                    boxLeft.innerHTML = renderPlayMusic(data.songs.top100_CA[indexGenre], indexCategory, indexGenre);
                    handlePlayMusic(data.songs.top100_CA[indexGenre].songs, index);
                    break;
                }
                case 3: {
                    boxLeft.innerHTML = renderPlayMusic(data.songs.top100_KL[indexGenre], indexCategory, indexGenre);
                    handlePlayMusic(data.songs.top100_KL[indexGenre].songs, index);
                    break;
                }
            }

            renderBoxRightPagePlayMusic(indexCategory, indexGenre);

            handleEventsBoxRight(data);

            goToPage.click();
        }
    })
}

function renderBoxRight(number) {
    //number là indexCategory đã render ở box left nên k render ở box right

    function list__singer__music(list, indexCategory) {
        return list.map((item, index) => {
            // index là indexGenre
            if (index != 0) {
                return `
                    <li class="list__singer__item" data-category="${indexCategory}" data-genre="${index - 1}">
                        <img src="${item.image}" alt="" class="cursor--pointer">
                        <span class="cursor--pointer hover--primary">${item.text}</span>
                    </li>
                `
            }

        }).join('');
    }

    boxRight.innerHTML = boxRightArray.map((list, index) => {
        if (index != number) {
            // index là indexCategory
            let listSingerMusic = list__singer__music(list, index);

            return `
                <div class="box_prospect_singer">
                    <div class="list__album__heading">
                        <h2>
                            Top 100 ${list[0]}
                            <span class="list__album--arrow"></span>
                        </h2>
                    </div>

                    <div class="list_singer_music">
                        <ul>
                            ${listSingerMusic}
                        </ul>
                    </div>
                </div>
            `
        }
    }).join('');
}

function handleEventsBoxRight(data) {
    //data là to luôn
    // Box right
    const listSingerItems = $$('.box_prospect_singer .list__singer__item');

    [...listSingerItems].forEach((item) => {
        // item là các thẻ li box right
        item.onclick = () => {
            let indexCategory = parseInt(item.dataset.category); //Category: Việt Nam, Âu Mỹ, Châu Á, Không Lời
            let indexGenre = parseInt(item.dataset.genre); //Genre: Nhạc Trẻ, Trữ Tình, Tiền Chiến, ...

            switch (indexCategory) {
                case 0: {
                    boxLeft.innerHTML = renderMusic(data.songs.top100_VN, indexGenre);
                    break;
                }
                case 1: {
                    boxLeft.innerHTML = renderMusic(data.songs.top100_AM, indexGenre);
                    break;
                }
                case 2: {
                    boxLeft.innerHTML = renderMusic(data.songs.top100_CA, indexGenre);
                    break;
                }
                case 3: {
                    boxLeft.innerHTML = renderMusic(data.songs.top100_KL, indexGenre);
                    break;
                }
            }

            handleEventToRenderPagePlayMusic(data, indexCategory, indexGenre);
            handleTransferGenre(data, indexCategory);

            // Render lại Box Right
            renderBoxRight(indexCategory);

            // Xử lý khi click vào các element box right
            handleEventsBoxRight(data);

            goToPage.click();

            // Reset title document
            document.title = 'NhacCuaTui Clone - Nghe nhạc mới HOT nhất, tải nhạc MP3 chất lượng cao';
        }
    })
}

function renderBoxRightPagePlayMusic(indexCategoryHad, indexGenreHad) {
    // indexCategory đã có :))
    function list__singer__music(list, indexCategory) {
        return list.map((item, index) => {
            // index là indexGenre
            if (indexCategory == indexCategoryHad && (index - 1) == indexGenreHad) return;

            if (index != 0) {
                return `
                    <li class="list__singer__item" data-category="${indexCategory}" data-genre="${index - 1}">
                        <img src="${item.image}" alt="" class="cursor--pointer">
                        <span class="cursor--pointer hover--primary">${item.text}</span>
                    </li>
                `
            }

        }).join('');
    }

    boxRight.innerHTML = boxRightArray.map((list, index) => {
        // index là indexCategory
        let listSingerMusic = list__singer__music(list, index);

        return `
            <div class="box_prospect_singer">
                <div class="list__album__heading">
                    <h2>
                        Top 100 ${list[0]}
                        <span class="list__album--arrow"></span>
                    </h2>
                </div>

                <div class="list_singer_music">
                    <ul>
                        ${listSingerMusic}
                    </ul>
                </div>
            </div>
        `
    }).join('');
}

function renderMusic(data, index) {
    //data = data.songs.top100...

    //index này là indexGenre: Nhạc Trẻ, Trữ Tình, Tiền Chiến, Remix, ...
    let categoryList = renderCategoryMusic(data, index);

    let chartsList = renderChartsList(data[index].songs);

    return `
        <div class="top100__header">
            <h2 class="top100__heading">Top 100 Việt Nam</h2>
            <div class="top100__description">TOP 100 là danh sách 100 bài hát hot nhất thuộc các thể loại nhạc được nghe nhiều nhất trên NhacCuaTui. Danh sách bài hát này được hệ thống tự động đề xuất dựa trên lượt nghe, lượt share v.v của từng bài hát trên tất cả các nền tảng (Web, Mobile web, App). Top 100 sẽ được cập nhật mỗi ngày dựa trên các chỉ số có được từ ngày đó.</div>
            <div class="top100__update__time">
                * TOP 100 vừa được cập nhật vào: 
                <b>02:00 22/04/2022</b>
            </div>    
        </div>

        <div class="top100__tab__select">
            <ul class="top100__tab__list">
                ${categoryList}
            </ul>
        </div>

        <div class="charts__list__100">
            <div class="charts__list100__header">
                <div class="charts__list100__heading__wrapper">
                    <h2 class="charts__list100__heading">
                        100 ca khúc 
                        <span class="charts__list100__category">${data[index].name}</span>
                        hay nhất trên NhacCuaTui
                    </h2>

                    <div class="charts__list__btn--sort cursor--pointer">
                        <img src="https://stc-id.nixcdn.com/v11/images/icon_sort.png" alt="">
                    </div>
                </div>

                <div class="charts__list__playall cursor--pointer">
                    <i class="charts__list__playall__icon ti-control-play"></i>
                    Nghe toàn bộ
                </div>
            </div>

            <div class="charts__list100__content">
                <ul class="charts__list100">
                    ${chartsList}
                </ul>
            </div>
        </div>
    `
}

function renderCategoryMusic(data, indexCategory) {
    // data = data.songs.top100...
    return data.map((value, index) => {
        if (index == indexCategory) {
            return `<li class="top100__tab__item top100__tab__item--active cursor--pointer">${value.name}</li>`
        }

        return `<li class="top100__tab__item cursor--pointer">${value.name}</li>`
    }).join('');
}

function renderChartsList(data) {
    //data = data.songs.top100 [index].songs

    return data.map((value, index) => {
        let creators = renderCreator(value.creator);

        return `
            <li class="charts__list100__item cursor--pointer">
                <div class="charts__list100__info__wrapper">
                    <div class="charts__list100__order">${index + 1}</div>
                    <div class="charts__list100__img__wrapper">
                        <img src="${value.avatar}" alt="" class="charts__list100__img">
                        <div class="charts__list100__info">
                            <div class="charts__list100__name hover--primary">${value.title}</div>
                            ${creators}
                        </div>
                    </div>
                </div>
                <div class="list__music__action" style="display: block; margin-right: 10px">
                    <span class="list__music__add__playlist"></span>
                    <span class="list__music__play"></span>
                </div>
            </li>
        `
    }).join('');
}

function renderCreator(creators) {
    //creators = data.songs.top100 [index].songs.creator VD: Hương Ly, Jombie
    let creatorList = creators.split(', ');

    let singer;

    if (creatorList.length > 1) {
        singer = creatorList.map((categoryItem, index) => {
            if (index === creatorList.length - 1) {
                return `<div class="charts__list100__singer hover--primary cursor--pointer">${categoryItem}</div>`
            }

            return `
                <div class="charts__list100__singer hover--primary cursor--pointer">${categoryItem}</div>
                <span style="color: rgba(0, 0, 0, 0.5); font-size: 1.2rem;">, </span>
            `
        }).join('');
    } else {
        singer = `<div class="charts__list100__singer hover--primary cursor--pointer">${creatorList}</div>`
    }

    return singer;
}