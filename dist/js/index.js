import Modal from "./modal.js";

class Index {
    
    constructor(indexParam = {details: document.querySelector("#details"),
                              overlay: document.querySelector("#modal-overlay"), 
                              modal: document.querySelector("#modal"),
                              modalCloseBtn: document.querySelector("#modal-close-btn")}) {
        this._details = indexParam.details;
        this._overlay = indexParam.overlay;
        this._modal = indexParam.modal;
        this._modalCloseBtn = indexParam.modalCloseBtn;
    }
    
    detailsToggle() {
        this._details.addEventListener("click", e => {
            e.preventDefault();
            let modal = new Modal(this._overlay, this._modal);
            modal.overlayActive = "modal-overlay-active";
            modal.modalActive = "modal-active";

            if (this._modal.classList.contains("modal-active")) {
                this._modalCloseBtn.addEventListener("click", e => {
                    e.preventDefault();
                    let modal = new Modal(this._overlay, this._modal);
                    modal.overlayHidden = "modal-overlay-active";
                    modal.modalHidden = "modal-active";
                })
            }

        });
    }

}

let index = new Index();
index.detailsToggle();