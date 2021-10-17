import Button from './Button.js'

const Task = () => {
  const el = document.createElement("li");

  el.appendChild(Button({
    type: "button",
    name: "완료",
    onClick: () => {}
  }))
  el.appendChild(Button({
    type: "button",
    name: "삭제",
    onClick: () => {}
  }))

  const setText = (text) => {
    console.log("dongjo : ", text)
    el.innerText = text;
  };

  return { li: el, setText };
};

export default Task;
