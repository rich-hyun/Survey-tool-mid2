import React, { Component } from "react";
import ChoiceAssayType from "./questions/EssayType";
import ChoiceBarType from "./questions/BarType";
import ChoiceBlockType from "./questions/BlockType";
import Title from "./questions/Title";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


class Question extends Component{
    
    render(){
        const{titleOfQuestion,type}=this.props;
        
        if(type==="assayType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <ChoiceAssayType/>
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                   
                </Card>
            )
        }
        if(type==="barType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <ChoiceBarType/>     
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }

        if(type==="blockType"){
            return(
                <Card variant="outlined">
                    <CardContent>
                        <Title titleOfQuestion={titleOfQuestion}/>
                        <ChoiceBlockType/> 
                    </CardContent>
                    <Divider />
                    <Stack spacing={2} direction="row" className="lowerButtons">
                        <Button variant="outlined" endIcon={<ArrowBackIcon />}>
                        이전
                        </Button>
                        <Button variant="outlined" endIcon={<ArrowForwardIcon />}>
                        다음
                        </Button>
                    </Stack>
                </Card>
            )
        }
    }
  }

  export default Question;