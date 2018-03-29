import React from 'react';
import { compose } from "recompose";
import { Icon } from "../shared/components/Icon";

export const AboutComponent = () => {
	return (
		<div className="about">
			<div className="about__jumbotron"/>

			<div className="about__content" style={{padding: '0 50px 0 150px', height: '100vh'}}>
				<div className="grid-center">
					<div className="col-12">
						<div className="flex-container column center-all" style={{height: '200px'}}>
							<h1 style={{textTransform: 'uppercase', marginBottom: '6px'}}>Frank G. Cooke III</h1>
							<div className="flex-container column" style={{textTransform: 'uppercase', fontSize: '11px', textAlign: 'center', letterSpacing: '0.6px'}}>
								<span style={{padding: '0 4px'}}>Front End Engineer&nbsp;&nbsp;|&nbsp;&nbsp;Charleston, SC</span>
								<span>Helping build the web one pixel at a time</span>
							</div>
						</div>
					</div>
				</div>

				<div className="grid">
					<div className="col-9">
						<p style={{fontSize: '18px', marginTop: 0, lineHeight: '26px'}}>
							Hello world! I'm a front end engineer and full stack web developer with a passion for building cool
							things. I love building useful, usable, well-constructed websites and applications; working with great
							people; and constantly learning new things.
						</p>

						<p style={{fontSize: '18px', lineHeight: '26px'}}>
							I am a former tennis teaching professional and have also worked as a jazz musician in the Charleston area.
							When I'm not fully immersed in my work or side projects, you can find me picking and playing my collection
							of instruments, wrenching/riding my 1969 Honda cb350, or out in the water trying to catch a wave or two.
							As a true lover of the outdoors and travel, I try to find time to explore my local surroundings and the
							world as much as time permits.
						</p>

						<p style={{fontSize: '18px', lineHeight: '26px'}}>
							I want to be involved in projects that I can be proud of, work with amazing people, and advance my
							development career. I see teamwork, open communication, and compassion as key values for building
							successful products. I realise that adaptability, curiosity, and humility are the most
							important qualities for succeeding in the tech industry.
						</p>
					</div>

					<div className="col-3-middle">
						<a style={{textAlign: 'center', margin: '30px 0', display: 'block'}}>
							<Icon className="ti-file" size={46}/>
							<h3 style={{textTransform: 'uppercase', margin: '8px 0 4px'}}>Resume</h3>
							<p style={{textTransform: 'uppercase', margin: 0, fontSize: '10px'}}>View resume</p>
						</a>

						<a style={{textAlign: 'center', margin: '30px 0', display: 'block'}}>
							<Icon className="ti-github" size={46}/>
							<h3 style={{textTransform: 'uppercase', margin: '8px 0 4px'}}>Github</h3>
							<p style={{textTransform: 'uppercase', margin: 0, fontSize: '10px'}}>View repository</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export const About = compose()(AboutComponent);