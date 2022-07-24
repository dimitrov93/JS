const url = "http://localhost:3030/jsonstore/todos";

const useTodosAPI = () => {
  const removeTodo = (todoId) => {
    fetch(`${url}/${todoId}`, {
      method: "DELETE",
    }).then((res) => res.json());
  };

  return removeTodo;
};

export default useTodosAPI;
