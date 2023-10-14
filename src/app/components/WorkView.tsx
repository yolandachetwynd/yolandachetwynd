import { useEffect, useState } from "react";
import { Painting } from "../constants/paintings";
import { Page, hotSpots} from "../constants/graphicNovels";
import {TeachingImage} from "../constants/teaching";

type WorkViewProps = {
    collection: Painting[] | Page[] | TeachingImage[] ,
    category: 'paintings' | 'graphicNovels' | 'teaching', 
    selectedIndex: number,
    setSelectedIndex: React.Dispatch<React.SetStateAction<number | undefined>>,
}

const styles = {
    picture: {
        objectFit: "contain",
        width: '100%',
        maxWidth: '70vw',
        maxHeight: '60vh',
        height: 'auto',
        padding: '16px 3px'
    },

    button: {
        height: '60vh',
        width: '100%',
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#F8F9F7',
        borderRadius: '30px'
    },


    gnContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '35vw',
       
    },
    
    wrapper: {
        width: '70vw',

    }
}

export default function WorkView({ collection, category, selectedIndex, setSelectedIndex}: WorkViewProps) {
    const [work, setWork] = useState<Painting | Page | TeachingImage>(collection[selectedIndex]);


    useEffect(() => {
        setWork(collection[selectedIndex]);
    }, [ selectedIndex])

    return(
        <div style={styles.wrapper}>
            <div >
                { category === 'graphicNovels' ?
                    <>                        
                        {(selectedIndex === 0 || selectedIndex === collection.length -1) ?
                            <div style={styles.container}>
                                <div style={styles.button} onClick={()=>{ if (selectedIndex === collection.length - 1) { setSelectedIndex(selectedIndex-2)} else if (selectedIndex - 1 >= 0) {setSelectedIndex(selectedIndex - 1)} }}/>
                                    <img className="picture" style={styles.picture} src={`images/${work?.filename}`} />
                            
                                    {selectedIndex === collection.length -1 && 
                                        <img className="picture" style={styles.picture} src={`images/${collection[0]?.filename}`}/>
                  
                                    }
                                
                                <div style={styles.button} onClick={()=>{ if (selectedIndex+1 < collection.length){ setSelectedIndex(selectedIndex+1)} }}/>
                            </div>

                            :
                            <div style={styles.container}>
                                <div style={styles.button} onClick={()=>{ if (selectedIndex-2 >= 0 || selectedIndex -1 >=0){if (selectedIndex - 2 < 0) {setSelectedIndex(0)} else {setSelectedIndex(selectedIndex-2)}} }}/>
                                    <img className="picture" style={styles.picture} src={`images/${collection[selectedIndex]?.filename}`} usemap="#planetmap"/>
                                    <map  id="planetmap" name="planetmap">
                                        <area
                                            shape="rect"
                                            coords="512,331,547,362"
                                            href="https://www.google.com"
                                        />
                                    </map>
                                    <img className="picture" style={styles.picture} src={`images/${collection[selectedIndex+1]?.filename}`}/>
                                <div style={styles.button} onClick={()=>{ if (selectedIndex+2 < collection.length){setSelectedIndex(selectedIndex+2)} }}/>
                            </div>
                        }
                        
                        
                    </>
                    :
                    <div style={styles.container}>
                        <div style={styles.button} onClick={()=>{ if (selectedIndex-1 >= 0){setSelectedIndex(selectedIndex-1)} }}/>
                        <img className="picture" style={styles.picture} src={`images/${work?.filename}`} />
                        <div style={styles.button} onClick={()=>{ if (selectedIndex+1 < collection.length){setSelectedIndex(selectedIndex+1)} }}/>
                    </div>
                }

            </div>

            <p>{work?.description}</p>
            {work?.additionalImages?.map(name => {return <img src={`images/${name}`}/>}) }
        </div>
    )
}