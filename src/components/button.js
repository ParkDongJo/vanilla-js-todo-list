const Button = ({ name, type, onClick } ) => {
  const el = document.createElement("button");

  el.type = type;
  el.innerText = name;
  el.addEventListener("click", onClick);

  return el;
};

export default Button;
