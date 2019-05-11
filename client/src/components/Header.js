import React, { Component } from 'react'

class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {date: new Date()};
        setInterval(() => this.tick(), 1000)
        console.log('constructor')
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
        console.log('componentWillUnmount')
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div>{this.state.date.toLocaleTimeString()}</div>
        )
    }

}
export default Header;