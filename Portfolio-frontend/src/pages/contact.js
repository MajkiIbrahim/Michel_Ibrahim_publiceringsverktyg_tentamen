import React from "react"
import Layout from "../components/Layout"
import {ContactWrapper, ContactForm} from "../elements/ContactElement"
import SEO from "../components/SEO"

//Form which will post form to formspree
const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontakt" />
      <ContactWrapper>
        <ContactForm>
          <h3>Contact me</h3>
          <form action="https://formspree.io/f/mbjpnogr" method="POST">
            <div className="form-group">
              <input type="text" placeholder="name" name="name" className="form-control" />
              <input type="email" placeholder="email" name="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="message" className="form-control">

              </textarea>
            </div>
            <button type="submit" className="btn submit-btn">Send</button>
          </form>
          </ContactForm>
        </ContactWrapper>
    </Layout>
  )
}

export default contact
