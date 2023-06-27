import './styles.css';
import React from "react";

function ContactUs() {
    return (
        <form className="contact-form">
            <input type="text" name="from_name" class="form_input" placeholder="NAME"/>
            <input type="email" name="from_email" class="form_input" style={{marginTop: "25px"}} placeholder="EMAIL"/>
            <textarea name="message" id="form_message" placeholder="MESSAGE"/>
            <input type="submit" id="form_submit"/>
        </form>
    );
}

export default ContactUs;