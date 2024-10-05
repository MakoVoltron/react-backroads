import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks = [
  {
    id: "twitter",
    href: "https://www.twitter.com",
    fa_class: "fab fa-twitter",
  },
  {
    id: "squarespace",
    href: "https://www.squarespace.com",
    fa_class: "fab fa-squarespace",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com",
    fa_class: "fab fa-facebook",
  },
];

export const services = [
  {
    id: 1,
    title: "saving money",
    icon: "fas fa-wallet fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  dAsperiores, officia",
  },
  {
    id: 2,
    title: "endless hiking",
    icon: "fas fa-tree fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  dAsperiores, officia",
  },
  {
    id: 3,
    title: "amazing comfort",
    icon: "fas fa-socks fa-fw",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.  dAsperiores, officia",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    length: "6",
    price: "2100",
    img: tour1,
    date: "august 26th, 2020",
  },
  {
    id: 2,
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    length: "11",
    price: "1400",
    img: tour2,
    date: "october 1th, 2020",
  },
  {
    id: 3,
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    length: "8",
    price: "5000",
    img: tour3,
    date: "september 15th, 2020",
  },
  {
    id: 4,
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    length: "20",
    price: "3300",
    img: tour4,
    date: "december 5th, 2019",
  },
];

// <article fa_className="tour-card">
//   <div fa_className="tour-img-container">
//     <img src="./images/tour-4.jpeg" fa_className="tour-img" alt="" />
//     <p fa_className="tour-date">december 5th, 2019</p>
//   </div>
//   <div fa_className="tour-info">
//     <h4>kenya highlights</h4>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
//       vitae tempore voluptatum maxime reprehenderit eum quod
//       exercitationem fugit, qui corporis.
//     </p>
//     <div fa_className="tour-footer">
//       <p>
//         <span>
//           <i fa_className="fas fa-map"></i>
//         </span>{" "}
//         kenya
//       </p>
//       <p>20 days</p>
//       <p>from $3300</p>
//     </div>
//   </div>
// </article>
