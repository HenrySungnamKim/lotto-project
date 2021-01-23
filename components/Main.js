import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import LottoList from "./LottoList";
const index = () => {
  const router = useRouter();
  const [friendName, setFriendName] = useState("");
  const onChangeFriendName = useCallback((e) => {
    setFriendName(e.target.value);
  }, []);
  const pressEnter = useCallback(
    (e) => {
      if (e.key == "Enter") {
        if (friendName.length > 0) {
          router.push("/friends/[name]", `/friends/${friendName}`);
        }
      }
    },
    [friendName]
  );
  const onClickFriend = useCallback(() => {
    if (friendName.length > 0) {
      router.push("/friends/[name]", `/friends/${friendName}`);
    }
  }, [friendName]);

  return (
    <Wrapper>
      <Img>
        <InnerBlock>
          <Greeting>
            <Input
              value={friendName}
              onChange={onChangeFriendName}
              onKeyDown={pressEnter}
              placeholder="친구 이름(별명)을 입력해주세요"
            />
            <GreetingButton onClick={onClickFriend}></GreetingButton>
          </Greeting>
        </InnerBlock>
      </Img>
      <LottoList />
    </Wrapper>
  );
};

export default index;
const Wrapper = styled.div`
  width: 100vw;
`;
const Img = styled.div`
  position: relative;
  background-image: url("/static/main.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vw;
  opacity: 0.9;
`;
const InnerBlock = styled.div`
  position: absolute;
  color: #fff;
  left: 0;
  right: 0;
  top: 30vw;
  width: 80vw;
  margin: 0 auto;
`;

const Greeting = styled.div``;
const GreetingButton = styled.div`
  background-image: url("/static/go.svg");
  background-size: 100% 100%;
  width: 30px;
  height: 30px;
  margin: 50px auto 0 auto;
  cursor: pointer;
`;
const Input = styled.input`
  width: 100%;
  color: #fff;
  ::placeholder {
    color: #fff;
  }
  @media (max-width: 1100px) {
    font-size: 18px;
  }
  @media (min-width: 1100px) {
    font-size: 32px;
  }
`;
