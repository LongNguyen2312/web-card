import React, { useRef, useState } from "react";
import {
  Container,
  Header,
  TextMenu,
  ImageLogo,
  ViewMenu,
  ButtonMenu,
  Avatar,
  ButtonAvatar,
  ViewPopular,
  ViewSearch,
  TextTitle,
  TextPlaceHolder,
  DropDown,
  DropDownBtn,
  DropDownContent,
  DropDownOption,
  ViewFilter,
  ViewChildFilter,
  ViewShowFilter,
  ViewStt,
  TextFilter,
  ButtonSearch,
  TextSearch,
  DropDownContentFilter,
  ContainerSlide,
  ImageSlide,
  DropDownOptionFilter,
  TextSale,
  ViewText,
  ViewImage,
  ButtonBrowser,
  ButtonLearnMore,
  ViewTipTricks,
  ListPopular,
  ItemList,
  ViewItemPopular,
  ViewSaleOff,
  TextSaleOff,
  Button,
  ImageSaleOff,
  TextBrowser,
  ViewNew,
  NamePopular,
  Category,
  PriceSaleOff,
  Cost,
  ViewRow,
} from "./styled";
import logo from "./logo.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://autopro8.mediacdn.vn/2020/6/4/bentley-mulsanne-6-75-edition-by-mulliner-15912091080101685794314.jpg",
    caption: "Slide 1",
  },
  {
    url: "https://assets.newatlas.com/dims4/default/c8f9910/2147483647/strip/true/crop/1920x1080+0+0/resize/1920x1080!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fintel-engine-2.png",
    caption: "Slide 2",
  },
  {
    url: "https://www.ge.com/digital/sites/default/files/2018-08/header-digital-twin-illustration-3200x1404.jpg",
    caption: "Slide 3",
  },
];

const mockDataPopular = [
  {
    id: 1,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: true,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 2,
    like: false,
    discount: 20,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: false,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 3,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: false,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 4,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: true,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 5,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: false,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 6,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: true,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 7,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: false,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 8,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: false,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 9,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: false,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 10,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: false,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
  {
    id: 11,
    like: false,
    discount: 10,
    imageUrl: "https://genk.mediacdn.vn/2014/1-7685-1400680963690.jpg",
    name: "5.4L Supercharged V8",
    isNew: false,
    category: "Engine",
    price: "500.000$",
    priceDiscount: "399.000$",
  },
];

function App() {
  const containerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const renderButtonMenu = (title, onClick) => (
    <ButtonMenu onClick={onClick}>
      <TextMenu>{title}</TextMenu>
    </ButtonMenu>
  );

  const renderMoreMenu = () => (
    <DropDown>
      <DropDownBtn>
        More&nbsp;
        <AiOutlineCaretDown color="white" size={17} />
      </DropDownBtn>
      <DropDownContent>
        <DropDownOption href="#">Mazda</DropDownOption>
        <DropDownOption href="#">Toyota</DropDownOption>
        <DropDownOption href="#">BMV</DropDownOption>
        <DropDownOption href="#">Lexus</DropDownOption>
        <DropDownOption href="#">Ford</DropDownOption>
      </DropDownContent>
    </DropDown>
  );

  const renderRightHeader = () => (
    <ViewMenu>
      <ButtonMenu>
        <AiOutlineSearch color="white" size={23} />
      </ButtonMenu>
      <ButtonMenu>
        <AiOutlineShoppingCart color="white" size={23} />
      </ButtonMenu>
      <ButtonMenu>
        <AiOutlineHeart color="white" size={23} />
      </ButtonMenu>
      <ButtonAvatar>
        <Avatar src="https://duan24h.net/wp-content/uploads/2023/06/andree-2.webp" />
      </ButtonAvatar>
    </ViewMenu>
  );

  const renderHeader = () => (
    <Header>
      <ImageLogo src={logo} />
      <ViewMenu>
        {renderButtonMenu("Car parts")}
        {renderButtonMenu("Tires")}
        {renderButtonMenu("Motor oils")}
        {renderButtonMenu("Filters")}
        {renderButtonMenu("Accessories")}
        {renderMoreMenu()}
      </ViewMenu>
      {renderRightHeader()}
    </Header>
  );

  const renderFilter = (number, title, style) => (
    <ViewChildFilter style={style}>
      <ViewShowFilter>
        <ViewStt>
          <TextFilter>{number}</TextFilter>
        </ViewStt>
        <TextFilter>{title}</TextFilter>
      </ViewShowFilter>
      <BiChevronDown color="rgb(47, 116, 246)" size={25} />
      <DropDownContentFilter>
        <DropDownOptionFilter href="#">Filter 1</DropDownOptionFilter>
        <DropDownOptionFilter href="#">Filter 2</DropDownOptionFilter>
        <DropDownOptionFilter href="#">Filter 3</DropDownOptionFilter>
        <DropDownOptionFilter href="#">Filter 4</DropDownOptionFilter>
        <DropDownOptionFilter href="#">Filter 5</DropDownOptionFilter>
      </DropDownContentFilter>
    </ViewChildFilter>
  );

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Tăng tốc độ cuộn
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const renderPopular = () => (
    <ViewPopular>
      <ViewSearch>
        <TextTitle>Select your car</TextTitle>
        <TextPlaceHolder>Search part by selection your car</TextPlaceHolder>
      </ViewSearch>
      <ViewFilter>
        {renderFilter(1, "Select make")}
        {renderFilter(2, "Select model", { marginLeft: 2, marginRight: 2 })}
        {renderFilter(3, "Select engine")}
        <ButtonSearch>
          <TextSearch>Search now</TextSearch>
        </ButtonSearch>
      </ViewFilter>
      <ContainerSlide>
        <ViewText>
          <TextSale>This weekend</TextSale>
          <TextSale style={{ color: "white", marginBottom: 40 }}>
            all engine oils
            <br />
            -15% off
          </TextSale>
          <ButtonBrowser>
            <TextBrowser>BROWSE PRODUCTS</TextBrowser>
          </ButtonBrowser>
        </ViewText>
        <ViewImage>
          <Slide arrows={false}>
            {slideImages.map((slideImage, index) => (
              <ImageSlide key={index} imageUrl={slideImage.url} />
            ))}
          </Slide>
        </ViewImage>
      </ContainerSlide>
      <ViewSearch>
        <TextTitle style={{ fontSize: 35 }}>Popular</TextTitle>
        <ButtonLearnMore>Learn more</ButtonLearnMore>
      </ViewSearch>
      <ListPopular
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {mockDataPopular?.map((e) => (
          <ItemList key={e?.id}>
            <ViewItemPopular>
              <ViewSaleOff>
                <TextSaleOff>{e?.discount}%</TextSaleOff>
                <Button>
                  <AiOutlineHeart color="gray" size={25} />
                </Button>
              </ViewSaleOff>
              <ImageSaleOff src="https://thuviendohoa.vn/upload/images/items/hinh-anh-vanh-banh-xe-o-to-xe-hoi-png-365.webp" />
              {e?.isNew && <ViewNew>NEW</ViewNew>}
              <NamePopular style={{ marginTop: e?.isNew ? 10 : 44 }}>
                {e?.name}
              </NamePopular>
              <Category>{e?.category}</Category>
              <ViewSaleOff>
                <ViewRow>
                  <PriceSaleOff>{e?.priceDiscount}</PriceSaleOff>
                  <Cost>{e?.price}</Cost>
                </ViewRow>
                <Button style={{ marginTop: 13 }}>
                  <AiOutlineShoppingCart color="gray" size={25} />
                </Button>
              </ViewSaleOff>
            </ViewItemPopular>
          </ItemList>
        ))}
      </ListPopular>
    </ViewPopular>
  );

  const renderTipTricks = () => <ViewTipTricks></ViewTipTricks>;

  return (
    <Container>
      {renderHeader()}
      {renderPopular()}
      {renderTipTricks()}
    </Container>
  );
}

export default App;
