import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

class ImageList extends React.Component {
	state = { };
	static defaultProps = { searchImages: [] };

	render()
	{
		const imgs = this.props.searchImages.map(img => <ImageCard key={img.id} image={img} />);
		return (
			<div className="image-list ui segment">{imgs}</div>
		);
	}
}

export default ImageList;
