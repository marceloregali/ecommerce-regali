import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Card sx={{ Width: 345 }}>
      <CardMedia
        sx={{ height: 140, width: "100%" }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="contained">
            VER MAS
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  price: PropTypes.object,
  id: PropTypes.func,
  title: PropTypes.number,
  description: PropTypes.number,
  img: PropTypes.object,
};
