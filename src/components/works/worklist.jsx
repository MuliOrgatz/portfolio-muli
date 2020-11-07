import ramezPic from "../../assets/img/works/ramez final.jpg";
import milionerPic from "../../assets/img/works/milioner.jpg";
import parkingPic from "../../assets/img/works/parking final.jpg";
import barcodePic from "../../assets/img/works/barcode.JPG";
import moviePic from "../../assets/img/works/movie finish.jpg";
import facebookPic from "../../assets/img/works/facebook1.JPG";
import facePic from "../../assets/img/works/Face finish.JPG";
import autoPic from "../../assets/img/works/auto final.jpg";
import clothPic from "../../assets/img/works/coloting final.jpg";

export const workList = [
  {
    title: "Park smart",
    subtitle: "Android app",
    imageUrl: parkingPic,
    type: "android",
    haveWebsite: false,
  },
  {
    title: "Clothing store",
    subtitle: "Responsive E-commerce web",
    imageUrl: clothPic,
    type: "react",
    haveWebsite: true,
    webUrl: "https://store-db-1ed77.web.app/",
  },
  {
    title: "Movie list",
    subtitle: "Web appliction",
    imageUrl: moviePic,
    type: "react",
    haveWebsite: true,
    webUrl: "https://movie-list-by-muli.herokuapp.com/",
  },
  {
    title: "BarCode",
    subtitle: "Windows app for bar",
    imageUrl: barcodePic,
    type: "windows",
    haveWebsite: false,
    styleMid: { top: "-193px" },
  },
  {
    title: "How want to be millionaire",
    subtitle: "Android app of this game",
    imageUrl: milionerPic,
    type: "android",
    styleBig: { top: "-220px" },
    styleMidP: { top: "-170px" },
    styleMid: { top: "" },
    haveWebsite: false,
  },

  {
    title: "Ramez - Service and trade",
    subtitle: "Landing page for business",
    imageUrl: ramezPic,
    type: "react",
    styleBig: { top: "-204px" },
    styleMidP: { top: "-170px" },
    styleMid: { top: "-195px" },
    haveWebsite: true,
    webUrl: "https://remezss.web.app/",
  },
  {
    title: "Face recognition",
    subtitle: "Upload image and find face",
    imageUrl: facePic,
    type: "angular",
    styleBig: { top: "-48px" },
    styleMidP: { top: "-40px" },
    styleMid: { top: "-48px" },
    haveWebsite: true,
    webUrl: "https://face-recognition-by-muli.herokuapp.com/",
  },
  {
    title: "AutoComplete search",
    subtitle: "Search an employee",
    imageUrl: autoPic,
    type: "angular",
    styleBig: {top: "-270px" },
    styleMidP: {top: "-205px" },
    styleMid: { top: "-193px" },
    haveWebsite: false,
  },
  {
    title: "FaceBook app",
    subtitle: "Expansion to facebook",
    imageUrl: facebookPic,
    type: "windows",
    styleBig: {top: "-205px" },
    styleMidP: {top: "-170px" },
    styleMid: {left:"360px", top: "-193px" },
    haveWebsite: false,
  },
];
