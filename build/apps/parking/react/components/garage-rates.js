MyComponents.Rate = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col s6 l3">
          {this.props.rate.BEG && this.props.rate.BEG + ' to '} 
          {this.props.rate.END && this.props.rate.END}
          {this.props.rate.DESC && this.props.rate.DESC}
        </div>
        <div className="col s3 l2">
          ${this.props.rate.RATE && this.props.rate.RATE + ' '}
          {this.props.rate.RQ && this.props.rate.RQ + ' '}
        </div>
        <div className="col s3 l7">
          {this.props.rate.RR && this.props.rate.RR}
        </div>
      </div>
    );
  }
});


MyComponents.GarageRates = React.createClass({
  render: function() {

    var rates = this.props.rates.map(function(r,i){
      return <MyComponents.Rate rate={r} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
          <h5><b>Rates: </b></h5>
          { rates }
        </div>
      </div>
    );
  }
});
