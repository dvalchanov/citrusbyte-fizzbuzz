import fizzbuzz from './lib/fizzbuzz';
import styles from './App.style';

const {
  Component,
  StyleSheet,
} = React;

export default class App extends Component {

  /**
   * Initial state.
   */
  state = {
    number: null,
    word: '',
  };

  /**
   * Render the supplied structure.
   */
  render() {
    const {number, word} = this.state;

    return (
      <div style={styles.container}>
        <form>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter Number"
            onChange={this._execute}
            value={number}
          />
        </form>
        <h1 style={styles.word}>{word}</h1>
      </div>
    );
  }

  /**
   * Execute the fizzbuzz function on the inputted value.
   *
   * @param {Object} Event
   */
  _execute = (e) => {
    const number = e.target.value;

    this.setState({
      number,
      word: fizzbuzz(number),
    });
  };
}
