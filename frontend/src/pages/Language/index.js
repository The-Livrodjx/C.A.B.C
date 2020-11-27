import React from 'react';
import './styles.css';

export default class Language extends React.Component {
    
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('http://alefesouza.dev/api/languages.php')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
            });
    }

    render() {
        return (
            <div className="language-page">
                <div className="language-content">
                    <h1>Lista de linguagens</h1>

                    <ul className="language-list">
                        {this.state.linguagens.map(item => (
                            <li key={item.id} className="language-info">
                                <img src={item.image} className="language-image"/>
                                <p><b>Nome:</b> {item.name}</p>
                                <p><b>Criador:</b> {item.creator}</p>
                                <p><b>Ano de criação:</b> {item.year}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

