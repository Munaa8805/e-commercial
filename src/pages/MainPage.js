import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { Link, Redirect } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../redux/actions/productsActions";
import Product from "../components/Product/Products";
import Meta from "../components/Meta";

import classes from "./mainpage.module.css";

const MainPage = (props) => {
  const [productsItems, setProductsItems] = useState([]);
  const [filterItem, setFilterItem] = useState(productsItems);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.products();
  }, []);

  useEffect(() => {
    setProductsItems(props.productsItemnuud);
  }, [props.productsItemnuud]);

  const filterProduct = (cat) => {
    const updatedList = productsItems.filter((x) => x.category === cat);
    setFilterItem(updatedList);
  };
  let productuud;
  if (filterItem.length > 0) {
    productuud = filterItem?.map((product) => {
      return <Product product={product} key={product.id} />;
    });
  } else {
    productuud = productsItems?.map((product) => {
      return <Product product={product} key={product.id} />;
    });
  }
  const showProduct = () => {
    return (
      <div className={classes.container}>
        <div className={classes.buttonContainer}>
          <button onClick={() => setFilterItem(productsItems)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>
            Mens's Clothing
          </button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button onClick={() => filterProduct("electronics")}>
            Electronics
          </button>
        </div>
        <div className={classes.productContainer}>{productuud}</div>
      </div>
    );
  };
  let productItems;
  if (props.error) {
    productItems = <p>Уучилаараа алдаа гарлаа.</p>;
  }
  productItems = showProduct();

  // productItems = filterItem?.map((product) => (
  //   <Product product={product} key={product.id} />
  // ));
  return (
    <Container>
      <Meta />
      <p>{localStorage.getItem("userId")}</p>
      {!props.loading ? (
        <p className={classes.spinner}>
          <LoadingSpinner />
        </p>
      ) : (
        <Row>{productItems}</Row>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  // console.log("=======", Array.isArray(state.productsReducer.products));
  // console.log("===console.log====", state.productsReducer.products);
  return {
    productsItemnuud: state.productsReducer.products,
    loading: state.productsReducer.loading,
    error: state.productsReducer.productError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    products: () => dispatch(actions.productItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
