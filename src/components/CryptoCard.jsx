import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    width: 350,
    justifyContent: "space-between",
    marginBottom: "2%"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  }
}));

function CryptoCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {`${data.market_cap_rank}. ${data.name}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {`$${data.current_price}`}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={data.image}
        title={`${data.name} Icon`}
      />
    </Card>
  );
}

export default CryptoCard;
