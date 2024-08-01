import CounterContainer from "../../components/counter/CounterContainer";
import "./itemDetail.css";
import PropTypes from "prop-types";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <>
      <div>
        <div className={"conteinerItemDetail"}>
          <div className={"containerImage"}>
            <img src={item.img} alt="" />
          </div>

          <div className={"containerDetail"}>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Nombre:</span> {item.title}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Descripcion:</span>
              {""}
              {item.description}
            </h2>
            <h2 style={{ fontFamily: "monospace" }}>
              <span style={{ fontSize: "23px" }}>Precio:</span>${item.price}.-
            </h2>
          </div>
        </div>
        <CounterContainer onAdd={onAdd} stock={item.stock} initial={initial} />
      </div>
    </>
  );
};
ItemDetail.propTypes = {
  item: PropTypes.object,
  onAdd: PropTypes.func,
  initial: PropTypes.number,
};
export default ItemDetail;
