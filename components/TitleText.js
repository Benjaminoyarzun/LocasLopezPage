import { Container, Spacer, Text, css } from "@nextui-org/react";

const TitleText = ({children, title}) => {

    return (
        <Container fluid display="flex" alignItems="center" style={{width:"50vw", flexDirection:"column" }} >
            <h1  > {title}</h1>
            <Text>{children} </Text>

        </Container>
     );
}
 
export default TitleText;