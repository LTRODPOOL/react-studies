import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';

class About extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            userName: ''
        }
        this.changeUserName = this.changeUserName.bind(this)
        this.handleChangeName = this.handleChangeName.bind(this)
    }

    changeUserName(event){
        this.setState({ userName: event.target.value});
    }

    handleChangeName(){
        this.props.updateUserName(this.state.userName)
    }

    render() {
        return (
            <div className="APP">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {console.log(this.props)}
                    <p>Esta é a páguna que você escreve 'SOBRE' sua página</p>
                    <p>EU sou {this.props.user.employerInfo.carrer}</p>
                    <p>Este é  {this.props.user.personalInfo.name}</p>

                    <div>
                        <h1>Mudar nome do campo acima</h1>
                        <div>
                            <p><input type="text" placeholder="Digite o novo nome" onChange={this.changeUserName} value={this.state.userName}></input></p>
                            <p><button type="button" onClick={this.handleChangeName} >.::Mudar Nome::.</button></p>
                        </div>
                    </div>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        React JS!
                    </a>
                </header>
            </div>
        );
    }
}
export default About;