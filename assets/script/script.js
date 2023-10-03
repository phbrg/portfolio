console.log('Source code avaliable on my github :)');

// create terminal message
const main = document.querySelector('.main');

function createText(msg, pClass) {
  const createDiv = document.createElement('div');
  createDiv.setAttribute('class', 'father')
  
  if(msg === true) {
    const createSpan = document.createElement('span');
    createSpan.setAttribute('class', 'green');
    createDiv.appendChild(createSpan);

    createSpan.innerHTML = '[ ph@localhost:3000 ~]$&ensp;'
  }
  
  const createP = document.createElement('p');
  createP.setAttribute('class', pClass);
  createDiv.appendChild(createP);

  main.appendChild(createDiv);

  return createP;
}

// date on top
const nDate = new Date();
const dateNoGMT = nDate.toString().replace(/GMT[-+]\d{4}\s+\(.+\)/, '');
const date = createText(false, 'hello');
date.innerHTML = `Last login: ${dateNoGMT}`;

// copy email
const email = "pedrohenriquebatistabergamin@gmail.com";
async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email);
    alert('E-mail copied successfully!');
  } catch(err) {
    alert('Failed to copy email');
    console.log(err);
  }
}

// messages HELL
const type = createText(true, 'type');
const typeMsg = new Typed('.type', {
  strings: ['Hello world!'],
  typeSpeed: 5,
  backSpeed: 0,
  cursorChar: '',
  loop: false,
  onComplete: () => {
    const type = createText(true, 'type2');
    const typeMsg = new Typed('.type2', {
      strings: [`My name is Pedro Henrique, i'm 17 years old and i'm currently living in São Paulo, Brazil`],
      typeSpeed: 5,
      backSpeed: 0,
      cursorChar: '',
      loop: false,
      onComplete: () => {
        const type = createText(true, 'type3');
        const typeMsg = new Typed('.type3', {
          strings: [`I'm a fullstack developer, always studying to improve my skills`],
          typeSpeed: 5,
          backSpeed: 0,
          cursorChar: '',
          loop: false,
          onComplete: () => {
            const type = createText(true, 'type4');
            const typeMsg = new Typed('.type4', {
              strings: [`HardSkills=("HTML5", "CSS3","SASS", "Javascript", "Node.js", "Express.js", "MySQL", "PostgreSQL","Sequelize")`],
              typeSpeed: 5,
              backSpeed: 0,
              cursorChar: '',
              loop: false,
              onComplete: () => {
                const type = createText(true, 'type5');
                const typeMsg = new Typed('.type5', {
                  strings: [`Tools=("Git", "npm", "Postman","Figma", "Photoshop")`],
                  typeSpeed: 5,
                  backSpeed: 0,
                  cursorChar: '',
                  loop: false,
                  onComplete: () => {
                    const type = createText(true, 'type6');
                    const typeMsg = new Typed('.type6', {
                      strings: [`Links=(<a class="underline" href="https://github.com/phpedro06" target="_blank">"Github"</a>, <a class="underline" href="https://www.linkedin.com/in/pedro-henrique-b-bergamin-0070b3277/" target="_blank">"Linkedin"</a>, <a class="underline" href="https://docs.google.com/document/d/1Xi74-yLk5FwePZGwjUK-6YRvXMjik-QamVtv3uLX3ls/edit?usp=sharing" target="_blank">"Curriculum"</a>, <a class="underline" href="mailto:pedrohenriquebatistabergamin@gmail.com" onclick="copyEmail()">"Send an e-mail"</a>)`],
                      typeSpeed: 5,
                      backSpeed: 0,
                      cursorChar: '',
                      loop: false,
                      onComplete: () => {
                        const type = createText(true, 'type7');
                        const typeMsg = new Typed('.type7', {
                          strings: [`Projects=(<a class="underline" href="https://github.com/phpedro06/se7en-project" target="_blank">"se7en, social network"</a>, <a class="underline" href="https://github.com/phpedro06/buscador-cep" target="_blank">"CEP finder"</a>, <a class="underline" href="https://github.com/phpedro06/ip-finder" target="_blank">"IP Finder"</a>, <a class="underline" href="https://github.com/phpedro06/password-generator" target="_blank">"Password generator"</a>)`],
                          typeSpeed: 5,
                          backSpeed: 0,
                          cursorChar: '',
                          loop: false,
                          onComplete: () => {
                            const type = createText(true, 'type8');
                            const typeMsg = new Typed('.type8', {
                              strings: [`Click on the project name to see more about it`],
                              typeSpeed: 5,
                              backSpeed: 0,
                              cursorChar: '',
                              loop: false,
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});