

const ItemsCard = (props) => {
  return (
    <div>
        <div className="images">
            <img src={props.image} alt={props.title} />
        </div>
        <h4>{props.title}</h4>
    </div>
  )
}

export default ItemsCard