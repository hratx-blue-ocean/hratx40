const fs = require('file-system');
const axios = require('axios');

const newsCache = () => {
  axios.get(`https://newsapi.org/v2/everything?q=(Childrens and Family Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Childrens and Family Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Childrens and Family Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

  axios.get(`https://newsapi.org/v2/everything?q=(Homeless Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Homeless Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Homeless Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Youth Development, Shelter, and Crisis Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Youth Development, Shelter, and Crisis Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Youth Development, Shelter, and Crisis Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Multipurpose Human Service Organizations)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Multipurpose Human Service Organizations.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Multipurpose Human Service Organizations write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Food Banks, Food Pantries)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Food Banks, Food Pantries, and Food Distribution.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Food Banks, Food Pantries, and Food Distribution write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Social Services AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Social Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Social Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Scholarship and Financial Support)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Scholarship and Financial Support.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Scholarship and Financial Support write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Youth Education Programs and Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Youth Education Programs and Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Youth Education Programs and Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Education Policy and Reform)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Education Policy and Reform.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Education Policy and Reform write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Adult Education Programs and Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Adult Education Programs and Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Adult Education Programs and Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Early Childhood Programs and Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Early Childhood Programs and Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Early Childhood Programs and Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Special Education AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Special Education.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Special Education write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(International Peace, Security, and Affairs)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/International Peace, Security, and Affairs.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('International Peace, Security, and Affairs write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Development and Relief Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Development and Relief Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Development and Relief Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Humanitarian Relief Supplies AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Humanitarian Relief Supplies.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Humanitarian Relief Supplies write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Advocacy and Education AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Advocacy and Education.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Advocacy and Education write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Religious Media and Broadcasting)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Religious Media and Broadcasting.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Religious Media and Broadcasting write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Religious Activities AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Religious Activities.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Religious Activities write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Wildlife Conservation)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Wildlife Conservation.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Wildlife Conservation write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Animal Rights, Welfare, and Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Animal Rights, Welfare, and Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Animal Rights, Welfare, and Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Zoos and Aquariums)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Zoos and Aquariums.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Zoos and Aquariums write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Libraries, Historical Societies)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Libraries, Historical Societies and Landmark Preservation.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Libraries, Historical Societies and Landmark Preservation write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Museums AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Museums.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Museums write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Performing Arts AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Performing Arts.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Performing Arts write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Public Broadcasting and Media)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Public Broadcasting and Media.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Public Broadcasting and Media write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Botanical Gardens, Parks, and Nature Centers)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Botanical Gardens, Parks, and Nature Centers.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Botanical Gardens, Parks, and Nature Centers write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Environmental Protection and Conservation)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Environmental Protection and Conservation.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Environmental Protection and Conservation write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Patient and Family Support AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Patient and Family Support.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Patient and Family Support write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Diseases, Disorders AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Diseases, Disorders, and Disciplines.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Diseases, Disorders, and Disciplines write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Treatment and Prevention Services)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Treatment and Prevention Services.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Treatment and Prevention Services write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Medical Research AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Medical Research.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Medical Research write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Community Foundations)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Community Foundations.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Community Foundations write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Housing and Neighborhood Development AND charity)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Housing and Neighborhood Development.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Housing and Neighborhood Development write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(United Ways)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/United Ways.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('United Ways write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Jewish Federations)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Jewish Federations.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Jewish Federations write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Non-Medical Science & Technology Research)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Non-Medical Science & Technology Research.json', JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Non-Medical Science & Technology Research write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

    axios.get(`https://newsapi.org/v2/everything?q=(Social and Public Policy Research)&sortBy=popularity&language=en&apiKey=23a22828c7c44f4b85cdcacbf8876f82`)
    .then((results) => {
      fs.writeFile('../cache/Social and Public Policy Research.json',  JSON.stringify([results.data]), (error) => {
        if (error) console.error(error)
        else console.log('Social and Public Policy Research write success');
      })
    })
    .catch((err) => {
      console.error(`ERROR: ${err}`)
    });

  // Approx. 10X per day the news feed will refresh.
  setTimeout(() => {
    newsCache();
  }, 8640000);
}

newsCache();

module.exports.newsCache = newsCache;