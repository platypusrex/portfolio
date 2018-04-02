import React from 'react';
import { Container } from "../shared/components/Container";
import { PageHeader } from "../shared/components/PageHeader";
import {Paragraph} from "../shared/components/Paragraph";

export const Resume = (props) => {
	return (
		<div className="resume">
			<PageHeader
				title="Frank G. Cooke III"
				subTitle={(
					<React.Fragment>
						frankcooke79@gmail.com&nbsp;&nbsp;|&nbsp;&nbsp;(843) 303-6284
						<br/>Charleston, SC
					</React.Fragment>
				)}
			/>

			<Container>
				<div className="grid">
					<div className="col-12 grid">
						<div className="col-3_md-12">
							<h2 style={{marginTop: 0, textTransform: 'uppercase', marginBottom: '5px'}}>Summary</h2>
						</div>
						<div className="col-9_md-12" style={{borderBottom: '1px solid #e9e9e9', marginBottom: '30px'}}>
							<Paragraph>
								I am a talented front end engineer with a special interest in full stack web development. I have experience
								building mobile and web applications, from api integrations to sophisticated css animations. I am
								trustworthy, ethical, and committed to overcoming new challenges and learning new things. I love to
								build useful, usable, well-constructed web sites and applications and work alongside great people
								who challenge me to grow as a developer and engineer.
							</Paragraph>
						</div>

						<div className="col-3_md-12">
							<h2 style={{marginTop: 0, textTransform: 'uppercase'}}>
								Work<br/>Experience
							</h2>
						</div>
						<div className="col-9_md-12" style={{borderBottom: '1px solid #e9e9e9'}}>
							<div>
								<div className="flex-container" style={{alignItems: 'baseline', marginBottom: '15px'}}>
									<h4 style={{textTransform: 'uppercase', margin: 0, fontSize: '18px'}}>
										Fathom Realty
										<small style={{textTransform: 'uppercase', fontWeight: 'lighter', fontSize: '12px', paddingLeft: '15px'}}>
											Full Stack Engineer&nbsp;&nbsp;|&nbsp;&nbsp;May 2017 - Present
										</small>
									</h4>
								</div>

								<Paragraph>
									Lorem ipsum dolor amet neutra intelligentsia butcher pabst flexitarian, ennui keytar. Chia sartorial
									helvetica, banh mi readymade poke tumeric venmo XOXO leggings. Tilde small batch squid kogi,
									humblebrag bushwick vegan copper mug selvage meggings letterpress tattooed. Yuccie vegan aesthetic
									glossier.
								</Paragraph>
							</div>

							<div>
								<div className="flex-container" style={{alignItems: 'baseline', marginBottom: '15px'}}>
									<h4 style={{textTransform: 'uppercase', margin: 0, fontSize: '18px'}}>
										Interapptive Solutions
										<small style={{textTransform: 'uppercase', fontWeight: 'lighter', fontSize: '12px', paddingLeft: '15px'}}>
											Full Stack Engineer&nbsp;&nbsp;|&nbsp;&nbsp;July 2015 - May 2017
										</small>
									</h4>
								</div>

								<Paragraph>
									Lorem ipsum dolor amet neutra intelligentsia butcher pabst flexitarian, ennui keytar. Chia sartorial
									helvetica, banh mi readymade poke tumeric venmo XOXO leggings. Tilde small batch squid kogi,
									humblebrag bushwick vegan copper mug selvage meggings letterpress tattooed. Yuccie vegan aesthetic
									glossier.
								</Paragraph>
							</div>

							<div>
								<div className="flex-container" style={{alignItems: 'baseline', marginBottom: '15px'}}>
									<h4 style={{textTransform: 'uppercase', margin: 0, fontSize: '18px'}}>
										Massagebook
										<small style={{textTransform: 'uppercase', fontWeight: 'lighter', fontSize: '12px', paddingLeft: '15px'}}>
											Front End Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Nov 2015 - July 2017
										</small>
									</h4>
								</div>

								<Paragraph>
									Lorem ipsum dolor amet neutra intelligentsia butcher pabst flexitarian, ennui keytar. Chia sartorial
									helvetica, banh mi readymade poke tumeric venmo XOXO leggings. Tilde small batch squid kogi,
									humblebrag bushwick vegan copper mug selvage meggings letterpress tattooed. Yuccie vegan aesthetic
									glossier.
								</Paragraph>
							</div>

							<div>
								<div className="flex-container" style={{alignItems: 'baseline', marginBottom: '15px'}}>
									<h4 style={{textTransform: 'uppercase', margin: 0, fontSize: '18px'}}>
										Boomtown
										<small style={{textTransform: 'uppercase', fontWeight: 'lighter', fontSize: '12px', paddingLeft: '15px'}}>
											Systems/Network Administrator&nbsp;&nbsp;|&nbsp;&nbsp;June 2015 - Nov 2015
										</small>
									</h4>
								</div>

								<Paragraph>
									Lorem ipsum dolor amet neutra intelligentsia butcher pabst flexitarian, ennui keytar. Chia sartorial
									helvetica, banh mi readymade poke tumeric venmo XOXO leggings. Tilde small batch squid kogi,
									humblebrag bushwick vegan copper mug selvage meggings letterpress tattooed. Yuccie vegan aesthetic
									glossier.
								</Paragraph>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};