const List = ({ li, datas }) => {
  const el = document.createElement("ul");
  
  datas.forEach(data => {
    li.innerText = data;
    el.appendChild(li);
  });

  return el;
};

export default List;
