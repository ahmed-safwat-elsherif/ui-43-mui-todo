import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import Image from "../shared/Image";

const TodoGroupCard = (props) => {
  const { id, title, description, imgSrc } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={<Typography variant="h5">{title}</Typography>}
        action={
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
        }
      />
      <CardMedia
        sx={{
          height: 140,
          display: "flex",
          justifyContent: "center",
        }}
        title={title}
      >
        <Image src={imgSrc} alt={title} height="100%" />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <Button
          size="small"
          variant="contained"
          component={Link}
          to={`/groups/${id}`}
          startIcon={<RemoveRedEyeIcon />}
        >
          View
        </Button>
        <Button
          size="small"
          variant="contained"
          color="success"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoGroupCard;
