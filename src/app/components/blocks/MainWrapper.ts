import styled from "@emotion/styled";

const MainWrapper = styled.div`
  width: 50%;
  height: 92.5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(45deg, #eff4fa, #eff4fa, white);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  @media only screen and (max-width: 105px) {
    width: 92.38%;
  }
  @media only screen and (min-width: 106px) and (max-width: 602px) {
    width: calc(89.53% + 2px);
  }
  @media only screen and (min-width: 603px) and (max-width: 1014px) {
    width: calc(83% + 42px);
  }
  @media only screen and (min-width: 1015px) and (max-width: 1151px) {
    width: calc(76.64% + 106px);
  }
  @media only screen and (min-width: 1152px) and (max-width: 1411px) {
    width: calc(71.15% + 170px);
  }
  @media only screen and (min-width: 1412px) and (max-width: 1533px) {
    width: calc(63.11% + 283px);
  }
  @media only screen and (min-width: 1534px) and (max-width: 1646px) {
    width: calc(54.86% + 409px);
  }
  @media only screen and (min-width: 1647px) and (max-width: 1749px) {
    width: calc(45.63% + 561px);
  }
  @media only screen and (min-width: 1750px) and (max-width: 1841px) {
    width: calc(32.6% + 789px);
  }
  @media only screen and (min-width: 1842px) and (max-width: 1920px) {
    width: calc(12.65% + 1156px);
  }
`;

export default MainWrapper;
