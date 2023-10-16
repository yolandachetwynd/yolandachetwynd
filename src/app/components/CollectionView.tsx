// @ts-nocheck
import { useState, useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Painting, paintings, paintingCollections } from "../constants/paintings";
import { Page, graphicNovels, gnCollections } from "../constants/graphicNovels";
import { TeachingImage, projects, projectDescriptons} from '../constants/teaching';
import WorkView from "./WorkView";


type CollectionViewProps = {
    category: 'paintings' | 'graphicNovels' | 'teaching',
    section: string,
    selectedWorkIndex: number | undefined,
    setSelectedWorkIndex: React.Dispatch<SetStateAction<number | undefined>>,
}

const styles ={
    thumbnailGallery: {
        display: "flex",
        padding: "1vw",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "space-evenly"
    },

    thumbnail: {
        width: "20vw"
    },

    mobile: {
        width: "30vw"
    },

    collectionDescription: {
        display: "flex",
        padding: "1vw",
        justifyContent: "center",
        flexDirection: "column"
    }
}


export default function CollectionView({category,section, selectedWorkIndex, setSelectedWorkIndex}:CollectionViewProps) {
    const [worksInCollection, setWorksInCollection] = useState<any>();
    const [collectionInformation, setCollectionInformation] = useState<any>();
    const useMobileView = useMediaQuery('(max-width: 500px)');



    useEffect(() => {
        switch(category){
            case 'paintings':
                setWorksInCollection(paintings);
                setCollectionInformation(paintingCollections);
                break;
            case "graphicNovels":
                setWorksInCollection(graphicNovels);
                setCollectionInformation(gnCollections);
                break;
            case "teaching": 
                setWorksInCollection(projects);
                setCollectionInformation(projectDescriptons);
                break;
        }

    }, [category])

    useEffect(() => {

    }, [selectedWorkIndex])


    

    return(
        <>
            {selectedWorkIndex !== undefined ?  
                <div >
                    <div onClick={() => {setSelectedWorkIndex(undefined)}} > <h3 style={{padding: '0px 10px'}}>{`back`}</h3> </div>
                    <WorkView category={category} collection={worksInCollection[section]} selectedIndex={selectedWorkIndex} setSelectedIndex={setSelectedWorkIndex}/>
                </div>
            : 
                <>
                    <h1>{section}</h1>

                    
                        <span className="collectionDescprition" style={styles.collectionDescription}>
                            {collectionInformation ? collectionInformation[section]?.collectionDescription.map( (paragraph: string, index: number) => {
                                return(<p key={index}>{paragraph}</p>)
                            }) : <></>}
                        </span>
                
                    
                    <span className="thumbnailGallery" style={styles.thumbnailGallery}>
                        {worksInCollection ? worksInCollection[section]?.map((work: Painting | Page | TeachingImage, index: number) => {
                            return (
                                <span key={index} style={styles.thumbnailGallery}>
                                    <div>
                                    <img onClick={() => {setSelectedWorkIndex(index)}} style={useMobileView ? styles.mobile : styles.thumbnail} src={`images/${work.filename}`} />
                                    { (category === "paintings" && !useMobileView) && 
                                        <div style={{display: "flex", width: "20vw"}}>
                                        
                                        <p style={{width: "15vw"}}>
                                            {work.title}
                                            {work.dimensions} {work.medium}
                                            
                                        </p>
                                        {work.avaliable ? <p style={{width:"15vw", textAlign:"right"}}> contact to buy</p>: <></>}
                                        </div>
                                    }
                                    </div>
                                </span>
                            )
                        }): <></>}
                    </span>
                </>
            }

        </>
    )
}