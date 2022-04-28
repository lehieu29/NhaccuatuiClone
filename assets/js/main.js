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
const headerLogin = $('.header__login');
const loginModal = $('.form__nct.form__login');
const blurElement = $('.form__nct__wrapper .blur');
const formClose = $('.form__close');

headerLogin.onclick = () => {
    loginModal.style.display = 'block';
    blurElement.style.display = 'block';
}

formClose.onclick = () => {
    loginModal.style.display = 'none';
    blurElement.style.display = 'none';
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

// https://raw.githubusercontent.com/lehieu29/NhaccuatuiClone/master/API.json
// ../API.json
const urlAPI = "../API.json"
// const urlAPI = "https://raw.githubusercontent.com/lehieu29/NhaccuatuiClone/master/API.json";

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
const discoveryPlaylist = $('.discovery__playlist');
const themeHot = $('.theme__hot');

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
        }
    })
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