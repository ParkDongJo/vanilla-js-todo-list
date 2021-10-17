import TaskList from "../components/TaskList.js";
import useHome from "./../services/useHome.js";

const Home = () => {
  const { datas } = useHome()
  const tasks = TaskList({ datas });
  
  document.getElementById('app').append(tasks);
};

export default Home;
