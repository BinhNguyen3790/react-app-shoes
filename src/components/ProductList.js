import { Component } from "react";
import ProductItem from "./ProductItem";
import dataShoes from "../data.json";

export default class ProductList extends Component {
  render() {
    return (
      <div className="align-items-start row vh-100">
        <div className="nav flex-column py-5 mt-3 nav-pills col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
            Home
          </button>
          <button className="nav-link" id="v-pills-product-tab" data-bs-toggle="pill" data-bs-target="#v-pills-product" type="button" role="tab" aria-controls="v-pills-product" aria-selected="false">
            Products
          </button>
        </div>
        <div className="tab-content col-9" id="v-pills-tabContent">
          <div className="tab-pane fade show active py-5" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
            <ProductItem dataShoes={dataShoes} />
          </div>
          <div className="tab-pane fade" id="v-pills-product" role="tabpanel" aria-labelledby="v-pills-product-tab">
            product site
          </div>
        </div>
      </div>
    );
  }
}
