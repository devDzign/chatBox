import React from 'react';

class Formulaire extends React.Component {

	state ={
        length: this.props.length
	}

	createMessage = event => {
	   event.preventDefault();
		const message = {
			message : this.message.value,
			pseudo : this.props.pseudo
		};

		this.props.addMessage(message);

		//Reset form
		this.messageForm.reset();

		//Mettre la lengueur à jour 140
		this.setState({length: this.props.length});
	};

    compteur = event => {
        event.preventDefault();

        const length = this.props.length - this.message.value.length;
		this.setState({length});
    };

	render() {
		return (
			<form
				className="form"
				onSubmit={e => this.createMessage(e)}
				ref={input =>  this.messageForm = input}
				onChange={ e => this.compteur(e)}
			>

				<textarea
					required
					maxLength={this.props.length}
					ref={input => this.message = input}
				>
				</textarea>

				<div className="info" >
					{this.state.length}
				</div>

				<button type="submit" >
						Envoyer!
				</button>

			</form>
		)
	}
}

export default Formulaire;