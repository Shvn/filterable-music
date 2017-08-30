import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FilterableMusic extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MusicTable musicList={this.props.musicList} />
      </div>
    );
  }
}

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search music"
        />
        <FilterOptions />
      </form>
    );
  }
}

var TYPES = [
  'Ghazal', 'Pop', 'Religious', 'Rock', 'Patriotic', 'Instrumental'
];
var MUSICIANS = [
  'Rahat Fateh Ali Khan', 'Lata Mangeshkar', 'A R Rehman', 'Kishore Kumar', 'Sunidhi Chauhan', 'Bappi Lahiri'
];

class FilterOptions extends Component {
  render() {
    return (
      <div>
        <p>
          <label>
            Music Type
            <MusicTypeFilter types={TYPES} />
          </label>
        </p>
        <p>
          <label>
            Musician
            <MusicianFilter musicians={MUSICIANS} />
          </label>
        </p>
      </div>
    );
  }
}

class MusicTypeFilter extends Component {
  render() {
    var rows = [];
    this.props.types.forEach(
      (type) => {
        rows.push(<MusicTypeInput type={type} />);
      }
    );
    return (
      <p>{rows}</p>
    );
  }
}

class MusicTypeInput extends Component {
  render() {
    return (
      <span>
        <input
          type="checkbox"
          name="musicType"
        />
        {' ' + this.props.type}
      </span>
    );
  }
}

class MusicianFilter extends Component {
  render() {
    var rows = [];
    this.props.musicians.forEach(
      (musician) => {
        rows.push(<MusicianInput musician={musician} />);
      }
    );
    return (
      <p>{rows}</p>
    );
  }
}

class MusicianInput extends Component {
  render() {
    return (
      <span>
        <input
          type="checkbox"
          name="musician"
        />
        {' ' + this.props.musician}
      </span>
    );
  }
}

class MusicTable extends Component {
  render() {
    var rows = [];
    this.props.musicList.forEach(
      (music) => {
        rows.push(<MusicRow music={music} />);
      }
    );
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Duration</th>
          <th>Musician</th>
          <th>Mucic Type</th>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

class MusicRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.music.name}</td>
        <td>{this.props.music.duration}</td>
        <td>{this.props.music.musician}</td>
        <td>{this.props.music.type}</td>
      </tr>
    );
  }
}

export default FilterableMusic;
