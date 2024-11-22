async function fetchdata() {
    try {
      let response = await fetch("https://api.github.com/users?per_page=10");
      let data = await response.json();
      data.forEach((element) => {
        let h1= document.createElement("h1");
        h1.textContent = element.node_id;
        let top= document.getElementById("top");
        top.appendChild(h1);
      });
    }
    catch (error) {
      console.log(error);
    }
  }
  //fetchadata();