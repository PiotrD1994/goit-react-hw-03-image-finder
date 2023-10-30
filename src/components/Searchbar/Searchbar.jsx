import React, { Component } from 'react'
import PropTypes from 'prop-types';
import css from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        query:'',
    }

    handleInputChange = (event) => {
        this.setState({ query: event.target.value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const {query} = this.state
        if(query.trim() !=='') {
            this.props.onSubmit(query)
        }
    }

    render() {
        return (
            <header className="searchbar">
            <form className="form" onSubmit={this.handleFormSubmit}>
              <button type="submit" className="button">
                <span className="button-label">Search</span>
              </button>
    
              <input
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={this.state.query}
                onChange={this.handleInputChange}
              />
            </form>
          </header>
        )
    }
}

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Searchbar