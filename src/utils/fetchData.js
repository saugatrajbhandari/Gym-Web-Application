export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    return data;

}

export const exerciseOptions =  {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'de9ac31badmsh9dabd3c3a3deb42p14f198jsna1931c7cede3',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};