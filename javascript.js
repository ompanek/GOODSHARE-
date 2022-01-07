const searchInput =documrnt.querySelector("input");
const wyrazy = document.querySelectorAll("div");
const searchWord = e => {
    const cuurentWord = e.target.value;
    let result = wyrazy;
    result = result.filter(wyrazy => wyrazy.textContent.includes())
    result.forEach(name => wyrazy.appendChild());
}
searchInput.addEventListener('input',searchWord);