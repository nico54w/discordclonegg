import { useEffect, useState } from 'react';
import GDC from '../scripts/GDC';

export default function sadd() {

    function hostCall() {
        GDC.host();
    }
    function joinCall() {
        let id = prompt("INSERT ID");
        GDC.connect_to(id);
    }
    const [desp, setDesp] = useState(0);
    function ret(id) {
        setDesp(id)
    }
    GDC.get_id(ret);
    return (<div>
        <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className='hover_item' style={{ margin: "10px", border: "10px dotted white", textAlign: "center" }} onClick={hostCall}>HOST CONFERENCE</div>
            <div style={{ margin: "30px" }}></div>
            <div className='hover_item' style={{ margin: "10px", border: "10px dotted white", textAlign: "center" }} onClick={joinCall}>JOIN CONFERENCE</div>
        </div>
        <audio controls src='duki.mp3' id="TRISTE"></audio>
        {desp}
    </div>)
}