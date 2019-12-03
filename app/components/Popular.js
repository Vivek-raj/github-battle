import React, { Component } from 'react';

class Popular extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage : 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    updateLanguage (language) {
        this.setState({
            selectedLanguage: language
        })
    }

    render () {
        const languages = ['All', 'Javascript', 'Ruby', 'Java', 'Python', 'CSS']

        return (
            <ul className='flex-center'>
                {languages.map((l, index) => (
                    <li key={index}>
                        <button className='btn-clear nav-link'
                        style={l === this.state.selectedLanguage ? {color:'rgb(187, 46, 31)'}:null}
                        //onClick is function definition and not invocation
                        onClick={() => this.updateLanguage(l)}
                        >
                            {l}
                        </button>
                    </li>
                ))}
            </ul>
        )
    }
}


export default Popular;