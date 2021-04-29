import React, { useEffect, useState } from "react";
import { Container, Box } from "@material-ui/core";
import { InlineLoader } from "./inline-loader";

export const BasicInlineLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Container>
      <Box pt={4}>
        <InlineLoader loading={loading}>Hello, World!</InlineLoader>
      </Box>
    </Container>
  );
};
