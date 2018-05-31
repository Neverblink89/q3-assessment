import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {checkAll, markAsRead, markAsUnread, addLabel, removeLabel, removeMessage} from '../redux/actions/messages'

class Toolbar extends React.Component {

  state = {
    labels:[],
    remove:[]
  }



handleChange = (e) => {
  this.setState({labels:e.target.value })

}
handleSubmit = e  => {
  e.preventDefault()
this.props.addLabel(this.state.labels)
this.props.removeLabel(this.state.remove)
}

  render(){
    console.log('toolbar',this.state)
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <form onSubmit={this.handleSubmit}>
          <button className="btn btn-default" onClick={() => this.props.checkAll()}>
            <i className="fa fa-square-o"></i>
          </button>

          <button className="btn btn-default" onClick={() => this.props.markAsRead()}>
            Mark As Read
          </button>

          <button className="btn btn-default" onClick={() => this.props.markAsUnread()}>
            Mark As Unread
          </button>

          <select className="form-control label-select" value={this.state.remove}  onChange={this.handleChange}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" value={this.state.labels}  onChange={this.handleChange}>
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default" onClick={this.removeMessage}>
            <i className="fa fa-trash-o"></i>
          </button>
        <button className='btn btn-default' type='submit'>Apply</button>
          </form>
        </div>
      </div>
    )
  }
    }

const mapDispatchToProps = dispatch => bindActionCreators({
  checkAll: checkAll,
  markAsRead: markAsRead,
  markAsUnread: markAsUnread,
  addLabel: addLabel,
  removeLabel: removeLabel,
  removeMessage: removeMessage
}, dispatch)

export default connect(null, mapDispatchToProps)(Toolbar);
