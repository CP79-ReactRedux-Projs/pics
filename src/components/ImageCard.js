import React from 'react';

class ImageCard extends React.Component {
	state = { spans: 0 };
	static defaultProps = { image: {} };

	constructor(props)
	{
		super(props);

		this.imageRef = React.createRef();
	}

	componentDidMount()
	{
		this.imageRef.current.addEventListener('load', () => this.setSpan());
	}

	setSpan()
	{
		this.setState({ spans: Math.ceil(this.imageRef.current.clientHeight / 10 + 1) });
	}
	render()
	{
		const {alt_description, urls} = this.props.image;
		return (
			<div className="image-card" style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} src={urls.regular} alt={alt_description} />
			</div>
		);
	}
}

export default ImageCard;
