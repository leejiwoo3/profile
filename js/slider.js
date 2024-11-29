let currentIndex = 0; // 현재 표시되는 이미지의 인덱스

// 이미지 데이터 배열
const works = [
    { 
        src: 'images/tribe1.png', 
        title: '팬덤 콘텐츠 앱 UI/UX', 
        date: '2024.05-2024.06', 
        description: '이 작품은 팬덤 콘텐츠 앱의 UI/UX 디자인을 중심으로 작업되었습니다.',
        tools: ['images/2D_Figma.png', 'images/Photoshop_2D.png'],
        extraImages: ['images/tribe/tribe.mp4', 'images/tribe/tribe1.png', 'images/tribe/tribe2.png', 'images/tribe/tribe3.png', 'images/tribe/tribe3-1.png', 'images/tribe/tribe3-2.png', 'images/tribe/tribe4.png', 'images/tribe/tribe5.png', 'images/tribe/tribe6.png']
     },
    {
        src: 'images/work2.png', 
        title: '젠지 이스포츠 카드 사이트', 
        date: '2024.09-2024.12', 
        description: 'https://leejiwoo3.github.io/geng/',
        tools: ['images/Photoshop_2D.png', 'images/Illustrator_2D.png', 'images/visualstudio.png'],
        extraImages: ['images/cards/cards1.png', 'images/cards/cards2.png', 'images/cards/cards3.mp4', 'images/cards/cards4.png', 'images/cards/cards5.png', 'images/cards/cards6.mp4']
     },
    { 
        src: 'images/work3.png', 
        title: '언리얼 팀 프로젝트 <REVENGE OF HYBRID>', 
        date: '2024.05-2024.07', 
        description: '작품 3 설명',
        tools: ['images/Photoshop_2D.png', 'images/Aftereffect_2D.png', 'images/2D_3dsMAX.png', 'images/unreal.png'],
        extraImages: ['images/.png']
    },
    { 
        src: 'images/work4.png', 
        title: '언리얼 팀 프로젝트 <어사실록>', 
        date: '2024.08-2024.11', 
        description: '언리얼 팀프로젝트로 맡은 역할은 아이템 아이콘 UI, UI 프로토타입, NPC AI, NPC 그래픽 수정, 시네마틱, 영상 편집 등이 있다.',
        tools: ['images/Photoshop_2D.png', 'images/Illustrator_2D.png', 'images/Aftereffect_2D.png', 'images/2D_3dsMAX.png', 'images/2D_Blender.png', 'images/unreal.png'],
        extraImages: ['images/unreal2/unreal1.jpg', 'images/unreal2/unreal2.jpg', 'images/unreal2/unreal3.jpg', 'images/unreal2/unreal4.jpg', 'images/unreal2/unreal5.jpg', 'images/unreal2/unreal6.jpg', 'images/unreal2/unreal7.jpg', 'images/unreal2/unreal8.jpg', 'images/unreal2/unreal9.jpg', 'images/unreal2/unreal10.jpg', 'images/unreal2/unreal11.jpg', 'images/unreal2/unreal12.jpg', 'images/unreal2/unreal13.jpg', 'images/unreal2/unreal14.jpg', 'images/unreal2/unreal15.jpg', 'images/unreal2/unreal16.jpg', 'images/unreal2/unreal17.jpg', 'images/unreal2/unreal_icons.png', 'images/unreal2/unreal_npc1.png', 'images/unreal2/unreal_npc2.png', 'images/unreal2/unreal_npc3.png', 'images/unreal2/unreal_npc4.png', 'images/unreal2/unreal_npc5.png', 'images/unreal2/unreal_npc6.png', 'images/unreal2/unreal_npc7.png', 'images/unreal2/unreal_npc8.png', 'images/unreal2/unreal_npc9.png', 'images/unreal2/unreal_npc10.png', 'images/unreal2/unreal_npc11.png', 'images/unreal2/unreal2_cine.mp4', 'images/unreal2/unreal2_end.mp4']
    },
    { 
        src: 'images/work5.png', 
        title: '3D 캐릭터 <미소>', 
        date: '2024.05-2024.06', 
        description: '캐릭터 스토리텔링 마케팅을 통해 이미지 변신이 필요한 최근 판매가 부진한 제품. 그 중에도 특징을 잡아 캐릭터를 개발할 수 있는 오리온 제과 고소미 제품을 선택함. 최근에 출시된 과자들에 비해 판매가 부진한 오리온 제과 고소미 제품의 판매량 증가를 위한 캐릭터 마케팅. 맛에 비해 옛날 과자라는 편견으로 올드한 이미지가 있어 요즘 사람들이 찾지 않는다. 기존 제품의 올드하고 무색무취한 이미지를 개선할 것이다.',
        tools: ['images/Photoshop_2D.png', 'images/Illustrator_2D.png', 'images/2D_3dsMAX.png', 'images/2D_Blender.png'],
        extraImages: ['images/miso/miso1.png', 'images/miso/miso2.png', 'images/miso/miso3.png', 'images/miso/miso4.png', 'images/miso/miso5.png', 'images/miso/miso6.png', 'images/miso/miso7.png', 'images/miso/miso8.png', ]
    },
    { 
        src: 'images/work6.png', 
        title: '3D 캐릭터 <푸딩이>', 
        date: '2024.03-2024.04', 
        description: '이름은 푸딩이, 성격은 밝고 활발하다. 특징으론 푸딩 시럽 같은 투톤머리에 생크림과 체리가 얹어져 있다. 메롱하는 표정이 포인트다. 푸딩을 의인화한 캐릭터.',
        tools: ['images/Photoshop_2D.png', 'images/Illustrator_2D.png', 'images/2D_3dsMAX.png'],
        extraImages: ['images/puding/puding1.png', 'images/puding/puding2.png', 'images/puding/puding3.png', 'images/puding/puding4.png', 'images/puding/puding5.png', 'images/puding/puding7.png', 'images/puding/puding8.png', ]
    },
    { 
        src: 'images/work7.png', 
        title: '3D 전시 공간', 
        date: '2023.11-2023.12', 
        description: '작품을 전시할 수 있는 3D 공간을 제작하였다.',
        tools: ['images/Photoshop_2D.png', 'images/2D_3dsMAX.png'],
        extraImages: ['images/3Dspace/3Dspace0.png', 'images/3Dspace/3Dspace1.png', 'images/3Dspace/3Dspace2.png', 'images/3Dspace/3Dspace3.png', 'images/3Dspace/3Dspace4.png', 'images/3Dspace/3Dspace5.png', 'images/3Dspace/3Dspace6.png']
    },
    { 
        src: 'images/work8.png', 
        title: '3D 실내 공간', 
        date: '2023.05-2023.06', 
        description: '네이비&화이트 테마의 실내 공간이다. 제작한 3D 가구를 배치하여 사용감이 있는 실내로 꾸몄다.',
        tools: ['images/2D_3dsMAX.png'],
        extraImages: ['images/3Droom/3Droom1.png', 'images/3Droom/3Droom2.png', 'images/3Droom/3Droom3.png', 'images/3Droom/3Droom4.png', 'images/3Droom/3Droom5.png', ]
    },
    { 
        src: 'images/work9.png', 
        title: '렌즈미 B.I 리뉴얼', 
        date: '2023.05-2023.06', 
        description: '브랜드 <렌즈미>의 B.I를 리뉴얼하였다.',
        tools: ['images/Photoshop_2D.png', 'images/Illustrator_2D.png'],
        extraImages: ['images/lensme/lensme1.png', 'images/lensme/lensme2.png', 'images/lensme/lensme3.png', 'images/lensme/lensme4.png', 'images/lensme/lensme5.png', 'images/lensme/lensme6.png', 'images/lensme/lensme7.png']
    },
    { 
        src: 'images/work10.png', 
        title: '캐릭터 <장아지>', 
        date: '2023.11-2023-12', 
        description: ' ',
        tools: ['images/Photoshop_2D.png', 'images/Illustrator_2D.png'],
        extraImages: ['images/aji/agi1.png', 'images/aji/agi2.png', 'images/aji/agi3.png', 'images/aji/agi4.png', 'images/aji/agi5.png', 'images/aji/agi6.png', 'images/aji/agi7.png', 'images/aji/agi8.png', 'images/aji/agi9.png', 'images/aji/agi10.png', 'images/aji/agi11.png']
    },
    { 
        src: 'images/work11.png', 
        title: '캐릭터 <럭햄이>', 
        date: '2023.10-2023.10', 
        description: '네잎클로버를 들고 있는 햄스터. 행운의 햄스터로 상대에게 LUCKY함을 선물한다. 귀 안은 하트로 되어있고, 볼터치로 귀여운 느낌을 준다. 노란색 후드집업과 바지를 입고 있다. 빨간 리본이 포인트다. 메인 이미지는 신나게 달리고 있는 이미지로, 럭햄이는 두발로 걷는다.',
        tools: ['images/Photoshop_2D.png', 'images/Illustrator_2D.png'],
        extraImages: ['images/hamster/hamster1.png', 'images/hamster/hamster2.png']
    },
    { 
        src: 'images/work12.png', 
        title: '용산공원 소개 360 영상', 
        date: '2023.10-2023.10', 
        description: 'https://youtu.be/sFJZMsdxXtI',
        tools: ['images/Photoshop_2D.png', 'images/Illustrator_2D.png', 'images/Aftereffect_2D.png'],
        extraImages: ['images/360video/360video.mp4']
    },
];

// 초기 실행 방지
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none'; // 초기에는 숨김 처리
});


// 모달 열기 함수
function openModal(index) {
    currentIndex = index;
    const modal = document.querySelector('.modal');
    // 이미지 및 텍스트 업데이트
    updateModalContent(); 
    // 모달 표시
    modal.style.display = 'flex';
}

// 모달 닫기 함수
function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

// 모달 이미지 HTML 동적으로 추가
function updateModalContent() {
    const modalTitle = document.querySelector('.modal-header h1');
    const modalDate = document.querySelector('.modal-header p:nth-child(2)');
    const modalDescription = document.querySelector('.modal-body .description');
    const modalIcons = document.querySelector('.modal-header .icons');
    const modalImages = document.querySelector('.modal-body .extra-images');

    // 현재 작품 데이터
    const work = works[currentIndex];

    // 제목, 날짜, 설명 업데이트
    modalTitle.textContent = work.title;
    modalDate.textContent = work.date;
    modalDescription.textContent = work.description;
    // description 업데이트 시 링크 추가
    if (work.description.startsWith('http')) {
        modalDescription.innerHTML = `링크: <a href="${work.description}" target="_blank">여기를 클릭하세요</a>`;
    } else {
        modalDescription.textContent = work.description;
    }
    


    // 사용 앱 아이콘 업데이트
    modalIcons.innerHTML = ''; // 기존 아이콘 제거
    modalIcons.style.display = 'flex'; // 가로로 나열되도록 설정
    modalIcons.style.flexWrap = 'wrap'; // 너무 많을 경우 줄 바꿈
    work.tools.forEach((icon) => {
        const img = document.createElement('img');
        img.src = icon;
        img.alt = 'Tool Icon';
        img.style.width = '30px';
        img.style.height = '30px';
        img.style.margin = '5px';
        modalIcons.appendChild(img);
    });

    // 추가 이미지 업데이트 및 비디오 업데이트
    modalImages.innerHTML = ''; // 기존 이미지 제거
    work.extraImages.forEach((extraImg) => {
        if (extraImg.endsWith('.mp4')) {
            // 비디오 파일 처리
            const video = document.createElement('video');
            video.src = extraImg;
            video.controls = true; // 비디오 컨트롤러 추가
            video.style.width = '60%'; // 비디오 크기 설정
            video.style.margin = '0 10px';
            video.style.borderRadius = '8px'; // 비디오 모서리 둥글게
            modalImages.appendChild(video);
        } else {
            // 이미지 파일 처리
            const img = document.createElement('img');
            img.src = extraImg;
            img.alt = `${work.title} 추가 이미지`;
            img.style.width = '60%';
            img.style.margin = '0 10px';
            img.style.borderRadius = '8px'; // 이미지 모서리 둥글게
            modalImages.appendChild(img);
        }
    });
}

// 모달 닫기 버튼 이벤트
document.querySelector(".close-button").addEventListener("click", closeModal);

// 모달 외부 클릭 시 닫기
document.querySelector(".modal").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
        closeModal();
    }
});
