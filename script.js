const btn = Array.from(document.querySelectorAll('.btntask1'));

console.log(btn);

const colorDivWrapper = document.querySelector('.colorDivWrapper');
colorDivWrapper.innerHTML = '';
btn.forEach((button) => {
  button.addEventListener('click', () => {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'colorDiv';

    switch (button.textContent) {
      case 'Green':
        colorDiv.style.backgroundColor = 'green';
        break;
      case 'Blue':
        colorDiv.style.backgroundColor = 'Blue';
        break;
      case 'Red':
        colorDiv.style.backgroundColor = 'Red';
        break;
    }
    colorDivWrapper.appendChild(colorDiv);
  });
});

// task 2

const firstBtn = document.querySelector('.firstBtn');

const secondtBtn = document.querySelector('.secondtBtn');

const colorDivTask2 = document.querySelector('.divTask2');
console.log(colorDivTask2);
firstBtn.addEventListener('click', () => {
  colorDivTask2.classList.toggle('hidden');
  console.log(';first');
});

secondtBtn.addEventListener('click', () => {
  colorDivTask2.classList.toggle('hidden');
  console.log('second');
});

// task 3

const jokeText = document.querySelector('.jokeText');

async function getJoke() {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const joke = await response.json();

  jokeText.textContent = joke.value;
}

getJoke();

const fetchButton = document.querySelector('#fetchButton');

const likes = document.querySelector('.likes');

const comment = document.querySelector('.comment');

let totalLike = 0;

const thumbsUpButton = document.querySelector('#thumbsUpButton');

const thumbsDownButton = document.querySelector('#thumbsDownButton');
thumbsUpButton.addEventListener('click', () => {
  totalLike++;
  likes.textContent = totalLike;
  comment.textContent = '👍';
});
thumbsDownButton.addEventListener('click', () => {
  totalLike--;
  likes.textContent = totalLike;
  comment.textContent = '👎';
});

fetchButton.addEventListener('click', () => {
  getJoke();
  totalLike = 0;
  likes.textContent = totalLike;
});
