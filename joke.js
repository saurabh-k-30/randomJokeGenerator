// <p id="joke">Your jokes are loading...</p>
{
  /* <button id="btn">Next Joke</button> */
}

const jokes = document.querySelector("#joke");
const btn = document.querySelector("#btn");

const generateJokes = () => {
  const setHeader = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) => res.json())
    .then((data) => {
      jokes.innerHTML = data.joke;
    })
    .catch((err) => console.log(err));
};


btn.addEventListener('click',generateJokes);

generateJokes();