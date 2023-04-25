const myForm = document.querySelector('.myForm');
const myText = document.querySelector('.myText');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
myForm.addEventListener('submit' , (e) => {
  e.preventDefault();
  if(myText.value >= 100){
    result.innerHTML = "Please enter a number between 0 and 99";
  } else{
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then((data) => {
      let mem = data.data.memes[myText.value];
      let memUrl = mem.url;
      let img = `<img class = "img" src = "${memUrl}">`;
      result.innerHTML = img;
      myText.value = "";
    });
  };
});
