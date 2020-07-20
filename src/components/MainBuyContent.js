import React from "react";
import { useParams } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { catalog } from '../constants/catalog.json'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  fullWidth: {
    width: "100%"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "50%"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%"
  },
  displayCatalog: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    margin: "30px 30px 0 30px"
  },
  item: {
    textAlign: "center",
    marginBottom: "30px",
  },
  itemImage: {
    maxHeight: "368px"
  }
}));

export default () => {
  const classes = useStyles();
  let { category } = useParams();
  return (
    <main className={classes.fullWidth}>
      <div className={classes.title}>
        <Typography variant="h6">{category}</Typography>
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className={classes.displayCatalog}>
        {catalog.map((item) => (
          <Card className={classes.item} key={item.id}>
            <CardActionArea>
              <img className={classes.itemImage} src={item.image} alt={item.name} />
              <Typography gutterBottom variant="h5" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.price}
              </Typography>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <span>{process.env.REACT_APP_MY_VARIABLE}</span>
    </main>
  );
};
