document.addEventListener("DOMContentLoaded", function () {
    // 설정된 날짜와 시간에 맞춰 변경될 앨범 내용들
    const imageChanges = [
        {
            id: 'artist-image1',  // 이미지 태그 ID 1일차 1번
            firstImage: 'static/images/psy.svg',  // 첫 번째 이미지 
            secondImage: 'static/images/psy.svg',  // 두 번째 이미지
            time: new Date("2025-05-28T10:00:00").getTime(),  // 첫 번째 이미지 변경 시간
            nextTime: new Date("2025-05-28T10:00:00").getTime()  // 두 번째 이미지 변경 시간
        },
        {
            id: 'artist-image2',  // 이미지 태그 ID 1일차 2번
            firstImage: 'static/images/nerd.svg',  // 첫 번째 이미지
            secondImage: 'static/images/nerd2.svg',  // 두 번째 이미지
            time: new Date("2025-05-28T10:00:00").getTime(),  // 첫 번째 이미지 변경 시간
            nextTime: new Date("2025-05-28T10:00:00").getTime()  // 두 번째 이미지 변경 시간
        },
        {
            id: 'artist-image4',  // 이미지 태그 ID 2일차 1번
            firstImage: 'static/images/bh.svg',  // 첫 번째 이미지
            secondImage: 'static/images/bh2.svg',  // 두 번째 이미지
            time: new Date("2025-05-28T10:00:00").getTime(),  // 첫 번째 이미지 변경 시간
            nextTime: new Date("2025-05-28T10:00:00").getTime()  // 두 번째 이미지 변경 시간
        },
        {
            id: 'artist-image5',  // 이미지 태그 ID 2일차 2번
            firstImage: 'static/images/hz.svg',  // 첫 번째 이미지
            secondImage: 'static/images/hz2.svg',  // 두 번째 이미지
            time: new Date("2025-05-28T10:00:00").getTime(),  // 첫 번째 이미지 변경 시간
            nextTime: new Date("2025-05-28T10:00:00").getTime()  // 두 번째 이미지 변경 시간
        },
        {
            id: 'artist-image6',  // 이미지 태그 ID 2일차 3번
            firstImage: 'static/images/qw.svg',  // 첫 번째 이미지
            secondImage: 'static/images/qw2.svg',  // 두 번째 이미지
            time: new Date("2025-05-28T10:00:00").getTime(),  // 첫 번째 이미지 변경 시간
            nextTime: new Date("2025-05-28T10:00:00").getTime()  // 두 번째 이미지 변경 시간
        },
        // 추가 이미지 변경 설정 (필요한 만큼)
    ];   
    
    const albumChanges = [
        {
            id: 'album1', // 1일차 1번
            image: 'static/images/new-album1.jpg',
            title: '강남스타일',
            artist: '싸이6',
            link: 'https://youtu.be/9bZkp7q19f0',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album2', // 1일차 1번
            image: 'static/images/new-album2.jpg',
            title: '젠틀맨',
            artist: '싱글앨범',
            link: 'https://youtu.be/ASO_zypdnsQ',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 두 번째 앨범 변경 시간
        },
        {
            id: 'album3', // 1일차 1번
            image: 'static/images/new-album3.jpg',
            title: 'DADDY',
            artist: '싸이7',
            link: 'https://youtu.be/FrG4TEcSuRg',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 세 번째 앨범 변경 시간
        }, 
        {
            id: 'album4', // 1일차 2번
            image: 'static/images/new-album4.jpg',
            title: '그대만 있다면',
            artist: '싱글앨범',
            link: 'https://youtu.be/IMWT6937uUs?si=aSl6TSj3MzMWXDfI',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album5', // 1일차 2번
            image: 'static/images/new-album5.jpg',
            title: '좋은 밤 좋은 꿈',
            artist: '싱글 앨범',
            link: 'https://youtu.be/g-rZeTNIw7E?si=OwbrSvva_u7OrTCc',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album6', // 1일차 2번
            image: 'static/images/new-album6.jpg',
            title: '조용히 완전히 영원히',
            artist: 'New Century Masterpiece Cinema',
            link: 'https://youtu.be/W25_xvZWKMw?si=EUouvpbTI7-0-KHt',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album10', // 2일차 1번
            image: 'static/images/new-album7.jpg',
            title: 'No Rules',
            artist: 'Absolute Zero',
            link: 'https://youtu.be/XqfnTlwcjuQ?si=LC4jI-bxt7NrEU-C',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album11', // 2일차 1번
            image: 'static/images/new-album8.jpg',
            title: '엘리베이터',
            artist: '싱글앨범',
            link: 'https://youtu.be/OiX8H-_sJuA?si=50LeIXcewuhFrvtA',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album12', // 2일차 1번
            image: 'static/images/new-album9.jpg',
            title: '너티 너티 (Nutty Nutty)',
            artist: '싱글앨범',
            link: 'https://youtu.be/szXpSZanlqs?si=W6_1dCbkeh13bWjY',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album13', // 2일차 2번
            image: 'static/images/new-album10.jpg',
            title: '저 별',
            artist: '싱글앨범',
            link: 'https://youtu.be/XUR8QByF2As?si=6V3KcN3kARrFxgzS',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album14', // 2일차 2번
            image: 'static/images/new-album11.jpg',
            title: '비도 오고 그래서',
            artist: '/// (너 먹구름 비)',
            link: 'https://youtu.be/afxLaQiLu-o?si=w5f_EtWioeL15w6p',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album15', // 2일차 2번
            image: 'static/images/new-album12.jpg',
            title: 'And July',
            artist: 'And July',
            link: 'https://youtu.be/rCeM57e2BfU?si=hqXOrd_N63pTP8q1',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album16', // 2일차 3번
            image: 'static/images/new-album13.jpg',
            title: '고민중독',
            artist: '1st Mini Album \'MANITO\'',
            link: 'https://youtu.be/ImuWa3SJulY?si=uPpFGUs0xcEkcBk_',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album17', // 2일차 3번
            image: 'static/images/new-album14.jpg',
            title: 'Discord',
            artist: 'Harmony from Discord',
            link: 'https://youtu.be/WGm2HmXeeRI?si=rKnhmcZbg6nCjq5O',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        {
            id: 'album18', // 2일차 3번
            image: 'static/images/new-album15.jpg',
            title: '내 이름 맑음',
            artist: 'Algorithm\'s Blossom',
            link: 'https://youtu.be/AlirzLFEHUI?si=qZxpsjYqkELtTj8W',  // 새로운 링크 추가
            time: new Date("2025-05-28T10:00:00").getTime()  // 첫 번째 앨범 변경 시간
        },
        // ... album4부터 album18까지 추가
    ];

    const textChanges = [
        {
            id: 1, //1일차 1번
            time: new Date("2025-05-28T10:00:00").getTime(),
            newHeadline: "싸이",
            newDesc: "싸이(PSY)는 대한민국의 가수이자 래퍼, 프로듀서로, 본명은 박재상이다. 2001년 데뷔한 그는 유쾌한 음악과 독창적인 퍼포먼스로 대중의 사랑을 받았다. 2012년 발표한 글로벌 히트곡 ‘강남스타일(Gangnam Style)’은 유튜브에서 폭발적인 인기를 얻으며 세계적인 인지도를 얻었다. 이후로도 ‘젠틀맨’, ‘대디’ 등 다양한 히트곡을 발표했으며, 2019년에는 기획사 피네이션(P NATION)을 설립해 아티스트로서뿐 아니라 프로듀서로도 활약하고 있다."
        },
        {
            id: 2, //1일차 2번
            time: new Date("2025-05-28T10:00:00").getTime(),
            newHeadline: "너드커넥션",
            newDesc: "너드커넥션(Nerd Connection)은 2017년에 결성된 대한민국의 4인조 록 밴드로, 감성적인 록 발라드와 서정적인 멜로디로 주목받고 있다. 이들은 '어지러운 세상, 따뜻한 음악'이라는 슬로건을 내세워 활동하며, 1990~2000년대의 영국 록 밴드들(Radiohead, Coldplay, Oasis 등)과 한국의 김광석, 넬 등으로부터 영향을 받았다."
        },
        {
            id: 4, //2일차 1번
            time: new Date("2025-05-28T10:00:00").getTime(),
            newHeadline: "백호",
            newDesc: "백호(Baekho)는 2012년 보이그룹 뉴이스트(NU'EST)의 메인보컬로 데뷔한 대한민국의 가수로, 감미로운 음색과 뛰어난 가창력을 바탕으로 많은 사랑을 받아왔다. 그룹 활동 이후 2022년 솔로로 전향해 다양한 음악 스타일을 선보이며 아티스트로서의 입지를 넓혀가고 있으며, 최근에는 예능과 팬미팅 등 다방면에서 활발히 활동 중이다."
        },
        {
            id: 5, //2일차 2번
            time: new Date("2025-05-28T10:00:00").getTime(),
            newHeadline: "헤이즈",
            newDesc: "헤이즈(Heize)는 대한민국의 인기 가수이자 작곡가로, 감성적인 보컬과 독특한 음악 스타일로 많은 사랑을 받고 있는 아티스트이다. 1991년 8월 9일 대구에서 태어난 헤이즈는 2014년 첫 EP Heize로 데뷔한 이후, 다양한 힙합과 R&B 장르를 넘나드는 음악을 선보이며 대중의 마음을 사로잡았다. 헤이즈만의 감성적이고 진정성 있는 음악을 통해, 다양한 이들에게 위로와 공감을 전달하며 꾸준히 사랑받고 있는 아티스트이다."
        },
        {
            id: 6, //2일차 3번
            time: new Date("2025-05-28T10:00:00").getTime(),
            newHeadline: "QWER",
            newDesc: "QWER는 뉴미디어 콘텐츠 스튜디오 3Y코퍼레이션의 타마고 프로덕션과 뮤직 퍼블리셔 프리즘필터가 공동 제작한 글로벌 걸밴드이다. 이름은 온라인 게임의 스킬 키(Q·W·E·R)를 의미하며, 각기 다른 매력과 능력을 지닌 4인 4색의 멤버가 모여 다채로운 음악을 선보이겠다는 포부로 결성되었다."
        }
    ];
    // 일정 시간 후에 앨범 내용 바꾸기
    setInterval(function () {
        const currentTime = new Date().getTime();

        albumChanges.forEach(album => {
            if (currentTime >= album.time) {
                const index = album.id.substring(album.id.length - 1);
                document.getElementById('album-image' + index).src = album.image;
                document.getElementById('album-title' + index).textContent = album.title;
                document.getElementById('album-artist' + index).textContent = album.artist;
                document.getElementById(album.id).setAttribute('href', album.link);
            }
        });

        textChanges.forEach(text => {
            if (currentTime >= text.time) {
                const headline = document.getElementById('headline' + text.id);
                const desc = document.getElementById('desc' + text.id);
                if (headline && desc) {
                    headline.textContent = text.newHeadline;
                    desc.textContent = text.newDesc;
                }
            }
        });
        imageChanges.forEach(change => {
            // 첫 번째 이미지 변경
            if (currentTime >= change.time && currentTime < change.nextTime) {
                document.getElementById(change.id).src = change.firstImage;
            }
            // 두 번째 이미지 변경
            if (currentTime >= change.nextTime) {
                document.getElementById(change.id).src = change.secondImage;
            }
        });
    }, 1000); // 1초마다 현재 시간을 확인하여 변경이 필요한지 체크

    // 탭 버튼 처리
    const day1Tab = document.getElementById("day1-tab");
    const day2Tab = document.getElementById("day2-tab");
    const revealTab = document.getElementById("reveal-tab");
    const day1Content = document.getElementById("day1-content");
    const day2Content = document.getElementById("day2-content");
    const revealContent = document.getElementById("reveal-content");

    day1Tab.addEventListener("click", () => {
        day1Tab.classList.add("active");
        day2Tab.classList.remove("active");
        revealTab.classList.remove("active");
        day1Content.classList.add("active");
        day2Content.classList.remove("active");
        revealContent.classList.remove("active");
    });

    day2Tab.addEventListener("click", () => {
        day2Tab.classList.add("active");
        day1Tab.classList.remove("active");
        revealTab.classList.remove("active");
        day2Content.classList.add("active");
        day1Content.classList.remove("active");
        revealContent.classList.remove("active");
    });

    revealTab.addEventListener("click", () => {
        revealTab.classList.add("active");
        day1Tab.classList.remove("active");
        day2Tab.classList.remove("active");
        revealContent.classList.add("active");
        day1Content.classList.remove("active");
        day2Content.classList.remove("active");
    });

    // Reveal 섹션 이미지 슬라이드 기능 (1DAY & 2DAY 공통)
    function createCarousel(tabContentId) {
        const content = document.getElementById(tabContentId); // 1DAY 또는 2DAY 콘텐츠
        const cards = content.querySelectorAll('.card');
        let currentCardIndex = 0; // 현재 보이는 카드의 인덱스

        const prevButton = content.querySelector('.carousel-prev');
        const nextButton = content.querySelector('.carousel-next');

        // prev 버튼 클릭 시 카드 하나씩 뒤로 이동
        prevButton.addEventListener('click', () => {
            cards[currentCardIndex].style.display = 'none'; // 현재 카드 숨기기
            currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length; // 인덱스를 1 감소
            cards[currentCardIndex].style.display = 'block'; // 새 카드 보이기
        });

        // next 버튼 클릭 시 카드 하나씩 앞으로 이동
        nextButton.addEventListener('click', () => {
            cards[currentCardIndex].style.display = 'none'; // 현재 카드 숨기기
            currentCardIndex = (currentCardIndex + 1) % cards.length; // 인덱스를 1 증가
            cards[currentCardIndex].style.display = 'block'; // 새 카드 보이기
        });
    }

    // 1DAY, 2DAY 각각에 대해 카드 슬라이드 기능 적용
    createCarousel('day1-content');
    createCarousel('day2-content');

    // 공개 날짜 처리 라인업 공개 탭 부분
    const revealDates = {
        "reveal1": new Date("2025-05-28T10:00:00"),
        "reveal2": new Date("2025-05-28T10:00:00"),
        "reveal3": new Date("2025-05-28T10:00:00")
    };

    // 1일 뒤 이미지 변경 날짜 설정
    const revealChangeDates = {
        "reveal1": new Date("2025-05-28T10:00:00"),
        "reveal2": new Date("2025-05-28T10:00:00"),
        "reveal3": new Date("2025-05-28T10:00:00")
    };

    function updateRevealSections() {
        const currentDate = new Date();
        console.log("Current Date: ", currentDate);  // 콘솔로 현재 시간 확인

        for (let key in revealDates) {
            const revealSection = document.getElementById(key);
            const revealDate = revealDates[key];
            const changeDate = revealChangeDates[key];
            const image = revealSection.querySelector("img");

            console.log(`${key} - Reveal Date: ${revealDate}, Change Date: ${changeDate}`);  // 각 날짜 확인

            if (currentDate >= revealDate) {
                revealSection.querySelector(".coming-soon").style.display = 'none';  // COMING SOON 숨기기
                revealSection.querySelector(".revealed").style.display = 'block';  // 공개 텍스트 표시
                image.style.display = 'block';  // 공개 이미지 표시

                if (currentDate >= changeDate) {
                    // 이미지가 1일 뒤에 변경됨
                    if (key === "reveal1") {
                        image.src = "static/images/psy.svg";  // 이미지 변경 1차공개꺼
                    } else if (key === "reveal2") {
                        image.src = "static/images/nerd2.svg";  // 이미지 변경 2차공개꺼
                    } else if (key === "reveal3") {
                        image.src = "static/images/2day1.svg";  // 이미지 변경 2차공개꺼
                    }
                    console.log(`Image changed for ${key}: `, image.src);  // 이미지 경로 확인
                }
            } else {
                revealSection.querySelector(".coming-soon").style.display = 'block';  // COMING SOON 표시
                revealSection.querySelector(".revealed").style.display = 'none';  // 공개 텍스트 숨기기
                image.style.display = 'none';  // 이미지 숨기기
            }
        }
    }

    // 페이지 로드 시 공개 상태 업데이트
    updateRevealSections();

    // 매초마다 공개 상태를 업데이트
    setInterval(updateRevealSections, 1000);
});