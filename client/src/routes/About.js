import React from 'react';
import { compose } from "recompose";
import { Icon } from "../shared/components/Icon";

export const AboutComponent = () => {
	return (
		<div className="about">
			<div className="about__jumbotron"/>

			<div className="about__content">
				<div className="about__header-grid grid-center">
					<div className="col-12">
						<div className="about__header flex-container column center-all">
							<h1 className="about__header-title">Frank G. Cooke III</h1>
							<div className="about__header-subTitle-wrapper flex-container column">
								<span className="about__header-subTitle">
									Front End Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Charleston, SC
								</span>
								<span>Helping build the web one pixel at a time</span>
							</div>
						</div>
					</div>
				</div>

				<div className="grid">
					<div className="col_md-last">
						<p className="about__paragraph">
							I'm a front end engineer and full stack web developer with a passion for building cool
							things. I love building useful, usable, well-constructed websites and applications; working with great
							people; and constantly learning new things.
						</p>

						<p className="about__paragraph">
							I am a former tennis teaching professional and have also worked as a jazz musician in the Charleston area.
							When I'm not fully immersed in my work or side projects, you can find me picking and playing my collection
							of instruments, wrenching/riding my 1969 Honda cb350, or out in the water trying to catch a wave or two.
							As a true lover of the outdoors and travel, I try to find time to explore my local surroundings and the
							world as much as time permits.
						</p>

						<p className="about__paragraph">
							I want to be involved in projects that I can be proud of, work with amazing people, and advance my
							development career. I see teamwork, open communication, and compassion as key values for building
							successful products. I realise that adaptability, curiosity, and humility are the most
							important qualities for succeeding in the tech industry.
						</p>
					</div>

					<div className="col-3-middle_md-12">
						<div className="about__button-links flex-container column">
							<div className="about__button-wrapper">
								<a className="about__button">
									<Icon className="ti-file" size={46}/>
									<h3 className="about__button-title">Resume</h3>
									<p className="about__button-subTitle">View resume</p>
								</a>
							</div>

							<div className="about__button-wrapper">
								<a className="about__button">
									<Icon className="ti-github" size={46}/>
									<h3 className="about__button-title">Github</h3>
									<p className="about__button-subTitle">View repository</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const About = compose()(AboutComponent);