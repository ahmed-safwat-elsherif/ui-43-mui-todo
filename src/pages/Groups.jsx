import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TodoGroupCards from "../components/todoGroups/TodoGroupCards";

const Groups = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Todo Groups
      </Typography>
      <TodoGroupCards />
    </Box>
  );
};

export default Groups;
