import styled from "styled-components";

export const Container = styled.body`
  margin: 0px;
  padding: 0px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0);
  position: absolute;
  top: 0px;
  left: 0px;
  border-bottom: 2px solid rgb(32, 32, 32);
  position: fixed;
  z-index: 999;
`;

export const TextMenu = styled.p`
  font-size: 15px;
  color: white;
  font-weight: 600px;
`;

export const ImageLogo = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 20px;
`;

export const ViewMenu = styled.div`
  display: flex;
`;

export const ButtonMenu = styled.button`
  border: none;
  background: none;
  margin-right: 2px;
  padding: 3px 7px 3px 7px;
  border-radius: 30px;
  height: 35px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;

export const ButtonAvatar = styled.button`
  border: none;
  background: none;
  margin-left: 10px;
  cursor: pointer;
  margin-right: 20px;
`;

export const ViewPopular = styled.div`
  background-color: rgba(0, 0, 0);
  padding: 10px 8% 50px 8%;
  margin-top: 80px;
`;

export const ViewSearch = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const TextTitle = styled.p`
  font-size: 19px;
  color: white;
  font-weight: 500;
`;

export const TextPlaceHolder = styled.p`
  font-size: 14px;
  color: gray;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: rgb(50, 50, 50);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 999;
`;

export const DropDownBtn = styled.button`
  border: none;
  background: none;
  margin-right: 2px;
  padding: 3px 7px 3px 7px;
  border-radius: 30px;
  height: 35px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  color: white;
  font-size: 15px;
`;

export const DropDown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    ${DropDownContent} {
      display: block;
    }
    ${DropDownBtn} {
      background-color: gray;
    }
  }
`;

export const DropDownOption = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`;

export const ViewFilter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(50, 50, 50);
`;

export const DropDownContentFilter = styled.div`
  display: none;
  position: absolute;
  background-color: rgb(50, 50, 50);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 25.84%;
  margin-top: 12.5%;
  margin-left: -20px;
  z-index: 1;
`;

export const ViewChildFilter = styled.button`
  display: flex;
  flex: 1;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(32, 32, 32);
  padding: 0px 20px 0px 20px;
  border: none;
  &:hover {
    background-color: rgb(50, 50, 50);
    ${DropDownContentFilter} {
      display: block;
    }
  }
`;

export const ViewShowFilter = styled.div`
  display: flex;
  align-items: center;
`;

export const ViewStt = styled.div`
  display: flex;
  width: 25px;
  height: 25px;
  border-radius: 13px;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0);
  margin-right: 10px;
`;

export const TextFilter = styled.p`
  font-size: 13px;
  color: white;
  font-weight: bold;
`;

export const ButtonSearch = styled.button`
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: rgb(47, 116, 246, 0.9);
  padding: 0px 20px 0px 20px;
  border: none;
  &:hover {
    background-color: rgb(47, 116, 246);
    cursor: pointer;
  }
`;

export const TextSearch = styled.p`
  font-size: 15px;
  color: white;
  font-weight: bold;
`;

export const ContainerSlide = styled.div`
  margin-top: 20px;
  padding: 0px 0px 50px 0px;
  display: flex;
  justify-content: space-between;
`;

export const ViewText = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  padding: 30px 0px 0px 20px;
`;

export const ViewImage = styled.div`
  height: 550px;
  width: 73%;
`;

export const ImageSlide = styled.div`
  height: 550px;
  width: 100%;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-position: center;
`;

export const DropDownOptionFilter = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: gray;
  }
`;

export const TextSale = styled.p`
  color: rgb(47, 116, 246);
  font-size: 3.1vw;
  font-weight: bold;
  margin: 0;
`;

export const ButtonBrowser = styled.button`
  display: flex;
  height: 45px;
  width: 60%;
  ${"" /* min-width: 100px; */}
  align-items: center;
  justify-content: center;
  background-color: rgb(47, 116, 246, 0.9);
  border: none;
  &:hover {
    background-color: rgb(47, 116, 246);
    cursor: pointer;
  }
`;

export const ButtonLearnMore = styled.button`
  background: none;
  border: 1px solid rgb(50, 50, 50);
  color: white;
  padding: 10px 20px 10px 20px;
  &:hover {
    background-color: rgb(30, 30, 30);
    cursor: pointer;
  }
  font-size: 14px;
`;

export const ViewPopularCategories = styled.div`
  background-color: rgb(237, 237, 237);
  padding: 250px 8% 20px 8%;
  display: flex;
`;

export const ListPopular = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: scroll;
  overflow-y: hidden;
  max-height: 400px;
  margin-bottom: -200px;
`;

export const ItemList = styled.li`
  margin-right: 30px;
`;

export const ViewItemPopular = styled.button`
  width: 300px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  display: flex;
  padding: 0;
  flex-direction: column;
  padding-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const ViewSaleOff = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px 0px 0px;
  width: 95%;
`;

export const TextSaleOff = styled.p`
  color: white;
  padding: 5px 13px 5px 13px;
  background-color: rgb(47, 116, 246);
  font-size: 15px;
  font-weight: 600;
`;

export const Button = styled.button`
  border: none;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

export const ImageSaleOff = styled.img`
  width: 150px;
  height: 150px;
  align-self: center;
`;

export const TextBrowser = styled.p`
  font-size: 0.8vw;
  color: white;
  font-weight: bold;
`;

export const ViewNew = styled.p`
  padding: 5px 7px 5px 7px;
  border: 1px solid rgb(47, 116, 246);
  color: rgb(47, 116, 246);
  font-size: 11px;
  font-weight: 600;
  margin: 10px 0px 0px 20px;
`;

export const NamePopular = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 10px 0px 0px 20px;
  text-align: left;
  width: 85%;
`;

export const Category = styled.p`
  font-size: 14px;
  margin: 5px 0px 0px 20px;
`;

export const PriceSaleOff = styled.p`
  font-size: 19px;
  font-weight: bold;
  color: rgb(47, 116, 246);
  margin: 15px 0px 0px 20px;
`;

export const Cost = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: rgb(187, 187, 187);
  margin-left: 10px;
  text-decoration: line-through;
  text-decoration-color: rgb(187, 187, 187);
  text-decoration-thickness: 2px;
  margin: 15px 0px 0px 10px;
`;

export const ViewRow = styled.div`
  display: flex;
  align-items: center;
`;

export const SubTitle = styled.p`
  font-size: 19px;
  line-height: 1.3;
  letter-spacing: 0.5px;
  word-spacing: 1px;
`;

export const Span = styled.span`
  font-size: 19px;
  color: rgb(47, 116, 246);
`;

export const ViewSubTitle = styled.div`
  width: 20%;
`;

export const ButtonLearnMorePopular = styled.button`
  background: none;
  border: 1px solid rgb(187, 187, 187);
  padding: 10px 20px 10px 20px;
  &:hover {
    background-color: rgb(183, 183, 183);
    cursor: pointer;
  }
  font-size: 14px;
  margin-top: 10px;
`;

export const ListPopularCategories = styled.ul`
  display: flex;
  list-style: none;
  flex: 1;
  flex-direction: column;
`;

export const ItemListPopularCategories = styled.li`
  margin-bottom: 30px;
`;

export const ViewItemPopularCategories = styled.div`
  background-image: ${(props) =>
    props?.imgUrl ? `url(${props?.imgUrl})` : ""};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 10px;
  height: 210px;
  flex: 1;
  background-size: cover;
  margin: 0px 0px 0px 10vw;
  background-position: center;
`;

export const ViewTitle = styled.div`
  display: flex;
  padding: 0px 0px 20px 0px;
`;

export const TextId = styled.p`
  font-size: 17px;
  color: rgb(183, 183, 183);
  margin: 10px 30px 0px 4vw;
  font-weight: 600;
`;

export const ButtonArrow = styled.button`
  padding: 20px 25px 20px 25px;
  background-color: rgb(47, 116, 246, 0.9);
  &:hover {
    background-color: rgb(47, 116, 246);
    cursor: pointer;
  }
  border: none;
  margin-right: 30px;
`;

export const ViewContainerPopularCategories = styled.div`
  background-color: rgb(237, 237, 237);
  padding: 30px 8% 100px 8%;
`;

export const ViewListNewProduct = styled.div`
  background-color: rgb(237, 237, 237);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLearnMoreNewProduct = styled.button`
  background: none;
  border: 1px solid rgb(187, 187, 187);
  &:hover {
    background-color: rgb(183, 183, 183);
    cursor: pointer;
  }
  font-size: 14px;
  padding: 10px 20px 10px 20px;
`;

export const ViewNewProduct = styled.div`
  background-color: rgba(0, 0, 0);
  padding: 200px 8% 50px 8%;
`;

export const JoinBrand = styled.p`
  font-size: 15px;
  color: rgb(183, 183, 183);
  font-weight: bold;
  font-family: sans-serif;
`;

export const AuthText = styled.p`
  font-size: 3.5vw;
  color: white;
  z-index: 999;
  width: 50vw;
  margin: 20px 0px 0px 0px;
  font-weight: 300;
`;

export const SpanAuthText = styled.span`
  font-size: 3.5vw;
  color: white;
  z-index: 999;
  width: 50vw;
  margin: 0;
  font-weight: 600;
`;

export const ButtonSignUp = styled.button`
  padding: 1vw 3vw 1vw 3vw;
  background-color: rgb(47, 116, 246, 0.9);
  &:hover {
    background-color: rgb(47, 116, 246);
    cursor: pointer;
  }
  color: white;
  font-size: 1vw;
  border: none;
  margin-right: 5px;
  border: none;
`;

export const ButtonSignIn = styled.button`
  padding: 1vw 3vw 1vw 3vw;
  background: none;
  color: white;
  font-size: 1vw;
  border: none;
  border: 1px solid rgb(50, 50, 50);
  &:hover {
    background-color: rgb(50, 50, 50);
    cursor: pointer;
  }
`;

export const ViewTipTrick = styled.div`
  background-color: rgb(237, 237, 237);
  padding: 250px 8% 20px 8%;
`;

export const ListTipsTrick = styled.ul`
  display: flex;
  list-style: none;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0;
  justify-content: space-between;
`;

export const ViewItemTipsTrick = styled.button`
  width: 26vw;
  background-color: white;
  border: none;
  display: flex;
  padding: 0;
  flex-direction: column;
  padding-bottom: 10px;
  background: none;
  &:hover {
    cursor: pointer;
  }
`;

export const ImageTipsTrick = styled.div`
  display: flex;
  background-image: ${(props) =>
    props?.imgUrl ? `url(${props?.imgUrl})` : ""};
  width: 100%;
  height: 300px;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
`;

export const NameTipsTrick = styled.p`
  font-size: 17px;
  font-weight: bold;
  margin: 30px 0px 0px 0px;
  text-align: left;
  width: 85%;
  line-height: 1.3;
  letter-spacing: 0.5px;
  word-spacing: 1.3px;
`;

export const ContentTipsTrick = styled.p`
  font-size: 14px;
  margin: 10px 0px 0px 0px;
  text-align: left;
  line-height: 1.5;
  letter-spacing: 0.5px;
  word-spacing: 2px;
`;

export const ViewPartner = styled.div`
  background-color: white;
  padding: 60px 15% 60px 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ImageLogoPartner = styled.img`
  width: 70px;
  height: 70px;
  align-self: center;
`;

export const ViewPrivacyPolicy = styled.div`
  background-color: black;
  padding: 40px 8% 40px 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextNewsletter = styled.p`
  font-size: 2.5vw;
  color: white;
`;

export const TextSubTitle = styled.p`
  width: 17vw;
  color: white;
  font-size: 1vw;
`;

export const InputEmail = styled.input`
  width: 20vw;
  color: white;
  font-size: 1vw;
  background-color: rgb(50, 50, 50);
  border: none;
  padding: 15px 15px 15px 15px;
  &:focus {
    outline: none;
  }
`;

export const CheckBox = styled.button`
  display: flex;
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-color: rgb(47, 116, 246);
  border-radius: 3px;
  background: none;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const CheckBoxChildren = styled.div`
  width: 15px;
  height: 6px;
  background-color: rgb(47, 116, 246);
`;

export const TextPrivacy = styled.p`
  width: 10vw;
  color: white;
  font-size: 0.9vw;
  margin: -3px 0px 0px 13px;
  font-weight: normal;
`;

export const ContainerPrivacy = styled.div`
  display: flex;
`;

export const ViewBelow = styled.div`
  background-color: rgb(237, 237, 237);
  padding: 40px 8% 40px 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 300px;
`;

export const ViewChildBelow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const TextBrand = styled.p`
  width: 10vw;
  color: black;
  font-size: 2vw;
  font-weight: bold;
  font-style: italic;
  margin: 25px 0px 20px 0px;
`;

export const ContentBelow = styled.p`
  width: 10vw;
  font-size: 0.9vw;
  font-weight: 450;
  margin: 0px 0px 5px 0px;
`;

export const ButtonSocial = styled.button`
  border: none;
  background: none;
  padding: 0px 0px 0px 0px;
  &:hover {
    cursor: pointer;
  }
`;

export const TextTitleBelow = styled.p`
  color: black;
  font-size: 1vw;
  font-weight: bold;
  margin: 30px 0px 20px 0px;
`;

export const ContentLinkBelow = styled.a`
  width: 10vw;
  font-size: 0.9vw;
  font-weight: 400;
  margin: 0px 0px 5px 0px;
  text-decoration: none;
  color: black;
  &:hover {
    color: rgb(47, 116, 246);
  }
`;

export const ContentTextBelow = styled.p`
  font-size: 0.9vw;
  font-weight: 400;
  margin: 0px 0px 5px 0px;
`;

export const ImageAlliance = styled.img`
  width: 10vw;
  height: 2vw;
  margin-top: 15px;
`;
