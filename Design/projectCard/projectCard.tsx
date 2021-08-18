import {
  CardContainer,
  TextWrapper,
  ImageWrapper,
  SideWrapper,
  BodyWrapper,
  Title,
  Text,
  SeeProjectButton
} from './styles';
import { useTheme } from 'styled-components';
import Image from 'next/image';

import StyledLinkAlternative from '../../design/styledLinkAlternative';

interface IProps {
  t: any;
  isFullW: boolean;
  iconsArray: any;
  title: string;
  text: string;
  link: string;
  imageName?: string;
  content?: any;
}

const ProjectCard: React.FC<IProps> = ({
  t,
  isFullW,
  iconsArray,
  imageName,
  title,
  text,
  link,
  content
}) => {
  const theme = useTheme();

  return (
    <CardContainer isFullW={isFullW}>
      <BodyWrapper isFullW={isFullW}>
        <TextWrapper isFullW={isFullW}>
          <Title>{title}</Title>
          <Text>{text}</Text>
          <StyledLinkAlternative href={link}>
            <SeeProjectButton>See project</SeeProjectButton>
          </StyledLinkAlternative>
        </TextWrapper>
        {content ? (
          content
        ) : (
          <ImageWrapper isFullW={isFullW}>
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
      <SideWrapper isFullW={isFullW}></SideWrapper>
    </CardContainer>
  );
};

export default ProjectCard;
