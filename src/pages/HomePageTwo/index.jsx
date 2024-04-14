import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { RatingBar, Text, Heading, Button, Img, Input } from "../../components";
import HomePageTwoCategorylist from "../../components/HomePageTwoCategorylist";
import HomePageTwoSubnavmenu from "../../components/HomePageTwoSubnavmenu";
import AdComponent from "./AdComponent";
import MonitorAdComponent from './MonitorAdComponent';
import FocusAdComponent from './FocusAdComponent';
// import PopupAd from './Popupad';

export default function HomePageTwoPage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  ///popup
  // const [showPopup, setShowPopup] = useState(false);

  // ///popup
  // useEffect(() => {
  //   // Add logic to show the popup after 5 seconds
  //   const timer = setTimeout(() => {
  //     // Set state to show the popup
  //     setShowPopup(true);
  //   }, 5000);

  //   // Clear the timer when the component unmounts
  //   return () => clearTimeout(timer);
  // }, []);

  // Function to randomly choose which ad to display
  const getRandomAd = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return <AdComponent />;
    } else if (randomNumber < 0.66) {
      return <MonitorAdComponent />;
    } else {
      return <FocusAdComponent />;
    }
  };

  ///popup
  // const closePopup = () => {
  //   setShowPopup(false);
  // };
  
  return (
    <>
      <Helmet>
        <title>Website Redesign</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="self-end">
          <div>
            <header className="relative z-[2] flex items-center justify-center gap-1 md:flex-col">
              <div className="relative h-[240px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch md:p-5">
                <div className="flex w-full items-end justify-between gap-5 bg-gray-900 p-[29px] md:flex-col sm:p-5">
                  <HomePageTwoSubnavmenu className="ml-[51px] flex flex-wrap items-center gap-14 md:ml-0 md:gap-5" />
                  <Input
                    name="search"
                    placeholder={`Find add-ons`}
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e)}
                    prefix={
                      <div className="flex h-[22px] w-[22px] items-center justify-center">
                        <Img src="images/img_search.svg" alt="search" className="h-[22px] w-[22px] cursor-pointer" />
                      </div>
                    }
                    suffix={
                      searchBarValue?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue("")} height={22} width={22} />
                      ) : null
                    }
                    className="mt-32 flex h-[54px] w-[29%] items-center justify-center gap-[27px] rounded-[27px] bg-blue_gray-100 pl-[21px] pr-[35px] text-2xl text-gray-800_02 md:w-full md:p-5 sm:px-5"
                  />
                </div>
                <div className="absolute left-[0.00px] top-[0.00px] m-auto flex w-[64%] items-start md:relative md:flex-col">
                  <Img
                    src="images/img_add_ons_logo.png"
                    alt="addonslogo_one"
                    className="relative z-[3] h-[160px] w-[39%] object-cover md:w-full"
                  />
                  <Img
                    src="images/img_main_nav.png"
                    alt="mainnav_one"
                    className="relative ml-[-17px] h-[111px] w-[61%] object-cover md:ml-0 md:w-full"
                  />
                </div>
                <div className="absolute right-[0.00px] top-[0.00px] m-auto flex w-[26%] items-end justify-end gap-[30px] bg-gray-900 p-[5px]">
                <a href="https://www.mozilla.org/en-US/firefox/download/thanks/?s=direct&utm_campaign=amo-fx-cta&utm_content=banner-download-button&utm_medium=referral&utm_source=addons.mozilla.org" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-[61px] flex h-[50px] min-w-[238px] items-center justify-center rounded-[25px] bg-gradient2 px-[25px] text-center text-[22px] font-bold text-white-A700 sm:px-5">
                    Download Firefox
                  </Button>
                  </a>
                  <a href="https://accounts.firefox.com/oauth/?client_id=a4907de5fa9d78fc&scope=profile%2Bopenid&state=b53183431c851e7cec99340a4abe5c8c20fe3775ef5b0e37176b7724754811c6%3AL2VuLVVTL2ZpcmVmb3gv&access_type=offline" className="mb-[11px] mr-11">
                    <Text size="s" as="p">
                      Log In
                    </Text>
                  </a>
                </div>
              </div>
              <div/>
            </header>
            <div className="relative mt-[-46px] bg-blue_gray-50 p-[31px] sm:p-5">
              <div className="mb-[253px] mt-10 flex flex-col items-center gap-[42px]">
                <div className="relative h-[460px] self-stretch rounded-[32px] bg-gradient1">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[459px] w-full max-w-[1593px] md:p-5">
                    <Heading size="s" as="h1" className="absolute left-[0.00px] top-[12%] m-auto !text-white-A700">
                      Extensions
                    </Heading>
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-center md:relative md:flex-col">
                    <Text size="lg" as="p" className="mt-[156px] w-[51%] leading-[138.2%] md:w-full" style={{textAlign: 'left', marginLeft: '-1px'}}>

                        <span className="text-white-A700">
                            Explore powerful tools and features to customize <br/>
                            Firefox and make the browser&nbsp;
                        </span>
                        <span className="font-bold italic text-white-A700">all your own.</span>
                    </Text>
                      <Img
                        src="images/img_hero_image_final.png"
                        alt="heroimage_one"
                        className="relative ml-70 h-[459px] w-[49%] object-cover md:w-full"
                      />
                    </div>
                    <div className="absolute bottom-[15%] left-[1.00px] m-auto flex flex-col items-start gap-[19px]">
                      <Text size="lg" as="p">
                        In order to use these add-ons, you’ll need to{" "}
                      </Text>
                      <a href="https://www.mozilla.org/en-US/firefox/download/thanks/?s=direct&utm_campaign=amo-fx-cta&utm_content=banner-download-button&utm_medium=referral&utm_source=addons.mozilla.org" target="_blank" rel="noopener noreferrer">
                      <Button className="ml-1.5 flex h-[59px] min-w-[249px] items-center justify-center rounded-[29px] bg-gradient2 px-[30px] text-center text-[22px] font-bold text-white-A700 md:ml-0 sm:px-5">
                        Download Firefox
                      </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center self-stretch rounded-[32px] bg-white-A700">
                  <div className="mx-auto mt-[68px] flex w-full max-w-[1715px] flex-col items-start gap-11 md:p-5">
                    <Heading as="h2" className="ml-2.5 md:ml-0">
                      Categories
                    </Heading>
                    <HomePageTwoCategorylist className="flex flex-col items-center gap-4 self-stretch px-[9px] pb-[9px]" />
                  </div>
                </div>
                <div className="mx-auto flex w-full max-w-[1695px] flex-wrap items-start justify-between gap-5 md:p-5">
                  <Heading as="h3" className="mb-0.5">
                    Recommended Extensions
                  </Heading>
                  <a href="https://addons.mozilla.org/en-US/firefox/search/?promoted=recommended&sort=random&type=extension" target="_blank" rel="noopener noreferrer">
                  <Button as="p" className="!text-blue-800 underline" style={{ fontSize: '30px' }}>
                    See all recommended extensions &gt;
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-[1] mt-[-247px] flex flex-col items-center">
            <div className="relative z-[4] mx-auto flex w-full max-w-[1714px] gap-[38px] md:flex-col md:p-5">
              <div className="flex w-full flex-col items-start gap-[109px] bg-gradient md:gap-[81px] sm:gap-[54px]">
                <Text size="xl" as="p" className="ml-[197px] mt-[105px] text-center !text-black-900 md:ml-0">
                  TEST
                </Text>
                <div className="self-stretch bg-gray-800 p-[11px]">
                  <div className="mb-[3px] mt-0.5 flex items-center gap-4 sm:flex-col">
                  <Img
                    src="images/test3.png"
                    alt="Image Description"
                    className="h-[60px] w-[60px] rounded-[15px]"
                  />
                    <div className="flex flex-1 flex-col items-start gap-[7px] sm:self-stretch">
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/simple-translate/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=featured" target="_blank" rel="noopener noreferrer">
                    <Button style={{ fontSize: '24px', color: 'white' }}>Simple Translate</Button>
                    </a>
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <Text size="xs" as="p" className="self-start">
                          314,000+ users
                        </Text>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#d9d9d9"
                          activeColor="#d9d9d9"
                          size={22}
                          className="flex justify-between"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[109px] bg-gradient md:gap-[81px] sm:gap-[54px]">
                <Text size="xl" as="p" className="ml-[197px] mt-[105px] text-center !text-black-900 md:ml-0">
                 TEST
                </Text>
                <div className="self-stretch bg-gray-800 p-[11px]">
                  <div className="mb-[3px] mt-0.5 flex items-center gap-4 sm:flex-col">
                  <Img
                    src="images/test2.png"
                    alt="Image Description"
                    className="h-[60px] w-[60px] rounded-[15px]"
                  />
                    <div className="flex flex-1 flex-col items-start gap-[7px] sm:self-stretch">
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=featured" target="_blank" rel="noopener noreferrer">
                    <Button style={{ fontSize: '24px', color: 'white' }}>New Tab Override</Button>
                    </a>
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <Text size="xs" as="p" className="self-start">
                         64,000+ users
                        </Text>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#d9d9d9"
                          activeColor="#d9d9d9"
                          size={22}
                          className="flex justify-between"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[109px] bg-gradient md:gap-[81px] sm:gap-[54px]">
                <Text size="xl" as="p" className="ml-[197px] mt-[105px] text-center !text-black-900 md:ml-0">
                  TEST
                </Text>
                <div className="self-stretch bg-gray-800 p-[11px]">
                  <div className="mb-[3px] mt-0.5 flex items-center gap-4 sm:flex-col">
                  <Img
                    src="images/test1.png"
                    alt="Image Description"
                    className="h-[60px] w-[60px] rounded-[15px]"
                  />
                    <div className="flex flex-1 flex-col items-start gap-[7px] sm:self-stretch">
                    <a href="https://addons.mozilla.org/en-US/firefox/addon/single-file/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=featured" target="_blank" rel="noopener noreferrer">
                    <Button style={{ fontSize: '24px', color: 'white' }}>SingleFile</Button></a>
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <Text size="xs" as="p" className="self-start">
                          57,000+ users
                        </Text>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#d9d9d9"
                          activeColor="#d9d9d9"
                          size={22}
                          className="flex justify-between"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[-115px] h-[714px] self-stretch bg-blue_gray-50" />
          </div>
        </div>
        <div>
        {getRandomAd()} {/* Render the randomly chosen ad */}
        </div>
        {/* pop up */}
        {/* <div>
        {showPopup && <PopupAd onClose={closePopup} />}
          </div> */}
      </div>
    </>
  );
}
