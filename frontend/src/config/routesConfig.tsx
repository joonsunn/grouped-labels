import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout/MainLayout';
import Main from '../pages/main/Main';
// import mainConfig from "../pages/main/mainConfig";
// import aboutConfig from "../pages/about/aboutConfig";
// import aboutOtherConfig from "../pages/aboutOther/aboutOtherConfig";
// import materialUiConfig from "../pages/materialUI/materialUiConfig";
// import formsConfig from "../pages/forms/formsConfig";
// import tablesConfig from "@/pages/tables/tablesConfig";
// import AlertPopup from "@/components/AlertPopup";

const unProtectedRoutesConfig = [
  // mainConfig,
  // aboutConfig,
  // aboutOtherConfig,
  // materialUiConfig,
  // formsConfig,
  // tablesConfig,
];

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => ({ data: 'hello world' }),
    element: (
      <>
        {/* <AlertPopup /> */}
        <MainLayout />
      </>
    ),
    children: [
      // ...unProtectedRoutesConfig.map((config) => config.routes).flat(),
      {
        path: '',
        element: <Main />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);
