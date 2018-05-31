import React from 'react'
import Message from './Message'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {toggleStarred, toggleRead, checkSelected} from '../redux/actions/messages'

const MessageList = (props) => {
  let listOfMessages = props.messages.map(message => <Message message={message} key={message.id} toggleRead={() => props.toggleRead(message)} checkSelected={() => props.checkSelected(message)} toggleStarred={() => props.toggleStarred(message)}/>)

  return (<div>
    {listOfMessages}
  </div>)
}

const mapStateToProps = state => ({messages: state.messages})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleStarred: toggleStarred,
  toggleRead: toggleRead,
  checkSelected: checkSelected
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MessageList)
