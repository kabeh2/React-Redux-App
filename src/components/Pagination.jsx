import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import * as actionCreator from "../store/actions";

function Pagination({ page, data, prev, next }) {
  useEffect(() => {
    console.log("page", page);
  }, [page]);

  return (
    <div>
      <Button variant="contained" disabled={page === 1} onClick={prev}>
        Back
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={data.length === 0}
        onClick={next}
      >
        Next
      </Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    page: state.page,
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    prev: () => dispatch(actionCreator.prevPage()),
    next: () => dispatch(actionCreator.nextPage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
