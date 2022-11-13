const images = [
    "city.jpg",
    "mountain.jpg",
    "sky.jpg",
    "stars.jpg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img"); // js에서 html img요소를 만들었다.

bgImage.src = `img/${chosenImage}`; // src 설정

document.body.appendChild(bgImage); // body에 붙이기