import React from 'react';


const Like = (props) => {
const className = (props.liked) ? "fa fa-heart" : "fa fa-heart-o";
  return <i className={className} style={{cursor : "pointer" }} aria-hidden="true" onClick = {props.onLike}></i>;
};

export default Like;