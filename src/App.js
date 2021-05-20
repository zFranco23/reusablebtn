import {Container, makeStyles, Typography } from "@material-ui/core";

import Button from './Button';

const useStyles = makeStyles((theme)=>({
  root:{
    paddingTop:"2rem",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  },
  title:{
    fontFamily:"Poppins",
    fontSize:"1.5rem",
  },
  containerButton:{
    display:"flex",
    flexDirection:"column",
  },
  flex:{
    marginTop:"1rem",
    marginBottom:"1rem",
    display:"flex",
    justifyContent:"flex-start",
    "&>div":{
      marginRight:"5rem",
    }
  },
  btnOutHover:{
    cursor:"pointer",
    maxWidth:"100%",
  },
  footer:{
   margin:"auto",
    marginTop:"1rem",
    fontFamily:"Poppins",
    "& p":{
        margin:0,
        padding:0
    },
    color:"#F2F2F2"
},
github:{
    textDecoration:"none"
},
footerText:{
  textAlign:"center",
    fontWeight:"500",
    color:"#828282",
    textAlign:"center",
    [theme.breakpoints.down("xs")]:{
        fontSize:"0.8rem",
    }
}
}))

function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{marginBottom:"1rem"}}>
        <Typography className={classes.title}>
          Buttons
        </Typography>
        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p>{`<Button  />`}</p>
                <Button />
          </div>
          <div className={classes.containerButton}>
              <p>{`&:hover, &:focus`}</p>

              <Button hoverDefault/>
          </div>
        </div>

        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p>{`<Button  />`}</p>
              <Button variant="outline"/>
              
          </div>
          <div className={classes.containerButton}>
              <p>{`&:hover, &:focus`}</p>

              <Button variant="outline" hoverOutline />
          </div>
        </div>

        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p>{`<Button  variant="text"/>`}</p>
              <Button variant="text"/>
              
          </div>
          <div className={classes.containerButton}>
              <p>{`&:hover, &:focus`}</p>

              <Button variant="text" hoverText/>
          </div>
        </div>

        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p>{`<Button  disableShadow />`}</p>
              <Button disableShadow/>
              
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p>{`<Button disabled />`}</p>
              <Button disabled />
              
          </div>
          <div className={classes.containerButton}>
              <p>{`<Button variant=”text” disabled />`}</p>

              <Button variant="text" disabled />
          </div>
        </div>

        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p>{`<Button startIcon=”local_grocery_store” />`}</p>
              <Button startIcon="local_grocery_store" noHover/>
              
          </div>
          <div className={classes.containerButton}>
              <p>{`<Button endIcon=”local_grocery_store” />`}</p>
              
                <Button endIcon="local_grocery_store" noHover />
          </div>
        </div>

        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p>{`<Button size="sm" />`}</p>
                <Button size="sm" />
              
          </div>
          <div className={classes.containerButton}>
          <p>{`<Button size="md" />`}</p>
              
                <Button size="md" />
          </div>
          <div className={classes.containerButton}>
          <p>{`<Button size="lg" />`}</p>
              
                <Button size="lg" />
          </div>
        </div>
        
        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p>{`<Button color="default" />`}</p>
                <Button color="default"/>
              
          </div>
          <div className={classes.containerButton}>
          <p>{`<Button color="primary" />`}</p>
              
                <Button color="primary"  />
          </div>
          <div className={classes.containerButton}>
          <p>{`<Button color="secondary" />`}</p>
              
                <Button color="secondary" />
          </div>
          <div className={classes.containerButton}>
          <p>{`<Button color="danger" />`}</p>
              
                <Button color="danger" />
          </div>
        </div>
        <div className={classes.flex}>
          <div className={classes.containerButton}>
              <p style={{margin:0,padding:0,color:"#828282"}}>{`&:hover, &:focus`}</p>
                <Button color="default" hoverDefault/>
              
          </div>
          <div className={classes.containerButton}>
              <div style={{height:"1.5rem"}}>

              </div>
                <Button color="primary"  hoverPrimary/>
          </div>
          <div className={classes.containerButton}>
            <div style={{height:"1.5rem"}}>

          </div>
                <Button color="secondary" hoverSecondary/>
          </div>
          <div className={classes.containerButton}>
                <div style={{height:"1.5rem"}}>

                </div>
                <Button color="danger" hoverDanger/>
          </div>
        </div>
      </Container>
      <div className={classes.footer}>
            <div className={classes.flex}>
                <p className={classes.footerText}>
                    created by <a href="https://github.com/zFranco23" className={classes.github}>zFranco23</a> - devChallenges.io
                </p>
            </div>
        </div>
    </div>
  );
}

export default App;
