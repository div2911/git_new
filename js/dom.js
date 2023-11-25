const alllis = document.querySelectorAll('li')
const colors = ['yellow', 'blue', 'red', 'black']
alllis.forEach((value, i) => {
    const color = colors[i];
    console.log(value, color)
})