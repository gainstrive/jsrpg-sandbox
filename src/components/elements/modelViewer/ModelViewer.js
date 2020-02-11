import React from 'react';
import Skeleton from "../../enemies/skeleton/Skeleton";
import Hellbat from "../../enemies/hellbat/Hellbat";
import "./ModelViewer.css"

const ModelViewer = (props) => {
function renderModel() {
    switch (props.currentModel) {
        case 0:
            return (
                <div>
                    <Skeleton/>
                </div>
            )
        case 1:
            return (
                <div>
                    <Hellbat/>
                </div>
            )
        default:
            return (
                <div>
                </div>
            )
    }
}

return(
    <div>
        {renderModel()}
    </div>
)

}

export default ModelViewer;