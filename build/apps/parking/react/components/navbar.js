MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper teal lighten-2">
          <div className="container">
            <a href="index.html" className="brand-logo">SF Garage Space</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#"><i className="small material-icons">list</i>List</a></li>
              <li><a href="#"><i className="small material-icons">map</i>Map</a></li>
              <li><a href="#"><i className="small material-icons">perm_identity</i>Crew</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="#"><i className="small material-icons">list</i>List</a></li>
              <li><a href="#"><i className="small material-icons">map</i>Map</a></li>
              <li><a href="#"><i className="small material-icons">perm_identity</i>Crew</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
