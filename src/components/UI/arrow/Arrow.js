import React from "react";
// LINK TO CUSTOM CSS FILE FOR THIS COMPONENT
import "./Arrow.css";

// CHANGE OBJECT TO NAME OF COMPONENT TO EXPORT
const Arrow = () => {
    return (
      <div id="arrowDiv" className="arrowDiv">
            {/* ASCII Art goes inside String.raw`` */}
            {/* NOTE: CANNOT CONTAIN ` CHARACTERS */}
            <pre className="arrow">
                {String.raw`
                                                                ....                                
                                                              .-NMMN-.                              
                                                              mMdhhhNN--                            
                                                              mM+::/yhNm/-                          
           :++++++++++++++++++++++++++++++++++++++++++++++++++NM+://:/yhNh+-                        
           yMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN/:////:/shNh+-                      
           yMyssssssssssssssssssssssssssssssssssssssssssssssssss:://++//:+shNds.                    
           yM+::::::::::::::/+/:::::::::::::::::::::/+++++++++++++++++////:+odNhy.                  
           yM+://////+++++++oo+++++++++++++++++++////ooooooooooo+///////////:++dmhy                 
           yM+://////oooooooooooooooooooooo+//////////////////////////////////:/+mmdd               
           yM+:///////////////////oo//////////////////////////////////////::::::://mmmd             
           yM+::::::://///////////////////////////////////////////::::::::::::::::::/mmms           
           yM+::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/MNms           
           yM+::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://MNhh             
           yM+:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/+NMhy               
           yM+:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/+mNhy                 
           yM+:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::/odNys.                  
           yMyssssssssssssssssssssssssssssssssssssssssssssssssss:::::::::+sdNho.                    
           yNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMM+::::::/ydNho:                      
           ://////////////////////////////////////////////////NM+::::/yhNh/-                        
                                                              mM+:::hdNd/-                          
                                                              dmddddmm::                            
                                                              .-mmmm-.                              
                                                                ....                                
                                                                                                     
                `}
            </pre>
        </div>
    )
}

// CHANGE OBJECT TO NAME OF COMPONENT TO EXPORT
export default Arrow;