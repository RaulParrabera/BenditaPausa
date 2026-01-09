import styled from "styled-components";

export const InstagramBlock = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  justify-content: center;
`;

export const InstagramContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const InstagramTitle = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1.5rem;

  svg {
    color: #e1306c;
    font-size: 2.5rem;
  }
`;

export const InstagramLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 1rem;
  padding: 0.9rem 1.8rem;
  background-color: #1c6673;
  color: #ffffff;
  font-size: 1.1rem;
  font-family: 'JetBrains Mono', monospace;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #17515b;
    color: #ffffff;
    transform: scale(1.05);
  }

  svg {
    font-size: 1.4rem;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1.5rem auto;
  max-width: 600px;
  padding: 1.5rem;
  border-radius: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  color: #fff;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

export const UserInfo = styled.div`
  text-align: left;
`;

export const Username = styled.h3`
  margin: 0;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
`;

export const Bio = styled.p`
  margin: 0.5rem 0 0;
  color: #f0f0f0;
  font-size: 1rem;
  font-weight: 400;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 2rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

export const PostItem = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.8);
  }

  &:hover::after {
    content: '❤️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const ViewButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: #fff;
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 600;
  text-decoration: none;
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1.5rem;
  }
`;
