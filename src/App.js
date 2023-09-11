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
  ViewPartner,
  ImageLogoPartner,
  ViewPrivacyPolicy,
  TextNewsletter,
  TextSubTitle,
  InputEmail,
  CheckBox,
  CheckBoxChildren,
  TextPrivacy,
  ContainerPrivacy,
  ViewBelow,
  TextBrand,
  ViewChildBelow,
  ContentBelow,
  ButtonSocial,
  TextTitleBelow,
  ContentLinkBelow,
  ContentTextBelow,
  ImageAlliance,
} from "./styled";
import logo from "./logo.png";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineCaretDown,
  AiOutlineArrowRight,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
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
  const [isCheckPrivacy, setIsCheckPrivacy] = useState(true);

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

  const renderPartner = () => (
    <ViewPartner>
      <ImageLogoPartner
        src={
          "https://hondagiaiphong.net/images/2020/Tintuc2020/58-logo-hang-xe/bmw.png"
        }
      />
      <ImageLogoPartner
        src={
          "https://uploads-ssl.webflow.com/5e816c9393b099b3300a0930/5eb524e58e32f52730d7a5c0_logo-cadillac.png"
        }
      />
      <ImageLogoPartner
        src={
          "https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-suzuki-inkythuatso-2-01-15-15-18-29.jpg"
        }
      />
      <ImageLogoPartner
        src={
          "https://inkythuatso.com/uploads/images/2021/10/logo-vinfast-inkythuatso-21-11-08-55.jpg"
        }
      />
      <ImageLogoPartner
        src={
          "https://marque-voiture.com/wp-content/uploads/2016/05/Chevrolet-Logo.png"
        }
      />
      <ImageLogoPartner
        src={
          "https://nhaxelimousine.com/wp-content/uploads/2021/11/logo-cac-hang-xe-o-to-5.jpg"
        }
      />
    </ViewPartner>
  );

  const renderPrivacyPolicy = () => (
    <ViewPrivacyPolicy>
      <TextNewsletter>Newsletter</TextNewsletter>
      <TextSubTitle>
        Receive information about the latest promotions and products.
      </TextSubTitle>
      <InputEmail placeholder="Your email address" />
      <ContainerPrivacy>
        <CheckBox onClick={() => setIsCheckPrivacy(!isCheckPrivacy)}>
          {isCheckPrivacy && <CheckBoxChildren />}
        </CheckBox>
        <TextPrivacy>
          I agree that i have read and consented to the given{" "}
          <a href="https://support.thinkific.com/hc/en-us/articles/360030355714-Sample-Privacy-Policy">
            <span style={{ textDecoration: "underline" }}>Privacy Policy.</span>
          </a>
        </TextPrivacy>
      </ContainerPrivacy>
      <ButtonSignUp style={{ fontSize: "1.1vw", fontWeight: "bold" }}>
        Join now
      </ButtonSignUp>
    </ViewPrivacyPolicy>
  );

  const renderBelow = () => (
    <ViewBelow>
      <ViewChildBelow>
        <TextBrand>Long Car</TextBrand>
        <ContentBelow>longnv.main@gmail.com</ContentBelow>
        <ContentBelow>+84984087956</ContentBelow>
        <ContentBelow>Mo-Fr: 9:00-21:00</ContentBelow>
        <ViewRow style={{ marginTop: 20 }}>
          <ButtonSocial>
            <BsFacebook color="rgb(47, 116, 246)" size={30} />
          </ButtonSocial>
          <ButtonSocial>
            <AiFillTwitterCircle
              color="rgb(47, 116, 246)"
              size={34}
              style={{ marginLeft: 5 }}
            />
          </ButtonSocial>
          <ButtonSocial>
            <AiFillInstagram
              color="rgb(47, 116, 246)"
              size={35}
              style={{ marginLeft: 3, marginBottom: -1 }}
            />
          </ButtonSocial>
        </ViewRow>
      </ViewChildBelow>
      <ViewChildBelow>
        <TextTitleBelow>INFOMATIONS</TextTitleBelow>
        <ContentLinkBelow href="">About</ContentLinkBelow>
        <ContentLinkBelow href="">Terms of use</ContentLinkBelow>
        <ContentLinkBelow href="">Privacy Policy</ContentLinkBelow>
        <ContentLinkBelow href="">Cookies</ContentLinkBelow>
        <ContentLinkBelow href="">Reviews</ContentLinkBelow>
        <ContentLinkBelow href="">Media</ContentLinkBelow>
        <ContentLinkBelow href="">Contact</ContentLinkBelow>
      </ViewChildBelow>
      <ViewChildBelow>
        <TextTitleBelow>CUSTOMER SERVICE</TextTitleBelow>
        <ContentLinkBelow href="">customer dashboard</ContentLinkBelow>
        <ContentLinkBelow href="">Check my delivery</ContentLinkBelow>
        <ContentLinkBelow href="">Payment methods</ContentLinkBelow>
        <ContentLinkBelow href="">Delivery details</ContentLinkBelow>
        <ContentLinkBelow href="">Complaints</ContentLinkBelow>
      </ViewChildBelow>
      <ViewChildBelow>
        <TextTitleBelow>DATA PROTECTION</TextTitleBelow>
        <ContentTextBelow>
          The data provided here, especially the entire database, cannot be
          copied. It is forbidden to copy all or part of the data or the entire
          database, disseminate or pass on to third parties without the prior
          consent of TecDoc. Breaking the rules is a violation copyright and
          will be legally prosecuted
        </ContentTextBelow>
        <ImageAlliance src="https://global-uploads.webflow.com/62c8aef41d869e19c9fb8f84/62f581e9915f95c99a940b1d_ncw-tech.png" />
      </ViewChildBelow>
    </ViewBelow>
  );

  return (
    <Container>
      {renderHeader()}
      {renderPopular()}
      {renderPopularCategories()}
      {renderListNewProduct()}
      {renderAuth()}
      {renderTipTrick()}
      {renderPartner()}
      {renderPrivacyPolicy()}
      {renderBelow()}
    </Container>
  );
}

export default App;
