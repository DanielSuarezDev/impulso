import {FC} from 'react'

export const Layout:FC<any> = ({children}) => {
  return (
    <div>
        <h1>Layout</h1>
        {children}
    </div>
  )
}
