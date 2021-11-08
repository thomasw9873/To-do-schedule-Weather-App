class Fetch {
    async getCurrent(input) {
        const myKey = "f2e29802854ec38522ae21be1a43531a";
        //open weather app my key

        //make request to url. Form takes custom input and also takes your key
        //makes custom url
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`
        );

        //return the data, to be fed into UI method. To be populated

        const data = await response.json();

        console.log(data);

        return data;
    }
}