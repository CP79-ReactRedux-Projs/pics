import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import UnSplash from '../api/UnSplash';

class App extends React.Component {
	state = { images: [] };
	static defaultProps = { };

	async onSearched(term)
	{
		const res = await UnSplash.get('/search/photos', { params: { query: term } });
		this.setState({ images: res.data.results });
	}

	render()
	{
		return (
			<div className="app ui container">
				<br />
				<SearchBar onSearchSubmit={(term) => this.onSearched(term)} />
				<ImageList searchImages={this.state.images} />
			</div>
		);
	}
}

export default App;
