'use client';
import React from "react";

const styles = {
  cardWrapper:{
    display: 'flex',
    width: "100vw",
    height: "100vh",
    backgroundImage: `url("/header.jpeg")`,
  },

  card: {
    display: 'flex',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
    backgroundImage: `url("/header.jpeg")`,
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

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


const Wrapper = ({children, collapsed, onClick}: ContactCardProps) => {
  return(
    <>
    {collapsed ? (
      <span className="header" style={styles.headerWrapper } onClick={() => onClick(!collapsed)}>
        <div className="title" style={styles.header}>
          {children}
        </div>
        </span> 
      ) : (
        <span className="cardWrapper" style={styles.cardWrapper} >
          <div className="card" style={styles.card}  onClick={() => onClick(!collapsed)}>
            {children}
          </div>
          </span>
        )
      }
    </>
  )
}

const SubPageWrapper = ({ collasped}: {collasped:boolean}) => {
  return(
    <>
      {collasped ? (
        <span style={{display:"flex", flexDirection:"row", justifyContent:"space-around", width: "80vw", textAlign:"center"}}>
            <h3> Paintings </h3>
            <h3> Graphic Novels </h3>
            <h3> Teaching </h3>
        </span>
      ) : (
        <>
          <h2> Paintings </h2>
          <h2> Graphic Novels </h2>
          <h2> Teaching </h2>
        </>
      )}
    </>
  )
}


export default function ContactCard({ collapsed, onClick }: ContactCardProps) {
  return (
    <Wrapper collapsed={collapsed} onClick={onClick}>
      <span className="outerFlexColumn" style={styles.outerFlexColumn}>
          <h1 style={{margin: "0px"}}>
            Yolanda Chetwynd
          </h1>
          <p style={{margin: "0px 0px 20px 0px"}}>
            ychetwynd@gmail.com
          </p>
      <span className="flexRow" style={styles.flexRow}>
        { !collapsed && <span style={{overflow: "hidden", margin: "15px"}}><img src="SelfPortrait.jpeg" srcSet="SelfPortrait.jpeg 329w" sizes="(max-width: 600px) 200px, (max-width: 700px) 130px,
         300px"/></span>}
        <span className="flexColumn" style={styles.flexColumn}>
   

        <SubPageWrapper collasped={collapsed} />
          
        </span >
      </span >
      </span>

    </Wrapper>
  );
}
  