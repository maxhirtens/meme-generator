const url = document.getElementById('image')
const topText = document.getElementById('top-text')
const bottomText = document.getElementById('bottom-text')
const button = document.querySelector('button')
const section = document.querySelector('section')
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const newMeme = document.createElement('div');
  const newImage = document.createElement('img');
  const removeBtn = document.createElement('button');
  let textDiv1 = document.createElement('div');
  let textDiv2 = document.createElement('div');

  // create the remove button
  removeBtn.innerText = 'Remove';
  removeBtn.id = 'remove';

  // add classes
  newMeme.className = 'image-container';
  textDiv1.className = 'top-text';
  textDiv2.className = 'bottom-text';

  // set the img src
  newImage.src = url.value;

  // set the text src
  textDiv1.innerHTML = topText.value;
  textDiv2.innerHTML = bottomText.value;

  // assemble the complete div
  newMeme.appendChild(textDiv1);
  newMeme.appendChild(textDiv2);
  newMeme.appendChild(newImage);
  newMeme.appendChild(removeBtn);
  section.appendChild(newMeme);
  form.reset()
}
)

section.addEventListener('click', function(e){
  if(e.target.id === 'remove'){
    e.target.parentElement.remove()
  }
}
)
