MyComponents.Hour = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col s6 l3">
          {this.props.hour.BEG && this.props.hour.BEG + ' to '}
          {this.props.hour.END && this.props.hour.END}
        </div>
        <div className="col s6 l3">
          {this.props.hour.FROM && this.props.hour.FROM}
          {this.props.hour.TO && ' to '}
          {this.props.hour.TO && this.props.hour.TO}
        </div>
      </div>
    );
  }
});


MyComponents.GarageHours = React.createClass({
  render: function() {

    var hours = this.props.hours.map(function(h,i){
      return <MyComponents.Hour hour={h} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          <h5><b>Hours: </b></h5>
          { hours }

        </div>
      </div>
    );
  }
});
