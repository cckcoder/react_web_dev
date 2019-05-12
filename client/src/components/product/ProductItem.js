import React, { Component } from 'react'

class ProductItem extends Component {
    constructor(props) {
        super(props);
    }

    doSomething(productName) {
        console.log(productName)
    }

	render() {
		const {productName, unitPrice, thumbnail} = this.props;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt=""/>
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right">{unitPrice} THB</p>
                <button
                    className="btn btn-block btn-secondary title"
                    onClick={() => this.doSomething(productName)}
                >
                    buy
                </button>
                <hr/>
            </div>
        )
	}
}

export default ProductItem;
