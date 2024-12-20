import Link from 'next/link';
import { Box, Button, Stack, Typography } from '@mui/material';

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component='h1' fontWeight='bolder' fontSize='32px'>
          You're on home page!
        </Typography>
        <Typography fontWeight='bold'>
          Head over to <Link href='mdx-page'>mdx-page</Link> to see the .mdx
          pages!
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button variant='contained'>MUI Button</Button>
          <Button variant='outlined'>MUI Button</Button>
        </Stack>
      </Box>
    </main>
  );
}

