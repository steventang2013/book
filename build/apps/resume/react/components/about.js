MyComponents.About = React.createClass({

  render: function() {
    return (
	<div className="text-center">
		  <p className="text-center"><strong>Steven Tang</strong></p><br/>
		  <a href="#demo" data-toggle="collapse">
			<img src="../../parking/img/Wolf.jpg" className="img-circle person" alt="Random Name" style={{"width":"350px", "height":"260px"}}></img>
		  </a>
		  <div id="demo" className="collapse">
			<p>Computer Science BS</p>
			<p>Raytheon</p>
			<a href="https://stangresumeapp.firebaseapp.com/apps/resume" alt="Steven's Resume">Check me out!</a>
		  </div>
	</div>
    );
  }
});
