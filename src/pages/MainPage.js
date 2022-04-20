import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { Link, Redirect } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../redux/actions/productsActions";
import Product from "../components/Product/Products";
import Meta from "../components/Meta";
import Categories from "../components/Categories/Categories";
import classes from "./mainpage.module.css";

const MainPage = props => {
  const [productsItems, setProductsItems] = useState();
  // console.log("===MAIN PAGE props===", Array.isArray(props.productsItemnuud));
  // console.log("=================sdfaa", props.productsItemnuud);

  useEffect(() => {
    props.products();
  }, []);
  let productItems;
  useEffect(() => {
    setProductsItems(props.productsItemnuud);
  }, [props.productsItemnuud]);

  // console.log("=====productsItems", productsItems);

  if (props.error) {
    productItems = <p>Уучилаараа алдаа гарлаа.</p>;
  }
  productItems = productsItems?.map(product => (
    <Product product={product} key={product.id} />
  ));
  return (
    <Container>
      <Meta />
      <p>{localStorage.getItem("userId")}</p>

      <Row className={classes.categories}>
        <Categories />
      </Row>
      {!props.loading ? (
        <p className={classes.spinner}>
          <LoadingSpinner />
        </p>
      ) : (
        <Row className={classes.container}>{productItems}</Row>
      )}
    </Container>
  );
};

const mapStateToProps = state => {
  // console.log("=======", Array.isArray(state.productsReducer.products));
  // console.log("===console.log====", state.productsReducer.products);
  return {
    productsItemnuud: state.productsReducer.products,
    loading: state.productsReducer.loading,
    error: state.productsReducer.productError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    products: () => dispatch(actions.productItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
