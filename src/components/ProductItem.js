import { Component } from "react";

export default class ProductItem extends Component {
  renderShoes = () => {
    return this.props.dataShoes.map((shoes, index) => {
      return (
        <div className="col-3 py-3 w3-animate-zoom" key={index}>
          <div className="card h-100">
            <img src={shoes.image} className="card-img-top" alt={shoes.alias} />
            <div className="card-body">
              <h5 className="card-title">{shoes.name}</h5>
              <p className="card-text">{shoes.description}</p>
              <p className="card-text fw-bold">{shoes.price}$</p>
              <p className="card-text">{shoes.quantity}</p>
              <button className="w3-button w3-black">
                buy <i className="fa fa fa-truck"></i>
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderShoes()}</div>;
  }
}
