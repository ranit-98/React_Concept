import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const User = () => {
  const getUser = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);
    return res.data;
  };

  const { isLoading, isError, data } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <Grid item md={4} key={index}>
                <Item>
                  <Skeleton variant="rectangular" width="100%" height={150} />
                </Item>
              </Grid>
            ))
          ) : (
            data?.map((user) => (
              <Grid item md={4} key={user.id}>
                <Item>
                  <Card
                    sx={{
                      minWidth: 275,
                      backgroundColor: "blue",
                      color: "whitesmoke",
                    
                     
                    }}
                  >
                    <CardContent>
                      <Typography sx={{ fontSize: 14 , color: "whitesmoke",}} color="text.secondary" gutterBottom>
                        {user?.username}
                      </Typography>
                      <Typography variant="h5" component="div">
                        {user?.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5, color: "whitesmoke", }} color="text.secondary">
                        {user?.company?.name}
                      </Typography>
                      <Typography variant="body2">
                        {user?.email}
                        <br />
                        {user?.phone}
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default User;
