function saveUsername() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;

    // Save the username to localStorage
    localStorage.setItem("username", username);
  }

  const billa = async () => {
    const url = "https://aeona3.p.rapidapi.com/?text=man";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key":
          "ebfc9bcae4mshc098a57e35522ecp16b3a6jsn835faedd706d",
        "X-RapidAPI-Host": "aeona3.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  billa();