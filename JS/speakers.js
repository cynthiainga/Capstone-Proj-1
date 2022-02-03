const data = [
    {
      id: 1,
      name: 'Gloria Tumushabe',
      images: {
        img: './images/Gloria.jpeg',
        alt: 'speaker-1',
      },
      work: 'Technical Interview Prep.',
      about: 'Gloria Tumushabe is the Founder and an instructor at Afro Fem Coders.She\'s a UC Berkeley computer science Master student from Uganda.',
    },
    {
      id: 2,
      name: 'Lavanya Vijayan',
      images: {
        img: './images/Lavanya.jpg',
        alt: 'speaker-2',
      },
      work: 'Scratch and Python',
      about: 'Lavanya is lead Instructor at Afro Fem Coders, a Master\'s student in Data Science ar UC Berkeley, a coding instructor at the coder school Berkeley, and author of programming courses on LinkedIn Learning.',
    },
    {
      id: 3,
      name: 'Olivia Hsu',
      images: {
        img: './images/Olivia.jpeg',
        alt: 'speaker-3',
      },
      work: 'Machine Learning',
      about: 'Olivia is an Instructor and advisor for Afro Fem Coders. She is currently a second year PhD student at Stanford University studdying Computer Science.',
    },
    {
      id: 4,
      name: 'Concepta Njolima',
      images: {
        img: './images/Concepta.jpeg',
        alt: 'speaker-4',
      },
      work: 'Web Development',
      about: 'Concepta is a sophomore Computer Science and Mathematics double-major at Berea College from Uganda and an Instructor at Afro Fem Coders.',
    },
    {
      id: 5,
      name: 'Tensae Kebede',
      images: {
        img: './images/Tensae.jpeg',
        alt: 'speaker-5',
      },
      work: 'Python and Data Analytics',
      about: 'Tensae is currently interning at Intel as a System Validation Engineer. She working on a software tool to ensure the quality, compatibility, and data integrity of driver.',
    },
    {
      id: 6,
      name: 'Tina Taleb',
      images: {
        img: './images/Tina.jpeg',
        alt: 'speaker-6',
      },
      work: 'Design Innovation',
      about: 'Tina graduated from UC Berkeley with Bachelor\'s in Electrical Engineering and Computer Science and Design Innovation Certificate. She\'s passionate about merging technology with art and using it in education and to improve people\'s lives.',
    },
  ];

  const teamContainer = document.querySelector('#Team .teams');

  function createCard(dataInfo) {
    const li = document.createElement('li');
    li.className = 'card d-flex';
    li.innerHTML = `<div class="card-img">
        <img src="${dataInfo.images.img}" alt="${dataInfo.images.alt}">
      </div>
      <div class="card-body">
        <h3>${dataInfo.name}</h3>
        <h4>${dataInfo.work}</h4>
        <p>${dataInfo.about}</p>
      </div>`;
    return li;
  }
  
  data.forEach((info) => {
    const card = createCard(info);
    teamContainer.appendChild(card);
  });
  
  const teamList = document.querySelectorAll('#Team .teams li');
  const moreBtn = document.querySelector('#Team button');
  const btnSpan = document.querySelector('#Team button span');
  const btnIcon = document.querySelector('#Team button i');
  
  let state = false;
  
  function displayMore() {
    if (!state) {
      teamList.forEach((team) => {
        team.style.display = 'flex';
      });
      btnSpan.textContent = 'LESS';
      btnIcon.classList.remove('fa', 'fa-chevron-down');
      btnIcon.classList.add('fa', 'fa-chevron-up');
  
      state = true;
    } else {
      teamList.forEach((team) => {
        team.style.display = 'none';
      });
      teamList[0].style.display = 'flex';
      teamList[1].style.display = 'flex';
  
      btnSpan.textContent = 'MORE';
      btnIcon.classList.remove('fa', 'fa-chevron-up');
      btnIcon.classList.add('fa', 'fa-chevron-down');
  
      state = false;
    }
  }
  
  moreBtn.addEventListener('click', displayMore);
  