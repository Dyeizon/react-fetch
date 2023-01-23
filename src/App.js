import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    cards: []
  };
0
  componentDidMount() {
    this.loadPhotos();
  }

  loadPhotos = async () => {
    console.log('Fazendo a requisição');
    const cardsRequest = fetch('https://jsonplaceholder.typicode.com/photos');

    const [cards] = await Promise.all([cardsRequest]);
    const cardsJSON = await cards.json();

    this.setState({cards: cardsJSON});

    console.log(cards);
  }

  render () {
    const {cards} = this.state;
    console.log(cards);

    return (
      <div className='cards'>
        {cards.slice(0, 100).map((card) =>
        <div className='card' key={card.id}>
          <img className="card-image" alt="" src={card.thumbnailUrl}/>
        </div>
        )}
      </div>
      
    )
  }
}

export default App;
