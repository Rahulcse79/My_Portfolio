import React from 'react';
import './App.css';



class App extends React.Component {
   
  render() {
    return (
     <>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Start your development with JohnDoe landing page." />
        <meta name="author" content="Devcrud" />
        <title>Rahul singh Portfolio</title>
        <link rel="stylesheet" href="johndoe/public_html/assets/vendors/themify-icons/css/themify-icons.css" />
        <link rel="stylesheet" href="johndoe/public_html/assets/css/johndoe.css" />
        <a href="components.html" className="btn btn-primary btn-component" data-spy="affix" data-offset-top={600}><i className="ti-shift-left-alt" /> Components</a>
        <header className="header">
          <div className="container">
            <ul className="social-icons pt-3">
              <li className="social-item"><a className="social-link text-light" href="https://twitter.com/RahulSinghcse79"><i className="ti-twitter" aria-hidden="true" /></a></li>
              <li className="social-item"><a className="social-link text-light" href="https://instagram.com/mr_rahul_s21?igshid=MmU2YjMzNjRlOQ=="><i className="ti-instagram" aria-hidden="true" /></a></li>
              <li className="social-item"><a className="social-link text-light" href="https://github.com/Rahulcse79"><i className="ti-github" aria-hidden="true" /></a></li>
            </ul> 
            <div className="header-content">
              <h4 className="header-subtitle">Hello, I am</h4>
              <h1 className="header-title">Rahul singh</h1>
              <h6 className="header-mono">Developer</h6>
              <a href="johndoe/public_html/assets/imgs/rahul.singh.Resume.pdf" className="btn btn-primary btn-rounded" target="_blank"><i className="ti-printer pr-2" />Resume</a>
            </div>
          </div>
        </header>
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top={510}>
          <div className="container">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                  <a href="#resume" className="nav-link">Resume</a>
                </li>
              </ul>
              <ul className="navbar-nav brand">
                <img src="johndoe/public_html/assets/imgs/avatar.jpg" alt="" className="brand-img" />
                <li className="brand-txt">
                  <h5 className="brand-title">Rahul singh</h5>
                  <div className="brand-subtitle">Developer</div>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="#portfolio" className="nav-link">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a href="#blog" className="nav-link">Blog</a>
                </li>
                <li className="nav-item last-item">
                  <a href="#contact" className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div id="about" className="row about-section">
            <div className="col-lg-4 about-card">
              <h3 className="font-weight-light">Who am I ?</h3>
              <span className="line mb-5" />
              <h5 className="mb-3">Hello, I am Rahul Singh, a computer science engineering graduate passionate about problem-solving.</h5>
              <p className="mt-20"> Skills:- C++, Data Structure &amp; Algorithms, JavaScript, Node-js, React-js, Express-js, Bootstrap, MYSQL.</p>
              <a href="https://www.linkedin.com/in/rahul-singh-a32261206/" className="btn btn-outline-danger"><i className="icon-down-circled2" />Linkedin Profile</a>
            </div>
            <div className="col-lg-4 about-card">
              <h3 className="font-weight-light">Personal Information</h3>
              <span className="line mb-5" />
              <ul className="mt40 info list-unstyled">
                <li><span>Name</span> : Rahul singh</li>
                <li><span>Birthdate</span> : 02/09/2000</li>
                <li><span>Phone</span> : +919752079591</li>
                <li><span>Email</span> : rahul.singh.cse79@gmail.com</li>
                <li><span>Gender</span> : Male</li>
                <li><span>City</span> : Satna</li>
                <li><span>State</span> : Madhya Pradesh</li>
                <li><span>Country</span> : India</li>
                <li><span>Pin Code</span> : 485115</li>
                <li><span>Address</span> :  Badhura 277, Rampur Baghelan, Satna</li>
              </ul>
              <ul className="social-icons pt-3">
                <li className="social-item"><a className="social-link" href="https://twitter.com/RahulSinghcse79"><i className="ti-twitter" aria-hidden="true" /></a></li>
                <li className="social-item"><a className="social-link" href="https://instagram.com/mr_rahul_s21?igshid=MmU2YjMzNjRlOQ=="><i className="ti-instagram" aria-hidden="true" /></a></li>
                <li className="social-item"><a className="social-link" href="https://github.com/Rahulcse79"><i className="ti-github" aria-hidden="true" /></a></li>
              </ul>  
            </div>
            <div className="col-lg-4 about-card">
              <h3 className="font-weight-light">Work </h3>
              <span className="line mb-5" />
              <div className="row">
                <div className="col-1 text-danger pt-1"><i className="ti-widget icon-lg" /></div>
                <div className="col-10 ml-auto mr-3">
                  <h6>CORE JAVA TRAINING</h6>
                  <p className="subtitle"> Internshala: developed "Tic Tac Toe" application using JavaFX and gained proficiency in Java programming language. </p>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-1 text-danger pt-1"><i className="ti-paint-bucket icon-lg" /></div>
                <div className="col-10 ml-auto mr-3">
                  <h6>College Influencer Internship</h6>
                  <p className="subtitle">The name of the organization is Newton School and Tech-Gig. Our aim is to create a network of talented students within our college
                    and to catalyze the growth of soft skills such as communication, networking, and leadership qualities.</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Resume Section*/}
        <section className="section" id="resume">
          <div className="container">
            <h2 className="mb-5"><span className="text-danger">MY</span> RESUME</h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="mt-2">
                      <h4>TECHNICAL PROJECTS</h4>
                      <span className="line" />  
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>PANDA-NEWS</h3>
                    <p className="subtitle">PANDA-NEWS powered News App offering categorized global articles. Users enjoy easy browsing, precise search, and detailed 
                      insights. With a responsive design, I adapt seamlessly across devices. Leveraging React, Redux, Styled-Components, ReactBootstrap, and Axios, I deliver a dynamic and user-friendly experience. Stay informed effortlessly with my intuitive features and 
                      cutting-edge technologies.</p>
                    <hr />
                    <h3>TextConverter</h3>
                    <p className="subtitle">A React-based utility for word/character counting, case conversion, and space manipulation. Streamlines text tasks, enhances 
                      readability and provides quick insights. User-friendly interface.</p>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="mt-2">
                      <h4>EDUCATION</h4>
                      <span className="line" />  
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="title text-danger">2019 - 2023</h6>
                    <p>B.Tech, Computer Science</p>
                    <p className="subtitle">NRI Institute of Information Science and Technology, Bhopal</p>
                    <p>CGPA: 8.02</p>
                    <hr />
                    <h6 className="title text-danger">2018 - 2019</h6>
                    <p>Higher Secondary Certificate (12th Class)</p>
                    <p className="subtitle">Time Public Hr. Sec. School, Shahdol (M.P.) </p>
                    <p>Subject: (physics, chemistry, and Mathematics).</p>
                    <hr />
                    <h6 className="title text-danger">2016 - 2017</h6>
                    <p> Secondary School Certificate (10th Class)</p>
                    <p>Gyanodaya public Hr. Sec. school, Shahdol (M.P.)</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="pull-left">
                      <h4 className="mt-2">MY SKILLS</h4>
                      <span className="line" />  
                    </div>
                  </div>
                  <div className="card-body pb-2">
                    <h6>C++</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '97%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h6>Data Structure &amp; Algorithms</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '97%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h6>JavaScript</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h6>React-js</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h6>Node-js</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '80%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h6>Express-js</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h6>MySQL</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div className="pull-left">
                      <h4 className="mt-2">Languages</h4>
                      <span className="line" />  
                    </div>
                  </div>
                  <div className="card-body pb-2">
                    <h6>English</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                    <h6>Hindi</h6>
                    <div className="progress mb-3">
                      <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-dark text-center">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 col-lg-3">
                <div className="row ">
                  <div className="col-5 text-right text-light border-right py-3">
                    <div className="m-auto"><i className="ti-alarm-clock icon-xl" /></div>
                  </div>
                  <div className="col-7 text-left py-3">
                    <h1 className="text-danger font-weight-bold font40">1.5</h1>
                    <p className="text-light mb-1">Years work</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="row">
                  <div className="col-5 text-right text-light border-right py-3">
                    <div className="m-auto"><i className="ti-layers-alt icon-xl" /></div>
                  </div>
                  <div className="col-7 text-left py-3">
                    <h1 className="text-danger font-weight-bold font40">3</h1>
                    <p className="text-light mb-1">Project Finished</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="row">
                  <div className="col-5 text-right text-light border-right py-3">
                    <div className="m-auto"><i className="ti-face-smile icon-xl" /></div>
                  </div>
                  <div className="col-7 text-left py-3">
                    <h1 className="text-danger font-weight-bold font10" />
                    <p className="text-light mb-1">Development</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="row">
                  <div className="col-5 text-right text-light border-right py-3">
                    <div className="m-auto"><i className="ti-heart-broken icon-xl" /></div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/*<section className="section bg-dark py-5">
          <div className="container text-center">
            <h2 className="text-light mb-5 font-weight-normal">I Am Available For FreeLance</h2>
            <button className="btn bg-primary w-lg">Hire me</button>
          </div>
        </section>*/}
        
       
        <div className="section contact" id="contact">
          <div id="map" className="map" />
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="contact-form-card">
                  <h4 className="contact-title">Send a message</h4>
                  <form action>
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Name *" required />
                    </div>
                    <div className="form-group">
                      <input className="form-control" type="email" placeholder="Email *" required />
                    </div>
                    <div className="form-group">
  <textarea className="form-control" id="message" placeholder="Message *" rows={7} required defaultValue={""} />
</div>

                    <div className="form-group ">
                      <button type="submit" className="form-control btn btn-primary">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-info-card">
                  <h4 className="contact-title">Get in touch</h4>
                  <div className="row mb-2">
                    <div className="col-1 pt-1 mr-1">
                      <i className="ti-mobile icon-md" />
                    </div>
                    <div className="col-10 ">
                      <h6 className="d-inline">Phone : <br /> <span className="text-muted">+919752079591</span></h6>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-1 pt-1 mr-1">
                      <i className="ti-map-alt icon-md" />
                    </div>
                    <div className="col-10">
                      <h6 className="d-inline">Address :<br /> <span className="text-muted">Badhura 277, Rampur Baghelan, Satna</span></h6>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-1 pt-1 mr-1">
                      <i className="ti-envelope icon-md" />
                    </div>
                    <div className="col-10">
                      <h6 className="d-inline">Email :<br /> <span className="text-muted">rahul.singh.cse79@gmail.com</span></h6>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer py-3">
  
</footer>

        {/* core  */}
        {/* bootstrap 3 affix */}
        {/* Isotope  */}
        {/* Google mpas */}
        {/* JohnDoe js */}
      </div>
     </>
    );
  }
}

export default App;
