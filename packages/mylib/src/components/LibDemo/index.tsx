import React from 'react'

export type LibDemoProps = React.HTMLAttributes<HTMLDivElement>

const LibDemo: React.FC<LibDemoProps> = (props) => {
  const { className, children, ...rest } = props

  return (
    <div className={className} {...rest}>
      <p>LibDemo-Component from mylib package</p>
      <p>{children}</p>
    </div>
  )
}

export default LibDemo
