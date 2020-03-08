import React, { Component } from 'react'

class FormDetails extends Component {

    render() {
        return (
            <div>
                <form name="booking" method="POST" data-netlify="true">
                    <input type="text" placeholder="Full Name"></input>
                    <input type="text" placeholder="Email Address"></input>
                    <input type="number" placeholder="Contact Number"></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default FormDetails
