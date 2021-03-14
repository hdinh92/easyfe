import React from "react";
import styles from "./ListItems.style";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import PhotoItem from "../PhotoItem/PhotoItem";

const useStyle = styles;

ListItems.propTypes = {};

function ListItems(props) {
  const classes = useStyle();
  const { cards } = props;
  return (
    <Grid container spacing={4}>
      {cards.map((card) => (
        <PhotoItem card={card} />
      ))}
    </Grid>
  );
}

export default ListItems;
