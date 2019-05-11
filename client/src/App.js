import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductItem from './components/product/ProductItem'

class App extends Component{
    render() {
        return (
            <div>
                <Header/>
                <ProductItem productName="IPHONE X" unitPrice="40500"/>
                <ProductItem productName="IPAD PRO 10.5" unitPrice="30500"/>
                <ProductItem productName="IPAD Mini 4" unitPrice="19500"/>
                <Footer company="CodeWiz" email="Codewiz@gmail.com"/>
            </div>
        )
    }

}
export default App;
