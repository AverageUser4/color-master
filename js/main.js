import ColorHandler from './classes/ColorMaster.js';


const colorHandler = new ColorHandler();

const bgColor = colorHandler.stringToObject(getComputedStyle(document.body).backgroundColor);
console.log(bgColor)

for(let i = 0; i < 50; i++) {
  const p = document.createElement('p');
  p.textContent =
    `poza tym się boją wciąż kurwy pierdolone, rzekome ich zarzuty są grubo przesadzone`;

  p.style.color = colorHandler.getContrastingColor(bgColor, true);

  document.body.append(p);
}