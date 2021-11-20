export default function getRandomRGB() {
  return `rgb(${Math.floor(Math.random() * 235)}, ${Math.floor(
    Math.random() * 235
  )}, ${Math.floor(Math.random() * 235)})`;
}
