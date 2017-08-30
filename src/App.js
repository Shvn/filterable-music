import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FilterableMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      musicTypeFilter: '',
      musicianFilter: ''
    };

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleFilterMusicType = this.handleFilterMusicType.bind(this)
    this.handleFilterMusician = this.handleFilterMusician.bind(this)
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleFilterMusicType(musicTypeFilter) {
    this.setState({
      musicTypeFilter: musicTypeFilter
    });
  }

  handleFilterMusician(musicianFilter) {
    this.setState({
      musicianFilter: musicianFilter
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          musicTypeFilter={this.state.musicTypeFilter}
          musicianFilter={this.state.musicianFilter}
          onFilterTextInput={this.handleFilterTextInput}
          onFilterMusicType={this.handleFilterMusicType}
          onFilterMusician={this.handleFilterMusician}
        />
        <MusicTable
          musicList={this.props.musicList}
          filterText={this.state.filterText}
          musicTypeFilter={this.state.musicTypeFilter}
          musicianFilter={this.state.musicianFilter}
        />
      </div>
    );
  }
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search music"
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <FilterOptions
          musicTypeFilter={this.props.musicTypeFilter}
          musicianFilter={this.props.musicianFilter}
          onFilterMusicType={this.props.onFilterMusicType}
          onFilterMusician={this.props.onFilterMusician}
        />
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
    console.log('Music Type Filter : ' + this.props.musicTypeFilter);
    console.log('Musician Filter : ' + this.props.musicianFilter);
    return (
      <div>
        <p>
          <label>
            Music Type
            <MusicTypeFilter
              types={TYPES}
              musicTypeFilter={this.props.musicTypeFilter}
              onFilterMusicType={this.props.onFilterMusicType}
            />
          </label>
        </p>
        <p>
          <label>
            Musician
            <MusicianFilter
              musicians={MUSICIANS}
              musicianFilter={this.props.musicianFilter}
              onFilterMusician={this.props.onFilterMusician}
            />
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
        rows.push(<MusicTypeFilterInput type={type} musicTypeFilter={this.props.musicTypeFilter} onFilterMusicType={this.props.onFilterMusicType} />);
      }
    );
    return (
      <p>{rows}</p>
    );
  }
}

class MusicTypeFilterInput extends Component {
  constructor(props) {
    super(props);
    this.handleFilterMusicTypeChange = this.handleFilterMusicTypeChange.bind(this);
  }

  handleFilterMusicTypeChange(e) {
    if (e.target.value != this.props.musicTypeFilter) {
      this.props.onFilterMusicType(e.target.value);
    }
    else {
      this.props.onFilterMusicType('');
    }
  }

  render() {
    return (
      <span>
        <input
          type="checkbox"
          value={this.props.type}
          checked={this.props.musicTypeFilter == this.props.type ? true : false}
          onChange={this.handleFilterMusicTypeChange}
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
        rows.push(<MusicianInput musician={musician} musicianFilter={this.props.musicianFilter} onFilterMusician={this.props.onFilterMusician} />);
      }
    );
    return (
      <p>{rows}</p>
    );
  }
}

class MusicianInput extends Component {
  constructor(props) {
    super(props);
    this.handleFilterMusicianChange = this.handleFilterMusicianChange.bind(this);
  }

  handleFilterMusicianChange(e) {
    if (e.target.value != this.props.musicianFilter) {
      this.props.onFilterMusician(e.target.value);
    }
    else {
      this.props.onFilterMusician('');
    }
  }

  render() {
    return (
      <span>
        <input
          type="checkbox"
          value={this.props.musician}
          checked={this.props.musicianFilter == this.props.musician ? true : false}
          onChange={this.handleFilterMusicianChange}
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
        if (music.name.indexOf(this.props.filterText) !== -1 && (music.type === this.props.musicTypeFilter || this.props.musicTypeFilter === '') && (music.musician === this.props.musicianFilter || this.props.musicianFilter === '')) {
          rows.push(<MusicRow music={music} />);
        }
      }
    );
    return (
      <table>
        <thead>
          <th>Name</th>
          <th>Duration</th>
          <th>Musician</th>
          <th>Music Type</th>
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
