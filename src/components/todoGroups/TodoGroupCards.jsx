import React, { useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import TodoGroupCard from "./TodoGroupCard";
import TodoGroupsSkeleton from "./TodoGroupsSkeleton";
import ErrorMessage from "../shared/ErrorMessage";
import { getTodoGroups } from "../../api/todoGroups";

const TodoGroupCards = () => {
  const [todoGroups, setTodoGroups] = useState([]); // keep it as 'undefined' instead of []
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // No need for this in the current situation .. but if you're trying to 'retry' this request.. you might need to reset 'loading => true'.
    setLoading(true);
    setError(null);
    getTodoGroups()
      .then((res) => {
        setTodoGroups(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <TodoGroupsSkeleton />;
  }

  if (error) {
    return <ErrorMessage>Error in retreiving the groups</ErrorMessage>;
  }
  return (
    <Stack direction="row" spacing="15px" component="ul">
      {todoGroups.map((todoGroup) => (
        <Box component="li" key={todoGroup.title}>
          <TodoGroupCard {...todoGroup} />
        </Box>
      ))}
    </Stack>
  );
};

export default TodoGroupCards;
