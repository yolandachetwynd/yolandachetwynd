// @ts-nocheck
'use client';
import React, {useState} from "react";
import CategoryView from "./CategoryView";

const styles = {
  cardWrapper:{
    display: 'flex',
    width: "100vw",
    height: "100vh",
    backgroundImage: `url("/yolandachetwynd.github.io/header.jpeg")`,
  },

  card: {
    display: 'flex',
    // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)`,
    width: "80vw",
    height: "80vh",
    borderRadius: "30px",
    backgroundColor: "#d1e4dd",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },

  headerWrapper: {
    display: 'flex',
    width: "100vw",
    height: "25vh",
    backgroundImage: `url("/yolandachetwynd.github.io/header.jpeg")`,
  //   boxShadow: `0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  // 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  // 0 12.5px 10px rgba(0, 0, 0, 0.06),
  // 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  // 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  // 0 100px 80px rgba(0, 0, 0, 0.12)`

  },
  header: {
    height: "20vh",
    width: "80vw",
    margin: "10px auto",
    color: "black",
    backgroundColor: "#d1e4dd",
    borderRadius: "30px",
    display: "flex",
    objectFit: 'scale-down',
  },
  outerFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    // margin: "0px 5px",
    justifyContent: "space-evenly",
    alignItems: "strech",
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    justifyContent: "space-evenly",
    width: '80vw'


  },
  flexCenter: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",

  },
  

};

type ContactCardProps = {
    collapsed: boolean;
    onClick: (collapsed: boolean) => void;
    children?: React.ReactNode
  };


const Wrapper = ({children, collapsed}: {collapsed: boolean, children: React.ReactNode}) => {

  return(
    <>
    {collapsed ? (
      <span className="header" style={styles.headerWrapper } >
        <div className="title" style={styles.header}>
          {children}
        </div>
        </span> 
      ) : (
        <span className="cardWrapper" style={styles.cardWrapper} >
          <div className="card" style={styles.card} >
            {children}
          </div>
          </span>
        )
      }
    </>
  )
}

const SubPageWrapper = ({ collasped, category, selectCategory}: {collasped:boolean, selectCategory: (s: "paintings" | "graphicNovels" | "teaching")=>void, category: "paintings" | "graphicNovels" | "teaching"}) => {

  return(
    <>
      {collasped ? (
        <span style={{display:"flex", flexDirection:"row", justifyContent:"space-around", width: "80vw", textAlign:"center"}}>
            <h3 style={category === "paintings" ? {color:"#6BB0A8ff"}: undefined} onClick={() => {selectCategory("paintings")}}> Paintings </h3>
            <h3 style={category === "graphicNovels" ? {color:"#6BB0A8ff"}: undefined} onClick={() => {selectCategory("graphicNovels")}}> Booklets </h3>
            <h3  style={category === "teaching" ? {color:"#6BB0A8ff"}: undefined} onClick={() => {selectCategory("teaching")}}> Teaching </h3>
        </span>
      ) : (
        <>
            <h2 onClick={() => {selectCategory("paintings")}}> Paintings </h2>
            <h2 onClick={() => {selectCategory("graphicNovels")}}> Booklets </h2>
            <h2 onClick={() => {selectCategory("teaching")}}> Teaching </h2>
        </>
      )}
    </>
  )
}


export default function ContactCard({ collapsed, onClick }: ContactCardProps) {
  const [category, setCategory] = useState<"paintings" | "graphicNovels" | "teaching">("paintings");

  return (
    <>
      <Wrapper collapsed={collapsed} >
        <span className="outerFlexColumn" style={styles.outerFlexColumn}>
            <h1 style={{margin: "0px"}} onClick={() => {onClick(false)}}>
              Yolanda Chetwynd
            </h1>
            <p style={{margin: "0px 0px 20px 0px"}}>
              ychetwynd@gmail.com
            </p>
        <span className="flexRow" style={styles.flexRow}>
          { !collapsed && <span style={{overflow: "hidden", margin: "15px"}}><img src="/yolandachetwynd.github.io/SelfPortrait.jpeg" srcSet="SelfPortrait.jpeg 329w" sizes="(max-width: 600px) 200px, (max-width: 700px) 130px,
          300px"/></span>}
          <span className="flexColumn" style={styles.flexColumn}>
    

          <SubPageWrapper collasped={collapsed} category={category} selectCategory={(s) => {setCategory(s); onClick(true)}} />
            
          </span >
        </span >
        </span>

      </Wrapper>
      {collapsed && <CategoryView category={category} />}
    </>
  );
}
  