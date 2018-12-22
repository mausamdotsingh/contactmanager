import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };

  static defaultProps = {
    name: "Fred Smith",
    email: "fred@yahoo.com",
    phone: "777-777-7777"
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="card-header">
            Add AddContact
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                    defaultValue={name}
                    onChange={this.onChange}
                    ref={this.nameInput}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Email..."
                    defaultValue={email}
                    onChange={this.onChange}
                    ref={this.emailInput}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone..."
                    defaultValue={phone}
                    onChange={this.onChange}
                    ref={this.phoneInput}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-block"
                  value="Add Contact"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
