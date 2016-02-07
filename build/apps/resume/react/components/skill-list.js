MyComponents.Skill = React.createClass({
  render: function() {
    return (
      <div className="card cyan">
        <div className="card-content">
		<strong>{Object.keys(this.props.skill)}</strong><br/>
			{this.props.skill[Object.keys(this.props.skill)]}
        </div>
      </div>
    );
  }
});

MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card">
        <div className="card-content">
        {skillElements}
        </div>
      </div>
    );
  }
});
