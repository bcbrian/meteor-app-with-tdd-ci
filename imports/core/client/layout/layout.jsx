import React from 'react';

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <header>
        <nav className="navbar navbar-light bg-faded">
          <a className="navbar-brand" href="/">bcbrian</a>
          <ul className="nav navbar-nav">
            <li className={"nav-item "+(this.props.isAtHome?"active":"")}>
              <a className="nav-link" href="/">home <span className="sr-only">(current)</span></a>
            </li>
            <li className={"nav-item "+(this.props.isAtSomePage?"active":"")}>
              <a className="nav-link" href="/some-page">some-page</a>
            </li>
          </ul>
          <form className="form-inline pull-xs-right">
            <input className="form-control" type="text" placeholder="Search"/>
            <button className="btn btn-success-outline" type="submit">Search</button>
          </form>
          </nav>
        </header>
        <main>
          {this.props.content}
        </main>
      </div>
    );
  }
}
