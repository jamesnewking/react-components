import React from 'react'
import './card.css';

interface CardProps {
    title?: string;
    children?: any;
    imageSource?: string;
    center?: string
}


const CardImage = ({imageSource, ...props}: CardProps): JSX.Element => {

  let size;
  if (window){
    size = window.innerWidth;
  }
  return(<div className="card-image">
  <img className="image" src={imageSource} />
 </div>
)
}
 
  

const CardTitle = ({title, center }: CardProps): JSX.Element => {
  return(<CardTitle title="testing title" />)
}
  

const ListGroup = ({title, children }: CardProps): JSX.Element => (
  <ul className="list-group">{children}</ul>
  )

  const ListItem = ({title }: CardProps): JSX.Element => (
    <li className="list-item">{title}</li>
    )

    const CardBody = ({children }: CardProps): JSX.Element => (
      <div className="card-body">{children}</div>
      )

      const CardHeader = ({title, center }: CardProps): JSX.Element => {
      return(<div className="card-header" >Test header</div>)
      }

      const CardFooter = ({title, center }: CardProps): JSX.Element => {
        return(<div className="card-footer" >Test Footer</div>)
        }

        const CardImageOverlay = ({children }: CardProps): JSX.Element => (
          <div className="image-overlay">{children}</div>
          )



export { CardImage, CardTitle, ListGroup, ListItem, CardBody, CardHeader, CardFooter, CardImageOverlay }