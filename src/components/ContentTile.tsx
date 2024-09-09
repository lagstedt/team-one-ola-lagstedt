import styled from '@emotion/styled';
import React from 'react';
import Tile from '../domain/Tile';

/**
 * The ContentTile component displays a tile with a heading, body, image, and CTA.
 *
 * @param {Tile} props - The tile props containing heading, body, image, and CTA.
 * @returns {JSX.Element} The rendered tile component.
 */

const TileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  text-align: center;
  width: 100%;
  padding: 1px;
  background-color: white;
  margin-bottom: 40px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;  
  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 20px 0;
`;

const Heading = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  margin-bottom: 1px;
`;

const Body = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4em;
  line-height: 1.2em;
  white-space: normal;
`;

const CTAButton = styled.a`
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 10px 0;
  width: 50%;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  border: 2px solid black;
  border-radius: 1px;
  margin-top: 0px;
  transition: background-color 0.2s ease, color 0.3s ease;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const ContentTile: React.FC<Tile> = ({ heading, body, image, cta }) => {
    return (
        <TileWrapper>
            <ImageWrapper>
                <Image src={image} alt={heading} />
            </ImageWrapper>
            <Content>
                <Heading>{heading}</Heading>
                <Body>{body}</Body>
            </Content>
            <CTAButton href={cta.link}>{cta.label}</CTAButton>
        </TileWrapper>
    );
};

export default ContentTile;