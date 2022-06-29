import logo from './logo.svg';

export const Header = (props) => {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.text}</h1>
      </header>
    );
}