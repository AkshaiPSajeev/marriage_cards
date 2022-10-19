import React from "react";
import { MdClose } from "react-icons/md";
import "./CardDetails.css";
import { closeModal } from "../../redux/ModalSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { unsetDetails } from "../../redux/DetailsSlice";
import altimage from "../../assets/images/altimage.jpg";
function CardDetails() {
  const ds = useSelector((store) => {
    return store.details;
  });
  const dispatch = useDispatch();
  const altImage = "https://www.w3schools.com/w3images/avatar6.png";
  return (
    <>
      <div className="modal-container">
        <div className="card-details-container">
          <div className="close">
            <MdClose
              onClick={() => {
                dispatch(closeModal());
                dispatch(unsetDetails());
              }}
              className="close-icon"
            />
          </div>
          <div className="image-container">
            <img
              src={ds.thumbnail.large}
              alt=""
              className="card-details-image"
            />
          </div>
          <div className="content">
            <h3 className="card-details-title">{ds.title}</h3>
            <p className="card-details-content">{ds.content}</p>
            <div className="details-footer">
              <div className="avatar-container">
                <img src={ds.client.avatar ? ds.client.avatar : altImage} />
              </div>
              <div className="card-details-footer-info">
                <span className="card-details-content">
                 Client - {ds.client.name} -{" "}
                </span>
                <span className="card-details-content">{ds.client.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardDetails;
