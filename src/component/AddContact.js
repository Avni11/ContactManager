import React from "react";
class AddContact extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    address: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.firstname === "" || this.state.phonenumber === "") {
      alert("Make Sure you Enter name and phone number");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({
      firstname: "",
      phonenumber: "",
      email: "",
      address: "",
      lastname: "",
    });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form onSubmit={this.add}>
          <div class="row">
            <div class="col-md-6">
              <label for="Name" class="form-label">
                Firstname
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Rinson"
                value={this.state.firstname}
                onChange={(e) => this.setState({ firstname: e.target.value })}
              />
            </div>
            <div class="col-md-6">
              <label for="Lastname" class="form-label">
                Lastname
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Smith"
                value={this.state.lastname}
                onChange={(e) => this.setState({ lastname: e.target.value })}
              />
            </div>
          </div>
          <div class="col-12">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="abc@gmail.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div class="col-12">
            <label for="PhoneNumber" class="form-label">
              PhoneNumber
            </label>
            <input
              type="number"
              class="form-control"
              placeholder="9911665510"
              value={this.state.phonenumber}
              onChange={(e) => this.setState({ phonenumber: e.target.value })}
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddContact;
