import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import ContentTile from './ContentTile';
import styled from '@emotion/styled';
import { Pagination } from 'swiper/modules';
import Tile from '../domain/Tile';

/**
 * ContentTiles component - Renders a carousel of content tiles using Swiper.
 *
 * @param {ContentTilesProps} props - The props for ContentTiles.
 * @returns {JSX.Element} The rendered Swiper component with tiles.
 */

interface ContentTilesProps {
    tiles: Tile[];
}

const SwiperWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  .swiper-slide {
    display: flex;
    justify-content: center;
    height: auto;
  }
  .swiper-pagination {
    margin-top: 20px;
  }

  .swiper-pagination-bullet {
    background-color: grey;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: black;
  }
`;

const ContentTiles: React.FC<ContentTilesProps> = ({ tiles }) => {
    return (
        <SwiperWrapper>
            <Swiper
                modules={[Pagination]}
                slidesPerView={3}
                spaceBetween={5}
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    480: { slidesPerView: 1 },
                }}
            >
                {tiles.map((tile, index) => (
                    <SwiperSlide key={index}>
                        <ContentTile
                            heading={tile.heading}
                            body={tile.body}
                            image={tile.image}
                            cta={tile.cta}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperWrapper>
    );
};

export default ContentTiles;