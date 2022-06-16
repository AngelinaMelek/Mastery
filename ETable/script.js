const arr = [
  {
    icon: "img/Figma.png",
    alt: "Figma icon",
    name: "Figma",
    url: "https://www.figma.com/",
    type: "Visa",
    card: "***** 2468",
    user: "Itai Bracha31",
    email: "Itai Bracha31@gmail.com",
    date: "Jan 2,2022",
    price: "$783.22",
    status: "Done",
    endDate: "Jan 12,2022",
    total: "$783.22",
  },
  {
    icon: "img/Adobe.png",
    alt: "Adobe icon",
    name: "Adobe XD",
    url: "https://www.adobe.com/",
    type: "Visa",
    card: "***** 2468",
    user: "Itai Bracha31",
    email: "Itai Bracha31@gmail.com",
    date: "Jan 2,2022",
    price: "$783.22",
    status: "Done",
    endDate: "Jan 12,2022",
    total: "$783.22",
  },
  {
    icon: "img/Mailchimp.png",
    alt: "Mailchimp icon",
    name: "Mailchimp",
    url: "https://mailchimp.com/",
    type: "Visa",
    card: "***** 2468",
    user: "Itai Bracha31",
    email: "Itai Bracha31@gmail.com",
    date: "Jan 2,2022",
    price: "$783.22",
    status: "Done",
    endDate: "Jan 12,2022",
    total: "$783.22",
  },
  {
    icon: "img/WIX.png",
    alt: "WIX icon",
    name: "Wix",
    url: "https://www.wix.com/",
    type: "Visa",
    card: "***** 2468",
    user: "Itai Bracha31",
    email: "Itai Bracha31@gmail.com",
    date: "Jan 2,2022",
    price: "$783.22",
    status: "Pending",
    endDate: "Jan 12,2022",
    total: "$783.22",
  },
  {
    icon: "img/Youtube.png",
    alt: "Youtube icon",
    name: "Youtube",
    url: "https://www.youtube.com/",
    type: "Visa",
    card: "***** 2468",
    user: "Itai Bracha31",
    email: "Itai Bracha31@gmail.com",
    date: "Jan 2,2022",
    price: "$783.22",
    status: "Done",
    endDate: "Jan 12,2022",
    total: "$783.22",
  },
];

// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  var tbody = document.querySelector("tbody");
  var template = document.querySelector("#productrow");

  for (let i = 0; i < arr.length; i++) {
    var clone = template.content.cloneNode(true);
    const td = clone.querySelectorAll("td");
    td[1].querySelector("img").setAttribute("src", arr[i].icon);
    td[1].querySelector("img").setAttribute("alt", arr[i].alt);
    td[2].textContent = arr[i].name;
    td[3].textContent = arr[i].type;
    td[4].textContent = arr[i].user;
    td[5].textContent = arr[i].endDate;
    td[6].textContent = arr[i].status;
    td[7].textContent = arr[i].date;
    td[8].textContent = arr[i].total;
    td[10].textContent = arr[i].url;
    td[11].textContent = arr[i].card;
    td[12].textContent = arr[i].email;
    td[13].textContent = arr[i].price;
    tbody.appendChild(clone);
    if (td[6].textContent === "Done") {
      td[6].classList.add("status-done");
    } else {
      td[6].classList.add("status-pending");
    }
  }
}

console.log(arr);
