MyComponents.City = React.createClass({

  render: function() {
    return (
      <div className="card cyan">
        <div className="card-content">
		<strong>{this.props.city.name}</strong><br/>
		{this.props.city.temperature} degrees F <br/>
		{this.props.city.summary}	
        </div>
      </div>
    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        {cityElements}
        </div>
      </div>
    );
  }
});
