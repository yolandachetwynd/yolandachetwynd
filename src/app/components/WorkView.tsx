// @ts-nocheck
import { useEffect, useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
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

    doublepicture: {
        objectFit: "contain",
        width: '100%',
        maxWidth: '35vw',
        maxHeight: '60vh',
        height: 'auto',
        padding: '16px 3px'
    },

    logo: {      
        color: "white",
        fill: "#ff0000",
        maxWidth: '10px',
        maxHeight: '10px',
    },

    buttonLeft: {
        height: '60vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',

    },

    buttonRight: {
        height: '60vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end'

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

    },

    mobileWrapper: {
        width: '90vw'
    },
    greenDot: {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "green",
        margin: "5px"
    }
}

export default function WorkView({ collection, category, selectedIndex, setSelectedIndex}: WorkViewProps) {
    const [work, setWork] = useState<Painting | Page | TeachingImage>(collection[selectedIndex]);
    const useMobileView = useMediaQuery('(max-width: 500px)');
    const baseUrl = '/yolandachetwynd.github.io/images';
    // const baseUrl = '/images';

    useEffect(() => {
        setWork(collection[selectedIndex]);
    }, [ selectedIndex])

    return(
        <div style={useMobileView ? styles.mobileWrapper : styles.wrapper}>
            <div >
                { (category === 'graphicNovels' && !useMobileView) ?
                    <>                        
                        {(selectedIndex === 0 || selectedIndex === collection.length -1) ?
                            <div style={styles.container}>
                                <div style={styles.buttonLeft} onClick={()=>{ if (selectedIndex === collection.length - 1) { setSelectedIndex(selectedIndex-2)} else if (selectedIndex - 1 >= 0) {setSelectedIndex(selectedIndex - 1)} }}>
                                    <img style={styles.logo} src="left.svg" />
                                </div>
                                    <img className="picture" style={styles.doublepicture} src={`${baseUrl}/${work?.filename}`} />
                            
                                    {selectedIndex === collection.length -1 && 
                                        <img className="picture" style={styles.doublepicture} src={`${baseUrl}/${collection[0]?.filename}`}/>
                  
                                    }
                                
                                <div style={styles.buttonRight} onClick={()=>{ if (selectedIndex+1 < collection.length){ setSelectedIndex(selectedIndex+1)} }}>
                                <img style={styles.logo} src="right.svg" />
                                </div>
                            </div>

                            :
                            <div style={styles.container}>
                                <div style={styles.buttonLeft} onClick={()=>{ if (selectedIndex-2 >= 0 || selectedIndex -1 >=0){if (selectedIndex - 2 < 0) {setSelectedIndex(0)} else {setSelectedIndex(selectedIndex-2)}} }}>
                                    <img style={styles.logo} src="left.svg" />
                                </div>
                                    <img className="picture" style={styles.doublepicture} src={`${baseUrl}/${collection[selectedIndex]?.filename}`} usemap="#planetmap"/>
                                    <map  id="planetmap" name="planetmap">
                                        <area
                                            shape="rect"
                                            coords="512,331,547,362"
                                            href="https://www.google.com"
                                        />
                                    </map>
                                    <img className="picture" style={styles.doublepicture} src={`${baseUrl}/${collection[selectedIndex+1]?.filename}`}/>
                                <div style={styles.buttonRight} onClick={()=>{ if (selectedIndex+2 < collection.length){setSelectedIndex(selectedIndex+2)} }}>
                                    <img style={styles.logo} src="right.svg" />
                                </div>
                            </div>
                        }
                        
                        
                    </>
                    :
                    <div style={styles.container}>
                        <div style={styles.buttonLeft} onClick={()=>{ if (selectedIndex-1 >= 0){setSelectedIndex(selectedIndex-1)} }}>
                            <img style={styles.logo} src="left.svg" />
                        </div>
                        <img className="picture" style={styles.picture} src={`${baseUrl}/${work?.filename}`} />
                        <div style={styles.buttonRight} onClick={()=>{ if (selectedIndex+1 < collection.length){setSelectedIndex(selectedIndex+1)} }}>
                            <img style={styles.logo} src="right.svg" />
                        </div>
                    </div>
                }

            </div>
            <div style={useMobileView ? {display: "flex", width: "90vw", justifyContent: "space-between", margin: "auto"} : {display: "flex", width: "70vw", justifyContent: "space-between", margin: "auto"}}>
                                        
                <span style={useMobileView ? {width: "83vw"} : {width: "63vw"}}> 
                    {work.title} <br/>
                    {work.dimensions} {work.medium}
                                            
                </span>
                {work.avaliable ? <p>contact to buy</p>: <></>}
            </div>
            {/* <p>{work?.description}</p>
            {work?.additionalImages?.map((name: string) => {return <img key={name} src={`${baseUrl}/${name}`}/>}) } */}
        </div>
    )
}