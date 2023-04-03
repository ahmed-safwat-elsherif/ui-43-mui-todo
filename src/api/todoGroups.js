import axiosBase from "axios";

const axios = axiosBase.create({ baseURL: "http://localhost:3001" });

export const getTodoGroups = () => axios.get("/todo-groups");

export const getTodoGroupDetails = (id) =>
  Promise.all([
    axios.get(`/todo-groups/${id}`),
    axios.get(`/todos?groupId=${id}`),
  ]).then((res) => {
    const [todoGroupDetails, todos] = res.map((r) => r.data);

    return { ...todoGroupDetails, todos };
  });

/**
 * {
 *   id ,
 *   title,
 *   description,
 *   todos:[
 *  {id, title, completed},
 * ]
 * }
 *
 *
 *
 */

// Read more about axios interceptors

// axios.interceptors.request.use()
