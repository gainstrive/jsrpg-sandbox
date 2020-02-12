import React from "react";
import "./RightWall.css";

const RightWall = () => {
    return (
      <div id="rightWallDiv" className="rightWallDiv">
            <pre className="rightWall">
                {String.raw`
                    
                                                                                                                    :ymmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmh+'                                                            
                                                                    '...... .::::::::::::::::::::::::::+NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs                                                            
                                    'odmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmNNNNNmdmNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh                                                            
                                    .sdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMh                                                            
                                    mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmddmNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMNhhhhhhhhhhhhhhhhhhhhhhhhhhhhhho-                            
                                    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMs/+dNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN-                           
                                    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNN:-+mNNNNNNNNNNMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNM/                           
                                    MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMms:::::---:hd/::::::::::/sNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMM+'                          
                                    MMMMMMMMMMMMNNNNNNNNNNNNNNNNNN/'..---..--so--...-----..-dMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMNmmmmmmMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNmNNNNdhys-                       
                                    MMMMMMMMMMMmsssssyyyyyyyhyyyydo::++++++ooyhssssoossso++smMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMNo:.....-/dNNNmmmmdmmmmNNNNmmmmmmmmdddddddddddddm-                      
                                    MMMMMMMMMMMh-----:////::////+sdyyyyyhhdddmNmmmmmmNNNNNNNMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMo/////////+mNNNmmmmNNNNNNNNNNmmNNNmddmddddmdddddd+                      
                                    NMMMMMMMMMMh'    '...........:NmmNNmmNNNNNMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMhhhhhhhhhhhmNNNNNNNNNNNNNNNNNNmmNNNmdmmdddddddddm+                      
                                    :dmNNNNNNNNm+-''..--://///////mMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNMNNNNNNNNNNNNNNNMNNNNNNNNNNNMNNNNNNNNNNNNNNNNNmmdmNNNddddddddddddNo                      
                                    '''''''''''..oNNMdyssyyyyyyyyhddddddddmMNNNNNNNNNNNNNNNNNNNNmdddmNNNNNNNNNmmmNMNNNNNNNNNNNNNNhNMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNmmms                      
                                                +MMNoooshyyhhhhyyhhyyyyhhdNNNNNNNNNNNNNNNNNNNNNddddmmmNmNNNNNmmmmmyyyyyyyyyyyys/oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNms                      
                                    '+hddddddddddddNMMNsydNMMMMMMMMMMMNmyydmmMNNNNNNNNNNNNNNNNNNNNmdddmNNNNNNNNNmmNNNhhhhhhhhhhhyyhhmNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMd                      
                                    dMMMMMMMMMMMMMMMMMNyhMMMMMMMMMMMMMMMdhdNNMMMMMMMMMMMMMMMMMMMMMMNNNNMMMMMMMMMMMMMMMMNNNNy:.......................:yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                      
                        .oyyyyyyyNNNNNNNNNNNNNNNNNNNmmNNNNNNNMMMNmmmNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNm::-------.'      '''''.---:dNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMM                      
                        :mdddddddddddddddddddddmmmmmmmmmmmmmmmmMhyyymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmNMNNNNNNNNssssssssoo+///////+oso+oosymNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMN                      
                        sdddddddddddddddddddmmmmmmmmmmmmmmmmmmmNhhyyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMhoohMNNNNNNNMmmmmmmmmdddmmmmmmmmNNNNNmmNMNNNNNNNNNNNNNNMMMMMMMMMNNNNNNd-                      
                        sddddddddddddddddddmmmdmmmmmmdhhhhhhhhhhyyyyyyydMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM+.-dNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNMNNNNNNNM'    ':+                      
                        /mddddddddddddddddmmmmmmmmmmyyyyyyyyyyyyysssssosdNdhhhhNMMMMMNMMMMMMMMMMMMMho++///:::ods///////////yNNmdhhhhhhhdddddddddmmNMNNNNNNNNNNNNNNNMddddddhm..'''''o                      
                        /syyyyhmmmmmmmmmNNNNNNNNNNmssyhyhyysysssshhhhhmo.'''''sNNNNmmmmmmmmmmmmmNy'''''''  '.s.'''..'  '...odsssssssssssssoooosyyhdMNNNNNNNNNNNNNNMsooooo+hsoo++++y                      
                                +MNNNNNNNNNNNNNNNNNMmyyhyhhyyssssosshdddN+/:::.'hhhhyyyyyyyyyyyssyys-://:::--::h///////::++++sdssyyyyssssssssooosssyhMNNNNNNNNNNNNNNM:::---.omNNNNNNN                      
                                /MNNNNNNNNNNNNNNNNNNNmmNNNNmmmmmmmmmmmNNMdddddysN++++////////////::hoosyssyssssmyyyhyhhhhddddddsyyyyyssssssssssssssyyMNNNNNNNNNNNNNNM...:::/mMMMMMMm+                      
                                +MNNNNNNNNNNNNNNNNNNMNNNNNmmdddddddddmNNNMNNNNNNM...'..........'''.mddmmddmmNmmNNNNNNMMMMMMMMMmyyyysyssssssssssssssymNNNNNNNNNNNNNNNMmmmNNNNMMMMMMMm:                      
                                +MNNNNNNNNNNNNNNNNNNMNNNNNmmmddddddmNNNNNMMMMMMMMy:::-''..-::----::hNMMMMMMMMMMMNNNNNMMMMMMMNNNNmmmmmmmmmmmmmmmmmmmNNNNNNNNNNNNNNNNNMNMMMMMMMMMMMMMMN                      
                                +MNNNNNNNNNNNNNNNNNNMNNNNmmmmdddddmNmmNNNMMMMMMMMMMNNNmmdooooosssssshmNNmmmmmmMNmmdddNNNmdddddddddddddddddddddddddddmNNNNNNNNNNNNNNMNNMMMMMMMMMMMMMMM                      
                                +MNNNNNNNNNNNNNNNNNNMNNNmmmmmmdddmNNNNNNMMMMMMMMMMMMMMMMhsooooosssssssyddyyyhhmNmmmmNNNNNdhhdhhhhhddddddddhddddddddddNNMMMMMNNNNNNNmdNMMMMMMMMMMMMMMM                      
                                +MNNNNNNNNNNNNNNNNNNNMMNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMhsooooossyysyysyhyyyyydNmmmmmNNNNdhhhhhhhhhhhdddhdddhhhhhhhdddddmmmmdmmmNNNNNMMMMMMMMMMMMMMNs                      
                                +MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMdhhdyssssssssyyyyyyyyydNdddmmmmmmhhhhhhhhhhhhhdddmysysyyyyyssssyhhhhhhhdNNNNNNNNNNMMMMs+oo/-                       
                                /MNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMNNmhyyyyyyyyyyhhhhhhdNMNdmmmmmmddddddddddddddddmNyyyyyyyyyysshhyyhhhhhhNNNNNNNNNNNMMM:                            
                                :MMMMMMMMMMMMMNNMNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMNdhyyyyyyyyyyyyyyyhhhhyyyyyssooooooooooooooodMNyyyyyyyyyyyyhyyhhhhhhhNNNNNNNNNNNMMm'                            
                            .-:::oMNMMMMMMMMNNNNNNNNMNddddddddddddmmmmdhhhhmMMMMMMMMMMMMMMMMs.''''''''''''''''''''''''-s-.'.......------dMNhdddmmdmddmmmmmmmmmmmmNNNNNNNNNNNNNdo:.....'                     
                        'sdmmmmmmmmmmmmmmmmmddmmmmmmhhhhhhyhhhhyydmmmdyssdMMMMMMMMMMMMMMMM/::///::://////////////////yyssssssss/--....-/dNmmmmmmmddmNNNmmmmmmmmmmmNNmmddddddddmNmmddh:                    
                        /mddddddddddddddddddddddddmNhhhhhhhhhhyyyyhddyysyhMMMMMMMNNNNNNNNNyyyyyyyyyyyyyyyyyhhhhhhhhhhmMMMMMMMMy---------:hNmmmmmmdddmNNNNNNmmmmmmmmmmmmmmdmmmddNdddddm                    
                        +mddddddddddddddddddmdmddddmmmmmmmmmmmmmmmmmmmmmmmNmNNNNmmmmmmmmmNNNNNNNmNNNNNNNNNNNNNNNNNNNNMMMMMMMMMs++++oosssshNmmmmmmmmNNNNNNNNmdmmmmmmmmNNNmmmmmmdNdddddN                    
                        /mdddddddddddddddddddddddddddmmmmdmmmmmNMMNNMMmmmmmmNNNNmmmNNmddmmNMMMMMMMMNNNMMMMMMMMMMMMMMMMMMNNNNNMdddddddmmmmNNmmmmmmmmmNNNNNNNddmmmmmmNNNNNNNNNNmmMdddddN                    
                        .mmddddddddddddmddddmmmdmmmmdddmmmmmmmNNNNNNNMmmmNNNNNNNNNNNNNNNmmmdddddddhhhdddddddMMMMMMMMMMNo/::::/dNNNNMMMMMMMNNNNNNNNNNNNNNNNNNmNNNNNNNNNNNNNNNNNNMddddds                    
                        .oNMMMMMMMNmhssssssssssssssssssssssymMMMMMMMMMMNNNNNMMMMNMMMMMMMMMNNNNNmmmmmmh+////////////////:-----:+dNNMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNN+++/.                     
                        :NNNNNNNNMMo '.----------.....-.'''''.hMMMMMMMMMMMMMMMMMMMMMMMMMNNmmmmmmmmmmmh.................-...-....:mNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.'                        
                        sMNNNNNNNNM:+mMMMMMMMMMMMNhsmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmmmmmmmmmmh++++++//////+ooooooo++++ooomNNNNNmNMNmmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMh-                      
                        sMNNNNNNNNMdMNNNMNNNNNNNmmmNmNMMMMMMMMNNNNNNNNMMMMMMMMMMMMMMMMMMMMNNmmmmmmmmmmhhhhhhhhhhhddddddddddddddddNNNNNNNNNsssNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN                      
                        +MNNNNNNNNMMdyyyyyyhhyyhhsydooyyyyyyyyyyyyhhddddddMMMMMMMMMMMMMMMMNNmmmmmmmmmNNNNNNNMMMMMMMMMMMMMMMMMNNNMNmmmmmNNN+--hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM                      
                        oNmmmmmdddmo--::://::/+o+sh::.......-::::///+++/+MMMMMMMMMMMMMMMMNNNmmmmmmmmmNNmdddmmmmmmmmmmmmmmmMNMdysssssssssymh+/syyyyyhdMMMMMMMMMMMNNNNMMMMMMMMMMMMMMMMM                      
                        //          o-  '''  '''.-yd/'''        ''''''''-yMMMMMMMMMMMMMMMMMNNNNNmmmmmNhsssssossssssssssssssyN+...''''''''..m:'''''''''.dmmmmNNNmmmmNNNMMMMo...../mMMNo                      
                        y''''''''''':dNmNmmmmNNNNMMMMNNNNNNmmNNdhmNNNNNNNMNy:......--------.........:yysssssssssssossyssssssdo////////+++++d//:::::---.hyyyyyyyyyyyhhddddd+''''''-MMy.                      
                        moooooooooosNMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMNd------.'     '..-::--------dsssssssssssssssssssssmdhhhhhhhhhhddmNyyyyssoo+++h++++++///+///////+y//////+MMMd                      
                        mNNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmmmmmdddmooosyyysss++oososssoooooooomssssssssssssssssssssymNNNNNNNNNNNNNMMNNmmddhhhhhy-----------..''''.NmmmmmmmmddN                      
                        :dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdoooooooo+MNNNNNNNNNNNNNNmmmmmddddddddNmdddddddddddddddddddNNNMMMMMMMMMMMMMMMMMMNNNmmmNs'''''''''       'oMMMMMMMd/::h                      
                        '.--------:MMMMMMMMMMMMMMMMMMMMMMMMMMMMm/......-oMMMMMMMMMMMMMMMMMMMMMMMMMMMMmddddddddddddddddddddddddddddmmmmddNNMMNmmmmmmNmhsssssssssssyyhmmmmMMMMMMMN+  .o                      
                                o:sdmmmmmdddNMMMMMMMMMMMMMMNMMd+:---:yNMMMMMMMMMMMMMMMMMNNNNNNNNNNNddhhhhddhdhhhddhddddddddddddmddhhyhhdmdhssssoooooooooooooooohMMMMMMMMMMMMMMN+--'                      
                                .yoyhhddddhydMMMMMMMMMMMMMMMMMd:......-+MMMMMMMMMMMMMMMMMMNmmmdddddmdddddddddddhdddhddddddddddhhhhhhhyhhydhyysoooooooooooooooooosMMMMMMMMMMMMMMM+                         
                                .mmNNNNNNNNNNNNNNNNNNNmmmmNNNNh++++++oooMMMMMMMMMMMMMMMMNhyyyyyssyssyysysssssyhmhhhhddddhhhhddhhyyyyyyyyydyooooooooooooooosoooooyMMMMMMMMMMMMMMM+                         
                            ''''.hMMMMMMMMMMNyhhyyysssssssyyyyNddddddddmMMMMMMMMMMMMMMMMmyyysssssssssssssssssssmdddddddddddddddhhhhhhhhhdNdsooooooooooooosdysoosmMMMMMMMMMMMMMMm.                         
                            -ydmmmmNMMMMMMMMMMNo:::::-------:::oMMMMMMMMMMMMMMMMMMMMMMMMMMmyyysssssssssssssssssssNMdyyssssyyyyyssssssyyyysmmmdhhhhddhhddddddmmNmmNMMMMMMMMMmyyys/.                          
                        'NMMMMMMMMMMMMMMMMMMNy++++/+++++++oymNNNNNNNNMMMMMMMMMMMMMMMNNNmhhhhhhhhhhhhhhhhhhhhyyNMy:::::-----------o-......................--/dMMMMMMMMMMMy                                
                        .MMMMMMMMMMMMMMMMMMMMMMMMdhhhhhhhhhhhddddddddmNMNNNNNNmmmmmmmdddddddddddddddddddddhhdNds/....-/:////////s+------------..'''''.-:////sMMMMMMMMMMM+                                
                        .MMMMMMMMMMMMMMMMMMMMMMMmyhhhyyhhhhhhhdddmmNNmNMMNNNNmmmmmmmmmmmmmmdddddddddddddddhhdy-........:mMMMMMMMMysssssssoooo+++++ooossyhhhydMNNNNNNMNNy.''''''                          
                            dMMMMMMMMMMMMMMMMMMMMMMdsyyyssyyyyhhddNMMMMMMMMMMMMMmmmmmmmmmmmmmmdddddddddddddddddm+//////////yMMMMMMMMNmmmmmmmmmmmmmmmmmmmNmmNNNNNNmmmmmmNNNdhhhhhhhy/                        
                            '+yddddmMMMMMMMMMMMMMMMmssssssyyyydddNMMMMMMMMMMMMMMMmmmmmmmmmmmmmdddddddddddddddddNyyyyyyyyyyydMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmddmmmmmmmddddddddm:                       
                            /hmNNNNNMMMMMMMMMMMMMMMNhyyyyyyhhdddmMMMMMMMMMMMMMMMMNNNNNNNNmNmmmmmmmmmmmmmmmmmmmmNNNNNNNNNNNNdo++++odMMMMMMMMMMMmmmmmmmmmmmmmmmNNmmmmmmmmmmmmdmddddddm+                       
                        -MMMMMMMMMMMMMMMMMMMMMMMdsyyyyyysyyyyyNMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMh:......-yMMMMMMMMMMddddddmmdddddddddddddddddddmmddddddddm+                       
                        /MMMMMMMMMMMMMMMMMMMMMMMmssssssssssoosNMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMsoooooooohMMMMMMMMMMmmmdmNmsossyyyyyyyyyyyyyyyyymmdddddddd.                       
                        :MMMMMMMMMMMMMMMMMMMMNNNNdyyyyyyyyyyhdNMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNMMMMMMMMMMMmmmmmmmmmNMMMMMMMMMMMMMMMMhsossssyyyyyyyyssyyyyyhdoossso/.                        
                        '.mMMMMMMMMMMMMMMMMMMo-............'-hMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNmNNmmmddmmmmmmdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMyooooossssyyyyyyyyyyyyhy''''                            
                        -sddmmmmmmmmmmmmmmmmmmd------------....:mhNNNNNNNMMMMMMMMMMMMMMMMMNmhsosyysysyyyyysssssdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMdooooooosssssyyyyyysyymNNNNmh/                          
                        mdddddddddddddddddddhhmoooosoooooooooooyhosssssydmMMMMMMMMMMMMMMMMNdyooossssssyyyyyyssydMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmdhhhhhhhhhhhddmmmmmNMMMMMMMM-                         
                        NdddddddddddddddddhhhhNmmmmmdddddddddddmo......../MMMMMMMMMMMMMMMMMNdhyysssyyyyyhhhhhhhdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNyoooossyysssydMMMMMMMMMMMMMMM/                         
                        NdddddddddddddddddddddmMMMMMMMMMMMMMMMMNm/'''''':dMMMMMMMMMMMMMMMMMMMMMMNmmmmNmmddddmmmdmNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNmyoooossssyyyymMMMMMMMMMMMMMMM/                         
                        hmdhhhhhhhhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMNy:----:omMMMMMMMMMMMMMMMMMMMMMMMMMMMNddddddddddddddmmmmNNNNNmmNNNNNNNNNNNNMNNNNNNNNmhsoooosssssyyhmMMMMMMMMMMMMMm'                         
                        'oNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMy-....'  -MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmmmmmNNmmmNNNNNNNNNNNNNMMMNMMMMMMMMMMMMMMMMMMNs++++++oo+/::/osssNMMMMMMm-                          
                        yNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMhossssso+/NmdddmmmmmmmmmmmmmmmmmmmmmddNhyyyyyyyyhhhdddddddmNMMMMMMMMMMMMMMMMMMMMMMMMMMMs  '''............+MMMMMMMN.                         
                        NmdddddddddmMMMMMMMMMMMMMMMMMMMMMMMMMMMMNmmmNNNNNmh+/++oosysssssssossssoooooooNyyyyyyyhhddddddddddddNNNNNNNNNNNNNNNNmmmmmddddhhy.-::::/::::/:::::omdmmmmmm/                         
                        h++ooooooooomMMMMMMMMMMMMMMMMMMMMMMMMMMNmMMMMMMMMMd-..-----------------.....-+dyyyyyyyhdmdddddddddddNddddysssssssssh////////:::hosssssyysssssssssyy++////s/                         
                        s''..-------+so+++++++++ohmmho+++++++++//++++++oyNMmysssssssssssssssssssssssdNyyyyyyyyysyhddddddddddNoo+/:::::-....s'''''''''''dmmmmmmmmmmmddddddm+''''''o.                         
                        -:/::://:-.:o....'''   '..oh-............--.....-+MMMMMMMMMMMMMMMMNNNNNNNNNNNNmhhyyyhhyysyhddddmdddmMh/:--------.-/d/.''''..-:yMMMMMMMMMMMMNNNNMMMy++++os-                          
                        .hmmmmddddodo://///:---/++sh++++++++++++ooooooooooMMMMMMMMMMMMMMMMNNNNNNNNNNNNMMNNNNMMNNNNNMMMMMMMMMMMMNmmmmmmmmmNy:.ommmmmNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMd'                         
                        sNNNNNmmmdNmhyhhhhhyhhhhdddNddddddddddhddmmmmmmmmmMMMMMMMMMMMMMMMMNNNNmmNNNNNNmmmmmmmmmmmNNNNNNmmmmmmNNmmmmdmNNNNM:-.dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM/                         
                        sNNNNNNNNmNyNNNNMMMNMMMNNNNNNNNNNNNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMNNmmmmNNNNNNmyyyyyyyyyyyyyysyysssssssyssmdddmNNNMyysNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM/                         
                        sMNNNNNNNNNo+yhdddddddddhy+/shddddddddNMMMMMMMMMMMMMMMMMMMMMMMMMNmmmmmmdmNmdds::://////////:::::::::::::/mdddddmNMmmmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM:                         
                        -hNNNNNNNNyo-.............----------::/sNMMMMMMMMMMMMNNMMMMMMMNmmmmmmmddNNNNNh-..................'''...-smdddmmNNNmmNMNNNNmmmmmmmmmmmmmmNMNNMNNNNNNNNNNNNo                          
                        '/+/////::--:-.......-o/ymmmmmmNNNNNNd::+/:::::::://osss/:::::::/++++++++++ohsmdddddddddddds/o/::::::::/+++++++oos/:s/:::---............-/ss/-----------:+                          
                        +.                    'hMMMMMMMMMMMMMMN/''-----...'''os-----.............  '/NMMMMMMMMMMMMMNy.''''''''''''''''.' ':h:------------------..'s:'''''''''''''+:                         
                        o::::::::::::::::::::::dMMMMMMMMMMMMMMM+//ooooooo+/::sy+oosso+++++++/////:::+MMMMMMMMMMMMMMMh/:::::/:::::///:::--:/mossssooooooooooooooo++ho+++++++++++++y/                         
                        sddddddddddddddddddddddNMMMMMMMMMMMMMMMmddddmmdmdddddmmdddmmdhdddddhdhhhhdddmMMMMMMMMMMMMMMMNhhysyyyyssyssyhhhhhhhhNmmmmmdddddddddddmmmmmmNmmmmmmmmmmmmmmN:                         
                        /mMMMMMMMMMMMMMMMMMMMMNhmMMMMMMMMMMMMNdmMMMMMMMMMMMMNddNMMMMMMMMMMMMMNNNMMMMmmMMMMMMMMMMMMMNmMMMNNNNNNNNmmNMMMMMMMNohNNNNNNNNNNNNNNNNNMMNNsyNMMMMMMMMMMMNy'                         
                        .+sssssssssssssssssso: ./+++++++++++:''/ossssssssso:'':osss++++oo++sssssso/'.oydddhyyyyhys:'+hddddddddddddddddddy:  -/::::::::::::::://:.  -///////////.                           
                                                                                                                                                                                                            
                                                                                                                                                                                                            
                                                                                                                                                                                                            
                                                                                                                                                                                                            
                                                                                                                                                                                                            
                                                                                                                                                                                                            
                                                                                                                                                                                                            

            
                `}
            </pre>
        </div>
    )
}

export default RightWall;