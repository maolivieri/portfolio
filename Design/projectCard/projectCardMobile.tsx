import {
  CardContainer,
  TextWrapper,
  ImageWrapper,
  SideWrapper,
  BodyWrapper,
  Title,
  Text,
  SeeProjectButton,
  TitleWrapper
} from './stylesForMobile';
import { useTheme } from 'styled-components';
import Image from 'next/image';

import StyledLinkAlternative from '../styledLinkAlternative';

interface IProps {
  t: any;
  iconsArray: any;
  title: string;
  text: string;
  link: string;
  imageName?: string;
  content?: any;
  hasLink?: boolean;
}

const ProjectCardMobile: React.FC<IProps> = ({
  t,
  iconsArray,
  imageName,
  title,
  text,
  link,
  content,
  hasLink
}) => {
  const theme = useTheme();

  return (
    <CardContainer>
      <BodyWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Text>{text}</Text>
          {hasLink && (
            <StyledLinkAlternative href={link}>
              <SeeProjectButton>See project</SeeProjectButton>
            </StyledLinkAlternative>
          )}
        </TextWrapper>
        {content ? (
          content
        ) : (
          <ImageWrapper>
            <Image
              src={
                imageName
                  ? `/images/projects/${imageName}`
                  : `/images/projects/${theme.name}placeholder.png`
              }
              width="920"
              height="557"
              layout="responsive"
            ></Image>
          </ImageWrapper>
        )}
      </BodyWrapper>
      <SideWrapper isFullW={true}/>
    </CardContainer>
  );
};

export default ProjectCardMobile;
