import React from 'react';
import Message from './Message';
import Formulaire from './Formulaire';

class App extends React.Component {

    state = {
        messages:{}
    }


    addMessage = (message) => {

        //Copie le state
        const messages = {...this.state.messages};

        //On ajoute le message avec une cle timstamp
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;

        //mettre a jour le state
        this.setState({messages});
    };


	render() {
		return (
			<div className="box">
				<div>
					<div className="messages" >
						<Message pseudo={this.props.params.pseudo} />
					</div>
					<Formulaire
                        addMessage={this.addMessage}
                        pseudo={this.props.params.pseudo}
                        length="140"
                    />
				</div>
			</div>
		)
	}
}

export default App;