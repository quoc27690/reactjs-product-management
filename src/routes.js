import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <ProductActionPage history={history} />, // Truyền history để gọi hàm history.goBack()
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ match, history }) => (
      <ProductActionPage match={match} history={history} /> // Truyền match để lấy param id
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
