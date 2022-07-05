const myData = [
  {
    icon: "img/Figma.png",
    alt: "Figma icon",
    name: "Figma",
    url: "https://www.figma.com/",
    type: "Visa",
    card: "***** 2468",
    user: "Itai Bracha31",
    email: "Itai Bracha31@gmail.com",
    date: "May 10,2022",
    price: "$783.22",
    status: "Done",
    endDate: "May 20,2022",
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
    date: "Feb 2,2022",
    price: "$783.22",
    status: "Done",
    endDate: "Feb 12,2022",
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
    date: "Jun 19,2022",
    price: "$783.22",
    status: "Pending",
    endDate: "Jun 29,2022",
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
    date: "Apr 12,2022",
    price: "$783.22",
    status: "Done",
    endDate: "Apr 22,2022",
    total: "$783.22",
  },
];

if ("content" in document.createElement("template")) {
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#productrow");

  function builder(arr) {
    for (let i = 0; i < arr.length; i++) {
      const clone = template.content.cloneNode(true);
      const td = clone.querySelectorAll("td");
      const img = clone.querySelector("img");
      td[1] = img.setAttribute("src", arr[i].icon);
      td[1] = img.setAttribute("alt", arr[i].alt);
      td[2].textContent = arr[i].name;
      td[3].textContent = arr[i].type;
      td[4].textContent = arr[i].user;
      td[5].textContent = arr[i].date;
      td[6].textContent = arr[i].status;
      td[7].textContent = arr[i].endDate;
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

  builder(myData);

  function clearTable() {
    tbody.textContent = "";
  }

  const mySearch = document.getElementById("mySearch");
  mySearch.addEventListener("input", function (event) {
    filterHandler();
  });

  function filterItems(arr, query) {
    return arr.filter(function (el) {
      return el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }

  const startDateElem = document.querySelector("#startDate");
  const endDateElem = document.querySelector("#endDate");

  startDateElem.addEventListener("change", (event) => {
    filterHandler();
  });

  endDateElem.addEventListener("change", (event) => {
    filterHandler();
  });

  function filterHandler() {
    let startDate = new Date(startDateElem.value);
    let endDate = new Date(endDateElem.value);
    clearTable();
    if (startDateElem.value === "") {
      startDate = new Date(0);
    }
    if (endDateElem.value === "") {
      endDate = new Date();
    }
    const newDate = filterDate(myData, startDate, endDate);
    const newDateFilter = filterItems(newDate, mySearch.value);
    const newDateSort = sortByName(newDateFilter);

    builder(newDateSort);
  }

  function filterDate(arr, start, end) {
    return arr.filter(function (el) {
      const itemDate = new Date(el.date);
      return start < itemDate && end > itemDate;
    });
  }

  const selectedName = document.querySelector("#sortBy");
  console.log(selectedName);

  selectedName.addEventListener("change", (event) => {
    filterHandler();
  });

  function sortByName(arr) {
    const copyArr = arr.slice();
    if (selectedName.value === "Name") {
      return copyArr.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (selectedName.value === "LastT") {
      return copyArr.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
  }
}
