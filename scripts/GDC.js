import { Peer } from 'peerjs';

class GDC {
    constructor() {
        this._peer = new Peer();
        this._mode = null;
    }
    get_id(f) {
        this._peer.on('open', (id) => f(id));
    }
    connect_to(id) {
        if (this._mode != null) throw "NONO";
        this._mode = "CLIENT";
        navigator.mediaDevices.getUserMedia({ audio: true, video: false }, (stream) => {
            const call = this._peer.call(id, stream);
            call.on('stream', this.on_stream_client);
        }, (err) => console.log(err));
    }
    host() {
        if (this._mode != null) throw "NONO";
        this._mode = "SERVER";
        this._peer.on('call', (call) => {
            navigator.mediaDevices.getUserMedia({ audio: true, video: false }, (stream) => {
                call.answer(stream);
                call.on('stream', this.on_stream_server);
            }, (err) => {
                console.log(err);
            })
        })
    }
    on_stream_server(remoteStream) {
        const audio = new Audio(remoteStream);
        audio.play();
    }
    on_stream_client(remoteStream) {
        const audio = new Audio(remoteStream);
        audio.play();

    }
    send() {

    }
    broadcast() {

    }
}

export default new GDC();