MyComponents.Task = React.createClass({

  render: function() {
    return (
      <div className="card cyan">
        <div className="card-content">
		  <strong>{this.props.task.Title}</strong><br/>
		  Complete: {this.props.task.Complete}<br/>
		  {this.props.task.Deadline}
        </div>
      </div>
    );
  }

});

MyComponents.TaskList = React.createClass({
  render: function() {

    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        {taskElements}
        </div>
      </div>
    );
  }
});
