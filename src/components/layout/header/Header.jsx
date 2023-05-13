import React from 'react';
import { styled } from 'styled-components';
import Text from '../../common/Text';
import Button from '../../common/Button';

function Header() {
  return (
    <HeaderContainer>
      <Items>
        <TitleItemBox>
          <Text fontSize={'32px'} fontWeight={'bold'} color={'#BeB47d'}>
            감자 마켓
          </Text>
          <img
            src='https://img.freepik.com/premium-vector/pure-potato-with-hands-feet-and-face-vector-illustration-of-potato-character_469123-812.jpg'
            alt='타이틀 사진'
          />
        </TitleItemBox>
        <Text margin={'0px 20px 0px 40px'} fontSize={'24px'} fontWeight={600} color={'#9e7979'}>
          중고 매물
        </Text>
        <Text margin={'0px 20px 0px 20px'} fontSize={'24px'} fontWeight={600} color={'#9e7979'}>
          인기 매물
        </Text>
        <Text margin={'0px 20px 0px 20px'} fontSize={'24px'} fontWeight={600} color={'#9e7979'}>
          나의 거래
        </Text>
      </Items>
      <Items gap={200}>
        <input />
        <Button width={'71px'} height={'42px'} outlinecolor={'#C6C7C0'} bc={'#fff'} linewidth={'1px'} color={'#C6C7C0'}>
          로그인
        </Button>
      </Items>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  padding: 0px 120px 0px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
  height: 70px;
  img {
    width: 60px;
    height: 45px;
  }
`;
const TitleItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: ${({ gap }) => `${gap}px`};
`;

export default Header;
