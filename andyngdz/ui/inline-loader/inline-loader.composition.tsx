import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { InlineLoader } from "./inline-loader";

const useStyles = makeStyles(
  (theme) => ({
    content: {
      padding: theme.spacing(2),
    },
  }),
  {
    name: "BasicInlineLoader",
  }
);

export const BasicInlineLoader = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className={classes.content}>
      <InlineLoader loading={loading}>Hello, World!</InlineLoader>
    </div>
  );
};
