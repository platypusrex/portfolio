import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const Page = PageInner => {
	return (props) =>
		<div className="page">
			<ReactCSSTransitionGroup
				transitionName="page__animation"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnter={false}
				transitionLeave={false}
			>
				<PageInner key={props.match.path} {...props} />
			</ReactCSSTransitionGroup>
		</div>
};
