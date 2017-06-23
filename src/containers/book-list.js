import React, { Component } from 'react'; 
import { connect } from 'react-redux'
import {selectBook} from '../actions/index.js'
import {bindActionCreators} from 'redux' //allows action to flow through reducers

class BookList extends Component {
    renderList () {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {  //this function is the glue between react and redux, in a way
    //Whatever is returned will show up as props
    //inside of BookList
    return {
        books: state.books
    }
}

//Anything returned from this function ends up as props on the BookList container
function mapDispatchToProps(dispatch) {
    //Whenever selectBook is called, the result should be passed to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

//Promote BookList from a component to a container--it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//Only create containers out of components that care about particular changes in state.
//Only the most parent component that uses a particular piece of state needs to be connected to Redux.
