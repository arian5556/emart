import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Product = ({ category }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/shop");
  };
  const { name, img, seller, price, stock, star } = category;
  return (
    <Grid
      className="mx-auto text-center mb-5 product"
      sx={{ mt: 5 }}
      item
      xs={12}
      md={3}
      sm={6}
    >
      <Card
        sx={{ maxWidth: 345, borderRadius: 3, boxShadow: "3px 5px 10px gray" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name.slice(0, 35)}
            </Typography>
            <Typography
              variant="subtitle1"
              className="ms-3"
              color="text.secondary"
            >
              Price: {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="outline-warning"
            className="w-100"
            onClick={handleClick}
          >
            Shop Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
