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
  font-weight: bold;
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
  }
`;

export const ButtonLearnMore = styled.button`
  background: none;
  border: 1px solid rgb(50, 50, 50);
  color: white;
  padding: 10px 20px 10px 20px;
  &:hover {
    background-color: rgb(30, 30, 30);
  }
  font-size: 14px;
`;

export const ViewTipTricks = styled.div`
  background-color: #ddd;
  padding: 10px 8% 20px 8%;
  height: 500px;
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
