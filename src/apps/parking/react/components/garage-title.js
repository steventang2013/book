MyComponents.GarageTitle = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <h4>{this.props.title}</h4>          
        </div>
      </div>
    );
  }
});
