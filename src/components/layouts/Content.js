import '../../App.css';
import { Container} from "@material-ui/core";
import Question from "./contents/Question";

import Carousel from 'react-material-ui-carousel';


function Content() {
    
    
    return (
        <Container autoPlay="false">
            <h4 style={{color:"rgb(120, 120, 120)"}}>Workspace</h4>
            <Carousel autoPlay="false">
            <Question titleOfQuestion="질문1번(주관식)" type="assayType"/>
            <Question titleOfQuestion="질문2번(바형식)" type="barType"/>
            <Question titleOfQuestion="질문3번(블록형식)" type="blockType"/>
            <Question titleOfQuestion="재현이가 보는거" type="assayType"/>
            </Carousel> 
        </Container>
        
    );
}
export default Content;


