
import { Container, Body, Title, Content, Header } from "./styles"

import Side from "./side"

const PageOne = ({t}) => {

    return (
        <Container>
            <Side />
            <Body>
                <Header>{t('pageOne.header')}</Header>
                <Title>{t('pageOne.title')}</Title>
                <Content>{t('pageOne.content')}</Content>
            </Body>
        </Container>
    )
}

export default PageOne;
