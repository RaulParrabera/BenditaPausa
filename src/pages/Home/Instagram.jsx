import React from "react";
import { FaInstagram } from "react-icons/fa";
import {
  InstagramBlock,
  InstagramContent,
  InstagramTitle,
  InstagramLink,
  ProfileCard,
  Avatar,
  UserInfo,
  Username,
  Bio,
  PostsGrid,
  PostItem,
  ViewButton,
} from "../../styles/InstagramStyles.jsx";

const posts = [
  '/IGImages/IGPost1.png',
  '/IGImages/IGPost2.png',
  '/IGImages/IGPost3.png'
];

const Instagram = () => {
  return (
    <section className="instagram-block">
      <InstagramBlock>
        <InstagramContent>
          <InstagramTitle>
            Últimas publicaciones en Instagram <FaInstagram />
          </InstagramTitle>

          <ProfileCard>
            <Avatar
              src="https://via.placeholder.com/120"
              alt="Perfil"
            />
            <UserInfo>
              <Username>@gisela_scarel</Username>
              <Bio>Bienvenidos a mi rincón de creatividad y bienestar ✨</Bio>
            </UserInfo>
          </ProfileCard>

          <PostsGrid>
            {posts.map((src, i) => (
              <PostItem key={src || i}>
                <img src={src} alt={`post ${i + 1}`} />
              </PostItem>
            ))}
          </PostsGrid>

          <ViewButton
            href="https://www.instagram.com/gisela_scarel/?hl=af"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Ver perfil en Instagram
          </ViewButton>
        </InstagramContent>
      </InstagramBlock>
    </section>
  );
};

export { Instagram };
