import { Box, Stack, Skeleton } from "@mui/material";
import React from "react";

const TodoGroupSkeleton = () => {
  return (
    <Stack spacing="20px">
      <Skeleton variant="text" sx={{ fontSize: "35px", width: "200px" }} />
      <Box sx={{ width: 350 }}>
        <Skeleton
          variant="rectangular"
          sx={{ width: "100%", height: "300px" }}
        />
      </Box>
      <Stack spacing="10px">
        <Skeleton variant="text" sx={{ fontSize: "16px", width: "100px" }} />
        <Box>
          <Skeleton variant="text" sx={{ fontSize: "20px", width: "500px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px", width: "500px" }} />
          <Skeleton variant="text" sx={{ fontSize: "20px", width: "300px" }} />
        </Box>
      </Stack>
      <Skeleton variant="text" sx={{ fontSize: "16px", width: "100px" }} />
      <Skeleton variant="rectangular" sx={{ width: "100%", height: "200px" }} />
    </Stack>
  );
};

export default TodoGroupSkeleton;
