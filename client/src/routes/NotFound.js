import React from 'react';
import { compose } from "recompose";
import { withRouter } from 'react-router-dom';

export const NotFoundComponent = () => {
	return (
		<div className="ia-page-error">
			<div className="ia-page-error__content-wrapper flex-container center-all">
				<div className="ia-page-error__animation-wrapper flex-container center-row-horizontal">

					<div className="ia-not-authorized-error">
						<div className="ia-not-authorized-error__door">
							<div className="ia-not-authorized-error__rectangle"/>
							<div className="ia-not-authorized-error__handle"/>
							<div className="ia-not-authorized-error__window">
								<div className="ia-not-authorized-error__eye"/>
								<div className="ia-not-authorized-error__eye eye2"/>
								<div className="ia-not-authorized-error__leaf"/>
							</div>
						</div>
					</div>

				</div>

				<div className="ia-page-error__message-wrapper flex-container column">
					<h1 className="ia-page-error__error-type">404</h1>
					<h1 className="ia-page-error__title">Page Not Found</h1>
					<h6 className="ia-page-error__description">
						Sorry, we couldn't find the page you were looking for.
					</h6>
					{/*<Button*/}
						{/*className="ia-page-error__button"*/}
						{/*type="primary"*/}
						{/*size="large"*/}
						{/*onClick={() => props.history.push('/')}*/}
					{/*>*/}
						{/*Return To Home Page*/}
					{/*</Button>*/}
				</div>
			</div>
		</div>
	);
};

export const NotFound = compose(
	withRouter
)(NotFoundComponent);