export default class Modal {

    constructor(overlay, modal, closeBtn) {
        this._overlay = overlay;
        this._modal = modal;
        this._closeBtn = closeBtn;
    }

    set overlayActive(active) {
        this._overlay.classList.add(active);
    }

    set modalActive(active) {
        this._modal.classList.add(active);
    }

    set overlayHidden(hidden) {
        this._overlay.classList.remove(hidden);
    }

    set modalHidden(hidden) {
        this._modal.classList.remove(hidden);
    }

}