MyComponents.Team = React.createClass({
  render: function() {

    // inspect this.props.team to make sure we load the data correctly
    console.log('members', this.props.members)

    // For each 'member' in 'team', create a <li> component to display
    // information about this member.

    var members = this.props.members.map(function(member, i){
	  
	  for (var key in member){
	    var name = key;
	    var major = member[key].major;
	    var place = member[key].place;
		var img = member[key].img;
		var ref = member[key].ref;
      return <div className="col-md-4">
		  <p className="text-center" style={{"margin-top":"40px"}}><strong>{name}</strong></p><br/>
		  <a data-toggle="collapse" data-target=".demo">
			<img src={img} className="img-circle person" alt="Random Name" style={{"height" : "255px", "width" : "330px"}}/>
		  </a>
			<p>{major}</p>
			<p>{place}</p>
			<a href={ref} alt="Resume">Check me out!</a>
		  </div>

	  }
    })

    return (
        <div className="contains" id="band">
          <div className="row text-center">
			  <div className="col-md-12">
			     <h1>THE CREW</h1>
			  </div>
			  {members}
		  </div>
        </div>
    );
  }
});

/*
<div id="band" className="containers text-center">
	  <h3>THE CREW</h3>
	  <br/>
	  <div className="row">
		<div className="col-sm-4">
		  <p className="text-center"><strong>Tyler Tafoya</strong></p><br/>
		  <a href="#demo" data-toggle="collapse">
			<img src="../img/bear.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
		  </a>
		  <div id="demo" className="collapse">
			<p>Computer Science BS</p>
			<p>Raytheon</p>
			<a href="https://resume-tafoya.firebaseapp.com/apps/resume" alt="Tyler's Resume">Check me out!</a>
		  </div>
		</div>
		<div className="col-sm-4">
		  <p className="text-center"><strong>Kieran Czerwinski</strong></p><br/>
		  <a href="#demo2" data-toggle="collapse">
			<img src="../img/fox.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
		  </a>
		  <div id="demo2" className="collapse">
			<p>Computer Science</p>
			<p>Philosophy</p>
			<a href="https://kieran-book.firebaseapp.com/apps/resume" alt="Kieran's Resume">Check me out!</a>
		  </div>
		</div>
		<div className="col-sm-4">
		  <p className="text-center"><strong>Steven Tang</strong></p><br/>
		  <a href="#demo3" data-toggle="collapse">
			<img src="../img/Wolf.jpg" className="img-circle person" alt="Random Name" width="255" height="255"/>
		  </a>
		  <div id="demo3" className="collapse">
			<p>Computer Science BS</p>
			<p>Raytheon</p>
			<a href="https://stangresumeapp.firebaseapp.com/apps/resume" alt="Steven's Resume">Check me out!</a>
		  </div>
		</div>
	  </div>
	</div>*/
