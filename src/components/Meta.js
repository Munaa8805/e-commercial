import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Shopping-App",
  description: "Та бүхэн онлайн худалдаа, онлайн дэлгүүр",
  keywords:
    "онлайн худалдаа, хямдралтай худалдаа, бүх төрлийн барааны худалдаа, үнэт эдлэлийн худалдаа"
};

export default Meta;
