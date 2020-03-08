import React, { Component } from 'react'

class FormDetails extends Component {

    render() {
        return (
            <div>
                <form name="booking" netlify netlify-honeypot="bot-field" hidden>
                    <input type="text" placeholder="Full Name"></input>
                    <input type="text" placeholder="Email Address"></input>
                    <input type="tel" placeholder="Contact Number"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default FormDetails
