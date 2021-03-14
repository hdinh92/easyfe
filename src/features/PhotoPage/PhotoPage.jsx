import Container from "@material-ui/core/Container";
import { cards } from "commons/commons";
import React from "react";
import ListItems from "./components/ListItems/ListItems";
import styles from "./PhotoPage.style";

PhotoPage.propTypes = {};

const useStyle = styles;
function PhotoPage(props) {
  const classes = useStyle();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <ListItems cards={cards} />
    </Container>
  );
}

export default PhotoPage;
