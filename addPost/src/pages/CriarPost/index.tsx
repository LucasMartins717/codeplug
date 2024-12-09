import { FC } from "react";
import styled from "styled-components";

const MainContainer = styled.main`
    
`
const SectionPainel = styled.section`
    
`

const CriarPost: FC = () => {
    return (
        <MainContainer>
            <SectionPainel>
                <input type="text" name="title" />
                <input type="text" name="description" />
                <input type="file" name="image_url" />
                <input type="text" name="image_url" />
                <h5>tags</h5>
            </SectionPainel>
        </MainContainer>
    )
}

export default CriarPost;