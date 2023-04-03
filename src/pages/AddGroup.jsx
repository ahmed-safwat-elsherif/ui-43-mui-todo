import React from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

const AddGroup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "", description: "" },
    mode: "onTouched",
  });

  const onSubmitSuccess = (data) => {
    console.log(data);
  };

  const onSubmitFailed = (err) => {
    console.log(err);
  };

  return (
    <Box>
      <Typography variant="h1">Create new Group</Typography>
      <Divider />
      <Stack
        spacing="20px"
        maxWidth={500}
        marginX="auto"
        my={3}
        onSubmit={handleSubmit(onSubmitSuccess, onSubmitFailed)}
        component="form"
        noValidate
      >
        <TextField
          {...register("title", {
            required: "Title is mandatory field", //
            validate: (value) =>
              !!value.trim() || "Title shouldn't be empty spaces", // validation fields should be true or string
          })}
          label="Title"
          required
          autoFocus
          helperText={errors.title?.message}
          error={!!errors.title}
        />
        <TextField
          {...register("description", {
            required: "Description is mandatory field",
            validate: (value) =>
              !!value.trim() || "Description shouldn't be empty spaces",
          })}
          label="Description"
          multiline
          required
          rows={10}
          helperText={errors.description?.message}
          error={!!errors.description}
        />
        <Stack direction="row">
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Button>Cancel</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AddGroup;
