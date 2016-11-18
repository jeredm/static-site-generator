import React from 'react'

const style = {
  display: 'inline-block',
  background: 'white',
  boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
  lineHeight: '50px',
  padding: '1em',
}

const imgStyle = {
  maxWidth: '50px',
  verticalAlign: 'middle',
  border: '1px solid #ddd'
}

function UserAvatar({ avatar, firstName, lastName }) {
  var title = `Picture of ${firstName}`
  return (
    <div style={style}>
      <img
        style={imgStyle}
        src={avatar}
        alt={title}
        title={title}
      />
      <strong>{firstName} {lastName}</strong>
    </div>
  )
}

export default UserAvatar
