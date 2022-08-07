import { useEffect, useState } from 'react';

import GDC from '../scripts/GDC'

export default function DClone(){
    const [idd, setIdd] = useState(null);
    const [source, setSource] = userState(null);
    useEffect(() => {
        GDC.getId(setIdd);
    }, []);
    function host(){
        GDC.host(setSource);
    }
    function join(){
        GDC.join(setSource);
    }
    return (
        <div>
            <div onClick={host}>HOST</div>
            <hr></hr>
            <div onClick={join}>join</div>
            <hr></hr>
            <div>{idd}</div>
            <hr></hr>
            <video id="VIDEOSPLUS" autoPlay={true} loop playsInline>
                <source src={source}></source>
            </video>
        </div>
    )
}



// import { useEffect, useState } from 'react';
// import GDC from '../scripts/GDC';

// export default function Sadd() {

//     function hostCall() {
//         GDC.host();
//     }
//     function joinCall() {
//         let id = prompt("INSERT ID");
//         GDC.connect_to(id);
//     }
//     const [desp, setDesp] = useState(0);
//     function ret(id) {
//         setDesp(id)
//     }
//     GDC.get_id(ret);
//     return (<div>
//         <div style={{ marginLeft: "auto", marginRight: "auto" }}>
//             <div className='hover_item' style={{ margin: "10px", border: "10px dotted white", textAlign: "center" }} onClick={hostCall}>HOST CONFERENCE</div>
//             <div style={{ margin: "30px" }}></div>
//             <div className='hover_item' style={{ margin: "10px", border: "10px dotted white", textAlign: "center" }} onClick={joinCall}>JOIN CONFERENCE</div>
//         </div>
//         <audio controls src='duki.mp3' id="TRISTE"></audio>
//         {desp}
//     </div>)
// }