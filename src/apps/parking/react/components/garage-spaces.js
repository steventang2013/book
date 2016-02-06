MyComponents.GarageSpaces = React.createClass({
  render: function() {
    return (
      <div className="card">
        <div className="card-content">
          <h6><b>Open Spaces: </b>{this.props.open}/{this.props.total}</h6>
        </div>
      </div>
    );
  }
});
