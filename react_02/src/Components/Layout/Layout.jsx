import React, { Component } from 'react';
import List from '../List/List'
import Counter from '../Counter/Counter'

class Layout extends Component {
    render() {
        const users = ['Jack', 'Anna', 'Petr', 'Taras']
        return (
            <>
                {/* <List list={users}/>
                <List /> */}
                <Counter />
            </>
        );
    }
}

export default Layout;