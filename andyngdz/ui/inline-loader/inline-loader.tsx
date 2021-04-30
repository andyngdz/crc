import React from "react";
import { LinearProgress, LinearProgressProps } from "@material-ui/core";

export interface InlineLoaderProps extends LinearProgressProps {
  loading: boolean;
}

export const InlineLoader: React.FC<InlineLoaderProps> = ({
  loading,
  children,
  color = "secondary",
  ...restProps
}) => {
  if (loading) {
    return <LinearProgress color={color} {...restProps} />;
  }

  return <>{children}</>;
};
