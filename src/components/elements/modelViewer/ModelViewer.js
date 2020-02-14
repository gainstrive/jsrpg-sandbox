import React from 'react';
import Skeleton from "../../ascii/skeleton/Skeleton";
import Hellbat from "../../ascii/hellbat/Hellbat";
import Pumpking from "../../ascii/pumpking/Pumpking";
import "./ModelViewer.css"

const ModelViewer = (props) => {
function renderModel() {
    switch (props.currentModel) {
        case 0:
            return (
                <div>
                    <Hellbat/>
                </div>
            )
        case 1:
            return (
                <div>
                    <Pumpking/>
                </div>
            )
        case 2:
            return (
                <div>
                    <Skeleton/>
                </div>
            )
        default:
            break;
    }
}

return(
    <div>
        {renderModel()}
    </div>
)

}

export default ModelViewer;