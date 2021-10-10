import Task from "./components/Task"
import List from "./components/List"

const Home = () => {
  const datas = [];
  const li = Task({});
  const list = List({ li, datas });
  
  document.getElementById('app').innerHTML = list
};

export default Home;
