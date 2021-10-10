import Button from './Button'

const Task = ({ text }) => {
  const el = document.createElement("li");

  if (text) {
    el.innerText = text;
  }
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

  return el;
};

export default Task;
