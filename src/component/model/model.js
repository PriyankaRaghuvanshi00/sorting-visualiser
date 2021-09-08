import "./model.css"

const Modal = (props) => {
   return (
      <div className="background">
         <div className="child">{props.children}</div>
      </div>
   );
}

export default Modal;