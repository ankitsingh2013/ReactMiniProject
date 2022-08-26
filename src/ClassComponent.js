import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: []
    };
    this.nameRef = React.createRef();
    this.phoneRef = React.createRef();
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onRemoveHandler = this.onRemoveHandler.bind(this);
  }
  onSubmitHandler() {
    const data = {
      id: Math.random().toString(36).substring(7),
      name: this.nameRef.current.value,
      phone: this.phoneRef.current.value
    };
    //const id = Math.random().toString(36).substring(7);
    this.setState((prevState) => ({
      empData: [...prevState.empData, data]
    }));
    this.nameRef.current.value = "";
    this.phoneRef.current.value = "";
  }

  onRemoveHandler(id) {
    console.log(id);
    this.setState((prevState) => ({
      empData: prevState.empData.filter((item) => item.id !== id)
    }));
  }
  render() {
    //console.log(this.state.empData);
    const { empData } = this.state;
    //const data = Object.values(this.state.empData);
    return (
      <p>
        <h1>Using Class Component</h1>
        <hr />
        Name :
        <input type="text" ref={this.nameRef} />
        Phone :
        <input type="text" ref={this.phoneRef} />
        <button onClick={this.onSubmitHandler}>Submit</button>
        <div>
          <table border="1">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
            {empData.map((item, index) => (
              <tr>
                <td>{`${index + 1}`}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => this.onRemoveHandler(item.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <pre>{JSON.stringify(empData)}</pre> */}
          </table>
        </div>
      </p>
    );
  }
}
