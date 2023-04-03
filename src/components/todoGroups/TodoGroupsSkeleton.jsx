import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Paper,
  Skeleton,
  Stack,
} from "@mui/material";
import React from "react";

const numberOfCards = 3;

const TodoGroupsSkeleton = () => {
  return (
    <Stack direction="row" spacing="15px">
      {Array.from(new Array(numberOfCards)).map((_, index) => (
        <Card sx={{ maxWidth: 345 }} key={index} elevation={2}>
          <CardHeader
            title={
              <Skeleton variant="text" sx={{ width: "200px", fontSize: 20 }} />
            }
            action={
              <Skeleton
                variant="circular"
                sx={{ width: "20px", height: "20px" }}
              />
            }
          ></CardHeader>
          <Divider />
          <CardMedia
            sx={{ height: 140, display: "flex", justifyContent: "center" }}
          >
            <Skeleton
              variant="rectangular"
              sx={{ width: "250px", height: "150px" }}
            />
          </CardMedia>
          <CardContent>
            <Skeleton variant="text" sx={{ width: "300px", fontSize: 15 }} />
            <Skeleton variant="text" sx={{ width: "100px", fontSize: 15 }} />
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{ width: "80px", height: "30px" }}
            />
            <Skeleton
              variant="rounded"
              sx={{ width: "80px", height: "30px" }}
            />
          </CardActions>
        </Card>
      ))}
    </Stack>
  );
};

export default TodoGroupsSkeleton;
