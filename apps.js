import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

import { footer } from "./footer.js";
document.getElementById("footer").innerHTML = footer();

// ----------------------------------------------------featured------------------------------

let featured = [
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
    name: "Fitbit",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png",
    name: "Garmin Connect",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_389_1_10_0_31181.png",
    name: "VeSync",
    content: "Health app",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png",
    name: "Renpho Health",
    content: "Health app",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png",
    name: "Strava",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png",
    name: "MapMyRun",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png",
    name: "RunKeeper",
    content: "Fitness Apps",
  },
];

let appendFeatured = (featured) => {
  let featuredContent = document.getElementById("featuredContent");
  featuredContent.innerHTML = null;
  featured.map((ele) => {
    let div = document.createElement("div");
    div.className = "split2";
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.image;
    let name = document.createElement("p");
    name.innerText = ele.name;
    let type = document.createElement("p");
    type.innerText = ele.content;
    let btn = document.createElement("button");
    btn.innerText = "GET";
    div1.append(img);
    div2.append(name, type, btn);
    div.append(div1, div2);
    featuredContent.append(div);
  });
};

appendFeatured(featured);

// ------------------------------------------------------marketplace---------------------------

let marketplace = [
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
    name: "Fitbit",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_1_10_0_9523.png",
    name: "Garmin Connect",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_110_1_10_0_74815.png",
    name: "MapMyFitness",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_182_1_10_0_90660.png",
    name: "MapMyWalk",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_184_1_10_0_61431.png",
    name: "MapMyRide",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_1_10_0_3668.png",
    name: "MapMyRun",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_139_1_10_0_10915.png",
    name: "Withings Health",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_1_10_0_84885.png",
    name: "Strava",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_1_10_0_44251.png",
    name: "RunKeeper",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_2_1_10_0_87968.png",
    name: "Runtastic",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_331_1_10_0_52964.png",
    name: "Polar Flow",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_86_1_10_0_19952.png",
    name: "xID",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_306_1_10_0_49537.png",
    name: "TrainingPeaks",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_282_1_10_0_81543.png",
    name: "Misfit",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_130_1_10_0_23647.png",
    name: "Glow",
    content: "Fertility",
  },
];

let appendMarketplace = (marketplace) => {
  let marketplaceContent = document.getElementById("marketplaceContent");
  marketplaceContent.innerHTML = null;
  marketplace.map((ele) => {
    let div = document.createElement("div");
    div.className = "split2";
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.image;
    marketplace;
    let name = document.createElement("p");
    name.innerText = ele.name;
    let type = document.createElement("p");
    type.innerText = ele.content;
    let btn = document.createElement("button");
    btn.innerText = "GET";
    div1.append(img);
    div2.append(name, type, btn);
    div.append(div1, div2);
    marketplaceContent.append(div);
  });
};

appendMarketplace(marketplace);

//---------------------------------------------search results-------------------------------------

let fit = [
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_1_10_0_45741.png",
    name: "Fitbit",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_110_1_10_0_74815.png",
    name: "MapMyFitness",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_282_1_10_0_81543.png",
    name: "Misfit",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_client_62_1_10_0_1001.png",
    name: "Digifit",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_190_1_10_0_53477.png",
    name: "FitStar",
    content: "Fitness Apps",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_305_1_10_0_30788.png",
    name: "Fitstar Yoga",
    content: "Fitness Apps",
  },
];

let health = [
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_139_1_10_0_10915.png",
    name: "Withings Health",
    content: "Activity Trackers",
  },
  {
    image:
      "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_1_10_0_97000.png",
    name: "Renpho Health",
    content: "Health Trackers",
  },
];

let appendSearch = (data) => {
  let search = document.createElement("h2");
  search.innerText = "Search Results";
  search.className = "searching";
  let container = document.getElementById("container");
  container.innerHTML = null;
  container.append(search);
  let div3 = document.createElement("div");
  div3.id = "setRes";
  data.map((ele) => {
    let div = document.createElement("div");
    div.className = "split2";
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");

    let img = document.createElement("img");
    img.src = ele.image;
    marketplace;
    let name = document.createElement("p");
    name.innerText = ele.name;
    let type = document.createElement("p");
    type.innerText = ele.content;
    let btn = document.createElement("button");
    btn.innerText = "GET";
    div1.append(img);
    div2.append(name, type, btn);
    div.append(div1, div2);
    div3.append(div);
    container.append(div3);
  });
};

let result = () => {
  if (event.key == "Enter") {
    event.preventDefault();
    let val = document.getElementById("query").value;
    if (val == "fit") {
      appendSearch(fit);
    } else if (val == "health") {
      appendSearch(health);
    } else {
      let search = document.createElement("h2");
      search.innerText = "No Search Results Found";
      search.className = "searching";
      let container = document.getElementById("container");
      container.innerHTML = null;
      container.append(search);
    }
  }
};

document.getElementById("query").addEventListener("keypress", result);

// ----------------------------------------------------sliding images-------------------

let slideImage = [
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_180_2_10_0_26145.png",
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_30_2_10_0_90706.png",
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_102_2_10_0_2751.png",
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_392_2_10_0_3957.png",
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_120_2_10_0_25954.png",
  "https://dakd0cjsv8wfa.cloudfront.net/images/api_clients/0/api_clients_229_2_10_0_74866.png",
];

let slide = () => {
  let slideImages = document.getElementById("slideImages");
  let i = 0;
  setInterval(() => {
    if (i == 6) {
      i = 0;
    }
    slideImages.innerHTML = null;
    let img = document.createElement("img");
    img.src = slideImage[i];
    slideImages.append(img);
    i++;
  }, 3000);
};

slide();
