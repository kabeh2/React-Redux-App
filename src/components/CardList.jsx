import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store/actions";
import CryptoCard from "./CryptoCard";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  },
  centerSelf: {
    margin: "32px auto"
  }
}));

function CardList({ state, data, fetchData, page }) {
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, [fetchData, page]);

  console.log(data.length);

  return (
    <div className="coin-container">
      {state.loading ? (
        <div
          className={classes.root}
          style={{ marginBottom: 48, marginTop: 48 }}
        >
          <LinearProgress variant="query" color="secondary" />
        </div>
      ) : state.error ? (
        <h2>{state.error}</h2>
      ) : data.length > 0 ? (
        data.map(coin => <CryptoCard data={coin} key={coin.id} />)
      ) : (
        <>
          <Typography
            className={classes.centerSelf}
            variant="h3"
            gutterBottom
            color="secondary"
            align="center"
          >
            No More Coins Available - Go Back
          </Typography>
        </>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state,
    data: state.data,
    page: state.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
