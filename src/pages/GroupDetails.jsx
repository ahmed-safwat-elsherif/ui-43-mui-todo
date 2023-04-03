import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { getTodoGroupDetails } from "../api/todoGroups";
import ErrorMessage from "../components/shared/ErrorMessage";
import Image from "../components/shared/Image";
import TodosTable from "../components/todo/TodosTable";
import TodoGroupSkeleton from "../components/todoGroups/TodoGroupSkeleton";

const GroupDetails = () => {
  const [todoGroup, setTodoGroup] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);
    getTodoGroupDetails(id)
      .then((res) => {
        setTodoGroup(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <TodoGroupSkeleton />;
  }

  if (error) {
    return (
      <ErrorMessage>
        Couldn't be able to find the group details of id: {id}
      </ErrorMessage>
    );
  }

  const { title, description, todos, imgSrc } = todoGroup;

  return (
    <Stack>
      <Typography fontStyle="italic" gutterBottom>
        Title:
      </Typography>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Box width={450}>
        <Image width="100%" alt={title} src={imgSrc} />
      </Box>
      <Divider sx={{ my: 2 }} />
      <Typography fontStyle="italic" gutterBottom>
        Description:
      </Typography>
      <Typography>"{description}"</Typography>
      <Divider sx={{ my: 2 }} />
      <TodosTable todos={todos} />
    </Stack>
  );
};

export default GroupDetails;
