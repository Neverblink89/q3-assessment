import React from 'react'

const Message = (props) => {

  let readStatus = '';
  if (props.message.read === true) {
    readStatus = "read"
  } else {
    readStatus = ""
  }

  let starStatus = 'fa fa-star-o';
  if (props.message.starred === true) {
    starStatus = "fa fa-star"
  }
  let checkedStatus = ''
  if (props.message.selected === true) {
    checkedStatus = 'checked'
  }
  console.log('label in Message',props.message.labels)
  let listOfLabels = props.message.labels.map(item => <span className={`label label-warning`}>{item}</span>)

  return (<div className={`row message ${readStatus}`}>
    <div className="col-xs-1">
      <div className="row">
        <div className="col-xs-2">
          <input type="checkbox" checked={checkedStatus} onClick={props.checkSelected}/>
        </div>
        <div className="col-xs-2">
          <i className={`${starStatus}`} onClick={props.toggleStarred}></i>
        </div>
      </div>
    </div>

    <div className="col-xs-11">
      {listOfLabels}
      <a href="#" onClick={props.toggleRead}>
        {props.message.subject}
      </a>
    </div>
  </div>)

}

export default Message
