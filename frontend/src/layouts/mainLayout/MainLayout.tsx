import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import AlertPopup from "@/components/AlertPopup";

function MainLayout() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isDesktop = useMediaQuery('(min-width: 601px)');

  // const data = useLoaderData() as { data: string };
  return (
    <Box
      className="container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        padding: '24px 36px',
        gap: '24px',
      }}
    >
      {/* <AlertPopup /> */}
      {/* {isDesktop && <Header />} */}
      <Outlet />
      {/* <div>{data?.data}</div> */}
      {/* <Footer /> */}
    </Box>
  );
}

export default MainLayout;
