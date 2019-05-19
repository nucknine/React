import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-52835.firebaseio.com/"
});

export default instance;
