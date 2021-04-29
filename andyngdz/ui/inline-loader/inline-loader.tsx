import React from "react";
import { LinearProgress } from "@material-ui/core";

export type InlineLoaderProps = {
  loading: boolean;
};

export const InlineLoader: React.FC<InlineLoaderProps> = ({
  loading,
  children,
}) => {
  if (loading) {
    return <LinearProgress />;
  }

  return <>{children}</>;
};
