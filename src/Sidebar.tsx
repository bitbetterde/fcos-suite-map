import React, { CSSProperties } from "react";

interface Props {
  style?: CSSProperties,
  className?: string,
}

export const Sidebar: React.FC<Props> = (props) => {

  return (
    <div style={props.style} className={props.className}>

    </div>
  )
}