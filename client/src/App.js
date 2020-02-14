import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      user: '',
      id: '',
      edad: '',
      email: '',
      datos: []
    };

    this.onChange = this.onChange.bind(this);
    this.addPerson = this.addPerson.bind(this);
  }

addPerson(e) {
  fetch('http://127.0.0.1:8000/user/saveData', {
    method: 'POST',
    body: JSON.stringify(this.state),
    headers: {
      'Accept': 'application/json',
      'Content': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    alert('Guardado');
  })
  .catch(err => console.error(err));
  e.preventDefault();
}


getData() {
  fetch('http://127.0.0.1:8000/user/getAll', {
      method: 'GET',
      headers: {
          'Accept' :'application/json',
          'Content-Type': 'application/json'
      }
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          this.setState({
              datos: data
          })
      })
}


onChange(e){
  const { name, value} = e.target;
  this.setState({ 
    [name] : value
  });
}

  render() { 
    return(
      <div>
        <nav className="light-red darken-4">
          <div className="container">
            <a className="brand-logo" href="/">CRUD with MERN   </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col s5">
              <div className="card">
                <div className="card-conten">
                  <form onSubmit = {this.addPerson}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name ="user" type="text" placeholder="Nombre" onChange = {this.onChange}  value = {this.state.user}></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="id" type="text" placeholder="Identificacion"  onChange = {this.onChange}  value = {this.state.id}></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="edad" type="text" placeholder="Edad" onChange = {this.onChange}  value = {this.state.edad}></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name = "email" type="email" placeholder="Email"  onChange = {this.onChange}  value = {this.state.email}></input>
                      </div>
                    </div>
                    <button type="submit" className="btn  btn-light darken-4">
                      Guardar
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col s7">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Identificacion</th>
                        <th>Edad</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.datos.map(datos => {
                            return (
                                <tr key={datos._key}>
                                    <td>{datos.user}</td>
                                    <td>{datos.id}</td>
                                    <td>{datos.edad}</td>
                                    <td>{datos.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
