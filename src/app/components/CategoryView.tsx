// @ts-nocheck
import {useEffect, useState} from "react";
import {Painting, paintings} from "../constants/paintings";
import {graphicNovels, Page} from '../constants/graphicNovels';
import {TeachingImage, projects} from '../constants/teaching';

import CollectionView from "./CollectionView";

const styles = {
    wrapper: {
        display: 'flex',
        flexDirection: "row",
    },
    panel: {
        minHeight: "75vh",
        width: "20vw",
        margins: "2px",
        padding: "10px",
        overflowWrap: "break-word",
        overflow: "auto"

    },
    sectionTitle: {
        padding: "0 10px"
    },
    selectedSectionTitle: {
        color:"#6BB0A8ff", 
        padding: "0px 10px ",
        border:"2px solid #CED0CC", 
        borderRadius: "30px",
    },
    workTitle: {
        margin: "5px 30px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    selectedWorkTitle: {
        margin: "5px 30px",
        color:"#6BB0A8ff"
    },
    sectionDivider: {
        borderRight: "8px solid #bbb",
        borderRadius: "5px",
    },
    content: {
        minHeight: "75vh",
        width: "70vw",
        padding: "0 2vw",
    },

}

const sections = (category: "paintings" | "graphicNovels" | "teaching") => {
    let works; 

    switch(category) {
        case "paintings":
            works = paintings;
            break;
        case "graphicNovels":
            works = graphicNovels;
            break;
        case "teaching":
            works = projects;
            break;
    }

    var result = [];
    for (let section in works) {
        result.push(section);
    }
    console.log(result);
    return result;
}

const getCategory = (category: "paintings" | "graphicNovels" | "teaching") => {
    let works; 

    switch(category) {
        case "paintings":
            works = paintings;
            break;
        case "graphicNovels":
            works = graphicNovels;
            break;
        case "teaching":
            works = projects;
            break;
    }

    return works;
}



type CategoryViewProps = {
    category: "paintings" | "graphicNovels" | "teaching"
}

export default function CategoryView({category}:CategoryViewProps) {
    const [selectedSection, setSelectedSection] = useState<string>("");
    const [selectedWorkIndex, setSelectedWorkIndex] = useState<number | undefined>();
    const [listOfWorks, setListOfWorks] = useState<string[] | undefined>();


    useEffect(() => {
        setSelectedSection(sections(category)[0] ?? "")
        setSelectedWorkIndex(undefined)
    }, [category])

    useEffect(() => {
        let list; 
        if (selectedSection && category !== 'graphicNovels') {
            list = (getCategory(category) as {[key: string]: Page[] | Painting[] | TeachingImage[]})[selectedSection].map((work, index) => {return <h5 key={index} style={selectedWorkIndex === index ? styles.selectedWorkTitle : styles.workTitle} onClick={() => {setSelectedWorkIndex(index)}}>{`- ${work.title}`}</h5>});
            setListOfWorks(list)
        }

    }, [selectedWorkIndex, selectedSection])

    return(
        <span className="wrapper" style={styles.wrapper}>
            <span className="panel" style={styles.panel}>
                {sections(category).map((section) => {
                    return (
                        <div key={section}>
                            <h3 style={selectedSection === section ? styles.selectedSectionTitle : styles.sectionTitle} onClick={()=> {setSelectedSection(section); setSelectedWorkIndex(undefined)}}>{ section }</h3>
                            { (selectedSection === section && category !== 'graphicNovels') &&  listOfWorks}
                        </div>
                    )
                })}
            </span>
            <span className="sectionDivider" style={styles.sectionDivider}/>
            <span className="content" style={styles.content}>
                <CollectionView category={category} section={selectedSection} selectedWorkIndex={selectedWorkIndex} setSelectedWorkIndex={setSelectedWorkIndex} />
            </span>
        </span>
    );
}