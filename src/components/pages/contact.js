import React from 'react'

function Contact() {
    return (
        <main className="container mt-5   float-left">
        <div className="row">
          <div className="col-md-8">
            <section className="container-fluid mt-3">
              <div className="row">
                <div className="col">
                  <h3 className="header">Contact</h3>
                  <hr/>
                </div>
              </div>
                  <div className="row">
                    <div className="col">
                      <div>
                        <div className="form-row mt-2">
                          <div className="col">
                            <input type="text" className="form-control" placeholder="First name"/>
                          </div>
                          <div className="col">
                            <input type="text" className="form-control" placeholder="Last name"/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="form-group row mt-4">
                          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</label>
                          <div className="col-sm-10">
                            <input type="email" className="form-control" id="colFormLabel" placeholder="Email address"/>
                          </div>
                        </div>
                          <section className="was-validated">
                          <div className="mb-3">
                          <label htmlFor="validationTextarea">Message</label>
                          <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Message" required></textarea>
                          <div className="invalid-feedback">
                            Please enter a message in the textarea.
                          </div>
                          </div>
                        </section>
                        <button className="btn btn-primary mb-3" type="submit">Submit</button>
                      </div>
                    </div>
                  </div>
            </section>
          </div>
        </div>
      </main>
    )
}
export default Contact;