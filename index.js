/* eslint no-unused-vars: 0 */

function toggleMobileMenu() {
  document
    .getElementById('nav-dropdown-menu')
    .classList.toggle('hidden-dropdown-menu');
  document
    .getElementById('intro-section')
    .classList.toggle('blur-intro-section');
}

function openDropdownItem(menuElement, menuLink) {
  document
    .getElementById('nav-dropdown-menu')
    .classList.toggle('hidden-dropdown-menu');
  document
    .getElementById('intro-section')
    .classList.toggle('blur-intro-section');
  menuElement.href = menuLink;
}

function getTechnologies(technologies) {
  let tech = '';
  for (let i = 0; i < technologies.length; i += 1) {
    const currentTechnology = technologies[i];
    tech += `<li class='tag'>${currentTechnology}</li>`;
  }
  return tech;
}

const popup = document.getElementById('mobile-popup');

function closePopUp() {
  popup.classList.add('hide-mobile-popup');
}

const projectData = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/tonic-work.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/multi-post-stories.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/tonic-work2.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/multi-post-stories2.png',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
];

function generateMobileProjectData(projectList) {
  let data = '';
  for (let i = 0; i < projectList.length; i += 1) {
    const currentProject = projectData[i];
    const technologies = getTechnologies(currentProject.technologies);
    data += `
            <div class='work'>
                <img src='${currentProject.featuredImage}' class='work-image' alt='multi-post-stories2'>
                <h2 class='work-title'>${currentProject.name}</h2>
                <div class='work-pointers'>
                    <p class='work-pointers-title'>CANOPY</p>
                    <ul class='work-pointers-bullets'>
                        <li>Back End Dev</li>
                        <li>2015</li>
                    </ul>
                </div>
                <p class='work-description'>${currentProject.description}</p>
                <ul class='tags'>
                    ${technologies}
                </ul>
                <a href='#!' class='project-link' onclick='openPopUp(${i})'>
                    See Project
                </a>
            </div>
        `;
  }
  return data;
}

document.getElementById('mobile-works').innerHTML = generateMobileProjectData(projectData);

function openPopUp(index) {
  const technologiesUsed = getTechnologies(projectData[index].technologies);
  const data = `
    <div class='work'>
        <div class='mobile-popup-title'>
            <h2 class='work-title'>${projectData[index].name}</h2>
            <i class='fa-regular fa-x mobile-popup-x-icon' onclick='closePopUp()'></i>
        </div>
        <div class='work-pointers'>
            <p class='work-pointers-title'>CANOPY</p>
            <ul class='work-pointers-bullets'>
                <li>Back End Dev</li>
                <li>2015</li>
            </ul>
        </div>
        <img src='${projectData[index].featuredImage}' class='work-image' alt='image of a lady doing yoga'>
        <p class='work-description'>${projectData[index].description}</p>
        <ul class='tags'>
            ${technologiesUsed}
        </ul>
        <div class='mobile-popup-links'>
            <a href='${projectData[index].linkToLiveVersion}' class='mobile-popup-project-link mobile-popup-project-link1'>
                See live
                <img src='/images/Popup-icon.png' alt='image of a small icon' class='popup-icon'>
            </a>
            <a href='${projectData[index].linkToSource}' class='mobile-popup-project-link'>
                See Source
                <img src='/images/github-vector.png' alt='github icon' class='popup-icon'>
            </a>
        </div>
    </div>
    `;
  
  popup.classList.remove('hide-mobile-popup');
}

// desktop
const desktopPopUp = document.getElementById('desktop-popup');
function closeDesktopPopUp() {
  desktopPopUp.classList.add('hide-desktop-popup');
}

const desktopProjectData = [
  {
    name: 'Tonic',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './images/tonic-desktop.png',
    pointersTitle: 'CANOPY',
    pointersLevel: 'Back End Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Multi-Post Stories',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    featuredImage: './images/multi-post-stories-desktop.png',
    pointersTitle: 'FACEBOOK',
    pointersLevel: 'Full Stack Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Facebook 360',
    description:
      'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    featuredImage: './images/facebook.png',
    pointersTitle: 'FACEBOOK',
    pointersLevel: 'Full Stack Dev',
    pointersYear: '2015',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
  {
    name: 'Uber Navigation',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    featuredImage: './images/uber-navigation.png',
    pointersTitle: 'Uber',
    pointersLevel: 'Lead Developer',
    pointersYear: '2018',
    technologies: ['html', 'css', 'javascript', 'Ruby on rails'],
    linkToLiveVersion: '#!',
    linkToSource: '#!',
  },
];

function generateDesktopProjectData(projectList) {
  let data = '';
  for (let i = 0; i < projectList.length; i += 1) {
    const currentProject = desktopProjectData[i];
    let workReverse = '';
    if (i % 2 !== 0) {
      workReverse = 'work-reverse';
    }
    data += `
            <div class='work ${workReverse}'>
                <img src='${currentProject.featuredImage}' class='work-image' alt='image of a website hero-section'>
                <div class='work-description-section'>
                    <h2 class='work-title'>${currentProject.name}</h2>
                    <div class='work-pointers'>
                        <p class='work-pointers-title'>${currentProject.pointersTitle}</p>
                        <ul class='work-pointers-bullets'>
                            <li>${currentProject.pointersLevel}</li>
                            <li>${currentProject.pointersYear}</li>
                        </ul>
                    </div>
                    <p class='work-description'>${currentProject.description}</p>
                    <ul class='tags'>
                        <li class='tag'>html</li>
                        <li class='tag'>css</li>
                        <li class='tag'>javaScript</li>
                    </ul>
                    <a href='#!' class='project-link' onclick='openDesktopPopUp(${i})' >
                     See Project
                    </a>
                </div>  
            </div>
        `;
  }
  return data;
}

document.getElementById('desktop-works').innerHTML = generateDesktopProjectData(projectData);

function openDesktopPopUp(counter) {
  const currentProjectData = desktopProjectData[counter];
  const desktopTechnologies = getTechnologies(
    desktopProjectData[counter].technologies,
  );
  const data = `
    <div class='desktop-popup' >
        <div class='desktop-popup-title'>
            <h2 class='work-title'>${currentProjectData.name}</h2>
        <i class='fa-regular fa-x desktop-dropdown-x-icon' onclick='closeDesktopPopUp()'></i>
        </div>
        <div class='work-pointers'>
            <p class='work-pointers-title'>${currentProjectData.pointersTitle}</p>
            <ul class='work-pointers-bullets-popup'>
                <li>${currentProjectData.pointersLevel}</li>
                <li>${currentProjectData.pointersYear}</li>
            </ul>
        </div>
        <img src='${currentProjectData.featuredImage}' class='desktop-popup-work-image' alt='image of a website hero-section'>
        <div class='desktop-popup-description'>
            <div class='desktop-popup-work-description'>
                <p>${currentProjectData.description}</p>
            </div>
            <div class='desktop-popup-items'>
                <ul class=' desktop-popup-tags'>
                ${desktopTechnologies}
                </ul>
                <a href='${currentProjectData.linkToLiveVersion}' class=' desktop-popup-project-link'>
                See live
                    <img src='/images/Popup-icon.png' alt='image of a small icon' class='popup-icon'>
                </a>
                <a href='${currentProjectData.linkToSource}' class=' desktop-popup-project-link'>
                See Source
                    <img src='/images/github-vector.png' alt='github icon' class='popup-icon'>
                </a>
            </div>  
        </div>  
    </div>
    `;
  desktopPopUp.innerHTML = data;
  desktopPopUp.classList.remove('hide-desktop-popup');
}

// form validation

function validateContactForm() {
  const userEmail = document.forms['my-contact-form']['.email'].value;
  if (userEmail !== userEmail.toLowerCase()) {
    document.getElementById('contact-form-error').innerHTML = 'Your email should be in lowercase';
    return false;
  }
  return true;
}
