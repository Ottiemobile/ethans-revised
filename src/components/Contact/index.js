import React from "react";

function Contact() {
    return (
        <section className="contact">
            <div className="align-items-center contact">
                <h2 className=" font-weight-light">
                    Contact Me
                </h2>
            </div>
            <div className="align-items-center input">
            <form id = "contact-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name = "name"/>
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name = "email"/>
                    </div>

                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name = "message" rows="5"  />
                    </div>

                    <button type="submit">Submit</button>
                </form> 
            </div>
        </section>
    )
}

export default Contact;