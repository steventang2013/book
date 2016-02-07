MyComponents.NavBar = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-3">
          <div className="container">
            <a href="index.html" className="brand-logo">RESUME</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="subscribe.html"><i className="small material-icons">list</i>Subscribe</a></li>
              <li><a href="cities.html"><i className="small material-icons">map</i>Map</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="../subscribe.html"><i className="small material-icons">list</i>Subscribe</a></li>
              <li><a href="cities.html"><i className="small material-icons">map</i>Map</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});
