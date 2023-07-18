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
  ViewPopularCategories,
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
  SubTitle,
  Span,
  ViewSubTitle,
  ButtonLearnMorePopular,
  ListPopularCategories,
  ItemListPopularCategories,
  ViewItemPopularCategories,
  ViewTitle,
  TextId,
  ButtonArrow,
  ViewContainerPopularCategories,
  ViewListNewProduct,
  ButtonLearnMoreNewProduct,
  ViewNewProduct,
  JoinBrand,
  AuthText,
  SpanAuthText,
  ButtonSignUp,
  ButtonSignIn,
  ViewTipTrick,
  ListTipsTrick,
  ViewItemTipsTrick,
  ImageTipsTrick,
  NameTipsTrick,
  ContentTipsTrick,
} from "./styled";
import logo from "./logo.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineCaretDown,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import {
  slideImages,
  slideAuth,
  mockDataPopular,
  mockDataCategory,
  mockDataTipsTrick,
} from "./mockData";

function App() {
  const containerRef = useRef(null);
  const newProductRef = useRef(null);
  const bestSellersRef = useRef(null);
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

  const handleMouseDown = (e, ref) => {
    setIsDown(true);
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e, ref) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1; // Tăng tốc độ cuộn
    ref.current.scrollLeft = scrollLeft - walk;
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
        onMouseDown={(e) => handleMouseDown(e, containerRef)}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={(e) => handleMouseMove(e, containerRef)}
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
              <ImageSaleOff src={e?.imageUrl} />
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

  const renderListNewProduct = () => (
    <ViewContainerPopularCategories>
      <ViewListNewProduct>
        <TextTitle style={{ fontSize: 35, color: "black" }}>
          New products
        </TextTitle>
        <ButtonLearnMoreNewProduct>Learn more</ButtonLearnMoreNewProduct>
      </ViewListNewProduct>
      <ListPopular
        ref={newProductRef}
        onMouseDown={(e) => handleMouseDown(e, newProductRef)}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={(e) => handleMouseMove(e, newProductRef)}
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
              <ImageSaleOff src={e?.imageUrl} />
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
    </ViewContainerPopularCategories>
  );

  const renderPopularCategories = () => (
    <ViewPopularCategories>
      <ViewSubTitle>
        <TextTitle
          style={{
            fontSize: 35,
            color: "black",
            marginBottom: 10,
          }}
        >
          Popular
          <br />
          categories
        </TextTitle>
        <SubTitle>
          Now you can browse form <Span>150,000 products</Span> in an ease way.
          Choose your category and find what you are looking for.
        </SubTitle>
        <ButtonLearnMorePopular>Learn more</ButtonLearnMorePopular>
      </ViewSubTitle>
      <ListPopularCategories>
        {mockDataCategory.map((e) => (
          <ItemListPopularCategories key={e?.id}>
            <ViewItemPopularCategories imgUrl={e?.imgUrl}>
              <ViewTitle>
                <TextId>{e?.id}</TextId>
                <TextTitle
                  style={{ margin: 0, fontSize: "1.8vw", width: "10vw" }}
                >
                  {e?.title}
                </TextTitle>
              </ViewTitle>
              <ButtonArrow>
                <AiOutlineArrowRight color="white" size={25} />
              </ButtonArrow>
            </ViewItemPopularCategories>
          </ItemListPopularCategories>
        ))}
      </ListPopularCategories>
    </ViewPopularCategories>
  );

  const renderAuth = () => (
    <ViewNewProduct>
      <ContainerSlide>
        <ViewText>
          <JoinBrand>Join LongCar!</JoinBrand>
          <AuthText>
            Browse now from
            <br />
            <SpanAuthText>over 150 000 parts</SpanAuthText>
          </AuthText>
          <ViewRow style={{ marginTop: 50 }}>
            <ButtonSignUp>Sign up</ButtonSignUp>
            <ButtonSignIn>Sign in</ButtonSignIn>
          </ViewRow>
        </ViewText>
        <ViewImage>
          <Slide arrows={false}>
            {slideAuth.map((slideImage, index) => (
              <ImageSlide key={index} imageUrl={slideImage.url} />
            ))}
          </Slide>
        </ViewImage>
      </ContainerSlide>
      <ViewSearch style={{ marginTop: 20 }}>
        <TextTitle style={{ fontSize: 35 }}>Bestsellers</TextTitle>
        <ButtonLearnMore>Learn more</ButtonLearnMore>
      </ViewSearch>
      <ListPopular
        ref={bestSellersRef}
        onMouseDown={(e) => handleMouseDown(e, bestSellersRef)}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={(e) => handleMouseMove(e, bestSellersRef)}
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
              <ImageSaleOff src={e?.imageUrl} />
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
    </ViewNewProduct>
  );

  const renderTipTrick = () => (
    <ViewTipTrick>
      <ViewListNewProduct>
        <TextTitle style={{ fontSize: 35, color: "black" }}>
          Tips & tricks
        </TextTitle>
        <ButtonLearnMoreNewProduct>Learn more</ButtonLearnMoreNewProduct>
      </ViewListNewProduct>
      <ListTipsTrick>
        {mockDataTipsTrick?.map((e) => (
          <ItemList key={e?.id} style={{ marginRight: 0 }}>
            <ViewItemTipsTrick>
              <ImageTipsTrick imgUrl={e?.imageUrl}>
                <TextSaleOff style={{ marginTop: 30 }}>{e?.date}</TextSaleOff>
              </ImageTipsTrick>
              <NameTipsTrick>{e?.title}</NameTipsTrick>
              <ContentTipsTrick>{e?.content}</ContentTipsTrick>
            </ViewItemTipsTrick>
          </ItemList>
        ))}
      </ListTipsTrick>
    </ViewTipTrick>
  );

  return (
    <Container>
      {renderHeader()}
      {renderPopular()}
      {renderPopularCategories()}
      {renderListNewProduct()}
      {renderAuth()}
      {renderTipTrick()}
    </Container>
  );
}

export default App;
