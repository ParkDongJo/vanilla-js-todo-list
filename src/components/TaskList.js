import Task from "./Task.js";

const TaskList = ({ datas }) => {
  const el = document.createElement("ul");
  
  datas.forEach(data => {
    const { li, setText } = Task();
    setText(data);
    el.append(li);
  });

  return el;
};

export default TaskList;
