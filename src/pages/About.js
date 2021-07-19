import React from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import AppTemplate from '../components/templates/apps';
import Header from '../components/header';
import Button from '../components/buttons';

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
            <AppTemplate>
                <Header>
                    <img src={logo} className="App-logo" alt="logo" />
                    {console.log(this.props)}
                    <p>EU sou {this.props.user.employerInfo.carrer}</p>
                    <p>Este é  {this.props.user.personalInfo.name}</p>
                    <div align='center'>
                        <h4>Mudar nome do campo acima</h4>
                        <div>
                            <p><input type="text" placeholder="Digite o novo nome" onChange={this.changeUserName} value={this.state.userName}></input></p>
                            <p>
                                <Button type="button" handleChangeName={this.handleChangeName} text="Mudar Nome" />
                                </p>
                        </div>
                    </div>
                </Header>
            </AppTemplate>
        );
    }
}
export default About;