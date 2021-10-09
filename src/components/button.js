const button = ({ name, type, onClick } ) => {
  const button = document.createElement("button")

  button.type = type
  button.innerText = name
  button.addEventListener("click", onClick)

  return button
}