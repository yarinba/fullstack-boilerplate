import { Container, Paper, Typography } from '@mui/material';

export function App() {
  return (
    <Paper
      sx={{
        height: '100dvh',
        width: '100dvw',
        borderRadius: 0,
      }}
      elevation={0}
    >
      <Container>
        <Typography variant="h1">Hello World</Typography>
      </Container>
    </Paper>
  );
}

export default App;
