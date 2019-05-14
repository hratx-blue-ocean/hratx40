import React from "react";
import NewsFeedItem from "./NewsfeedItem.js"
import axios from 'axios';

class Newsfeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: 
      [
        {
            "source": {
                "id": "the-new-york-times",
                "name": "The New York Times"
            },
            "author": "KWAME ANTHONY APPIAH",
            "title": "The Ethicist: Should I Get Involved in Helping a Neighbor With Dementia?",
            "description": "The magazine’s Ethicist columnist on whether to help a neighbor who has become increasingly forgetful, befriending a homeless man in Tel Aviv and more.",
            "url": "https://www.nytimes.com/2019/04/23/magazine/should-i-get-involved-in-helping-a-neighbor-with-dementia.html",
            "urlToImage": "https://static01.nyt.com/images/2018/10/07/magazine/28mag-ethicist-image1/28mag-ethicist-image1-facebookJumbo-v22.jpg",
            "publishedAt": "2019-04-23T09:00:02Z",
            "content": "Youre feeling the force of the paradox I just mentioned: Engagement with people can create obligations, and that consideration can discourage us from engaging. In Tel Aviv, where you live, theres another complication: The Ministry of Social Affairs and Social… [+2979 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Arjun Reddy",
            "title": "You can take part in a charity auction to win lunch with Warren Buffett. Here's what you need to know.",
            "description": "The annual charity auction for a lunch with Warren Buffet kicks off May 26. 100% of proceeds will be donated to the Glide Foundation, a San Francisco-based organization that supports the homeless. Last year's winning bid was over $4 million. Bidding for the 2…",
            "url": "https://markets.businessinsider.com/news/stocks/lunch-with-warren-buffett-how-to-win-2019-4-1028150131",
            "urlToImage": "https://images.markets.businessinsider.com/image/5b0d80a01ae66222008b4844-2000/ap13052016400.jpg",
            "publishedAt": "2019-04-29T20:18:32Z",
            "content": "Dave Weaver/AP\r\nThe annual charity auction for a lunch with Warren Buffet kicks off May 26.\r\n100% of  proceeds will be donated to the Glide Foundation, a San Francisco-based organization that supports the homeless.\r\nLast year's winning bid was over $4 million… [+1959 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Remi Rosmarin",
            "title": "This new brand from Unilever is donating 100% of its profits in 2019 to bring mobile shower units to homeless communities",
            "description": "The Insider Picks writes about products and services to help you navigate when shopping online. Insider Inc. receives a commission from our affiliate partners when you buy through our links, but our reporting and recommendations are always independent and obj…",
            "url": "https://www.businessinsider.com/unilever-the-right-to-shower-body-products-review",
            "urlToImage": "https://amp.businessinsider.com/images/5cc74fc1fa99af49d817f9fe-1136-568.jpg",
            "publishedAt": "2019-04-29T19:51:00Z",
            "content": "The Insider Picks writes about products and services to help you navigate when shopping online. Insider Inc. receives a commission from our affiliate partners when you buy through our links, but our reporting and recommendations are always independent and obj… [+2930 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Phys.org"
            },
            "author": "Sarah Canham",
            "title": "The aging face of homelessness in North American cities",
            "description": "In Vancouver last month, more than 400 volunteers walked around, carrying clipboards and wearing bright yellow buttons that read \"Homeless Count.\" They were out on the streets or in shelters asking homeless people to complete brief surveys for the city's annu…",
            "url": "https://phys.org/news/2019-04-aging-homelessness-north-american-cities.html",
            "urlToImage": "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2019/2-homeless.jpg",
            "publishedAt": "2019-04-10T12:40:02Z",
            "content": "In Vancouver last month, more than 400 volunteers walked around, carrying clipboards and wearing bright yellow buttons that read \"Homeless Count.\" They were out on the streets or in shelters asking homeless people to complete brief surveys for the city's annu… [+4904 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Bill Gates Actually Made a Good Point About the Socialism Debate in America",
            "description": "Billionaires Bill Gates, Charlie Munger, and Warren Buffett were interviewed on CNBC this morning, and it wasn’t surprising to hear the three men defend capitalism. But it was surprising to hear Gates make a really good point about socialism. Or, at least a g…",
            "url": "https://gizmodo.com/bill-gates-actually-made-a-good-point-about-the-sociali-1834549235",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--IrjgyC-N--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/mpv0kenkyvobrvaotej5.jpg",
            "publishedAt": "2019-05-06T16:30:00Z",
            "content": "Billionaires Bill Gates, Charlie Munger, and Warren Buffett were interviewed on CNBC this morning, and it wasnt surprising to hear the three men defend capitalism. But it was surprising to hear Gates make a really good point about socialism. Or, at least a go… [+6821 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Scott Heidler",
            "title": "Cyclone Fani aftermath: Anger over lack of govt services",
            "description": "A cleanup operation is under way after the biggest cyclone hits India in 20 years.",
            "url": "https://www.aljazeera.com/news/2019/05/cyclone-fani-aftermath-anger-lack-govt-services-190505170047784.html",
            "urlToImage": "https://www.aljazeera.com/mritems/images/2019/5/5/665003303001_6033138081001_6033139969001-th.jpg",
            "publishedAt": "2019-05-05T17:00:47Z",
            "content": "The cleanup after India's biggest cyclone in 20 years is under way.\r\nDozens of people were killed after Cyclone Fani battered Odisha state.\r\nThere is mounting concern over what will happen next for the people left homeless.\r\nLocal communities near Puri are fr… [+99 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pewtrusts.org"
            },
            "author": null,
            "title": "Denver Might Give Homeless People Right to Camp ANYWHERE...",
            "description": "Denver Might Give Homeless People Right to Camp ANYWHERE... (Second column, 21st story, link ) Advertise here",
            "url": "https://www.pewtrusts.org/en/research-and-analysis/blogs/stateline/2019/04/29/this-city-might-give-homeless-people-the-right-to-camp-anywhere",
            "urlToImage": "https://www.pewtrusts.org/-/media/post-launch-images/2019/04/sln_apr29_1/16x9_m.jpg",
            "publishedAt": "2019-05-01T14:34:37Z",
            "content": "Editor's note: Because of a reporting error, an earlier version of this story included incorrect information about the drug and alcohol policy in Denver’s homeless shelters. The shelters bar people who possess alcohol or drugs, but not all of those who are in… [+11846 chars]"
        },
        {
            "source": {
                "id": "the-globe-and-mail",
                "name": "The Globe And Mail"
            },
            "author": null,
            "title": "As donations pour in, rebuilding Notre-Dame turns political - The Globe and Mail",
            "description": "As donations pour in, rebuilding Notre-Dame turns political The Globe and Mail 'The search is over!' Man in viral Notre-Dame photo reaches out CTV News Notre Dame fire likely caused by electrical short-circuit: official Global News Rex Murphy: This is why Not…",
            "url": "https://www.theglobeandmail.com/world/article-france-president-macron-experiences-fallout-after-mass-donations/",
            "urlToImage": "https://www.theglobeandmail.com/resizer/1bAUDTL3PzeEd2dNRcU8yprKiLg=/1200x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/TZ7IHEKXOVBGBIFVTH6SILCFPE.jpg",
            "publishedAt": "2019-04-19T16:34:18Z",
            "content": "People wait for the Way of the Cross ceremony on Good Friday as part of the Holy Week celebrations, near Notre-Dame Cathedral in central Paris on April 19, 2019.\r\nSTEPHANE DE SAKUTIN/AFP/Getty Images\r\nAs people across Paris prepare for Easter celebrations wit… [+11366 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Weburbanist.com"
            },
            "author": "SA Rogers",
            "title": "Dome Dining Disaster: When Reclaiming Public Space Goes Wrong",
            "description": "When the city of Toronto forcibly cleared a homeless encampment beneath a downtown section of Gardiner Expressway only to turn it over to a luxury outdoor restaurant pop-up, people paying $545 per party got prime views of unappetizing protests. “Dinner with a…",
            "url": "https://weburbanist.com/2019/05/01/dome-dining-disaster-when-reclaiming-public-space-goes-wrong/",
            "urlToImage": "https://weburbanist.com/wp-content/uploads/2019/05/Screen-Shot-2019-05-01-at-11.05.19-AM.png",
            "publishedAt": "2019-05-01T17:00:17Z",
            "content": "Article by SA Rogers, filed under\r\n Cities &amp; Urbanism in the Architecture category\r\nWhen the city of Toronto forcibly cleared a homeless encampment beneath a downtown section of Gardiner Expressway only to turn it over to a luxury outdoor restaurant pop-u… [+6178 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes.com"
            },
            "author": "Michael Bernick, Contributor, Michael Bernick, Contributor https://www.forbes.com/sites/michaelbernick/",
            "title": "Cher and the Limits of Social Resources",
            "description": "Earlier this month, Cher tweeted her concern about providing adequate social services for the homeless and others in need, with reference to current immigration levels. What happened next is worth noting, as we consider the limits of social resources.",
            "url": "https://www.forbes.com/sites/michaelbernick/2019/04/30/cher-and-the-limits-of-social-resources/",
            "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F2414281b87f74a82a0d54ccf22ce165d%2F960x0.jpg%3Ffit%3Dscale",
            "publishedAt": "2019-04-30T14:01:00Z",
            "content": "Share to facebook\r\nShare to twitter\r\nShare to linkedin\r\nFor decades, Cher has been praised for her generosity to persons with mental health/disabilities challenges, and more generally to those in need. Over the past few weeks, though, she has been under attac… [+10484 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wlbt.com"
            },
            "author": "Summer Tadlock",
            "title": "From homeless to business owners, this Jackson couple is beating the odds - WLBT",
            "description": "From homeless to business owners, this Jackson couple is beating the odds WLBT JACKSON, MS (WLBT) - Today the Salvation Army hosted it's first 'Day in the Shelter' event, a day for agencies and services to educate the homeless on job...",
            "url": "https://www.wlbt.com/2019/05/08/homeless-business-owners-this-jackson-couple-is-beating-odds/",
            "urlToImage": "https://www.wlbt.com/resizer/IRvcaFxyYJZzxrQUnG6xdyW1J_Q=/1200x0/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/HBUKWCWMEJA2HFQDH77MZTPSG4.bmp",
            "publishedAt": "2019-05-08T00:48:00Z",
            "content": "JACKSON, MS (WLBT) - Today the Salvation Army hosted its first Day in the Shelter event, a day for agencies and services to educate the homeless on job opportunities all across the metro area.\r\nOne couple came to speak about their personal experience from liv… [+1227 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety.com"
            },
            "author": "atingley4",
            "title": "Michael B. Jordan, Ronda Rousey Join Efforts to Help the Homeless",
            "description": "Michael B. Jordan and WWE star Ronda Rousey were just two of the powerhouses that gathered in Hollywood Thursday night for the Los Angeles Family Housing’s annual fundraising celebration. The live-auction event, which brought together hundreds of top industry…",
            "url": "https://variety.com/2019/film/news/michael-b-jordan-ronda-rousey-join-efforts-to-help-the-homeless-1203198654/",
            "urlToImage": "https://pmcvariety.files.wordpress.com/2019/04/rexfeatures_10219076bb.jpg?w=700&h=393&crop=1",
            "publishedAt": "2019-04-26T13:25:38Z",
            "content": "Michael B. Jordan and WWE star Ronda Rousey were just two of the powerhouses that gathered in Hollywood Thursday night for the Los Angeles Family Housing’s annual fundraising celebration.\r\nThe live-auction event, which brought together hundreds of top industr… [+3580 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cnet.com"
            },
            "author": "Marguerite Reardon",
            "title": "Libraries lean on Twitter, Facebook and Instagram to reel you in - CNET",
            "description": "From pithy tweets to Insta Novels on Instagram, libraries around the world are using social media to entertain and reach their audiences.",
            "url": "https://www.cnet.com/news/libraries-lean-on-twitter-facebook-and-instagram-to-reel-you-in/",
            "urlToImage": "https://cnet3.cbsistatic.com/img/mSAjMN94qaaTYsPFZ4xOnETFfmM=/756x567/2019/04/05/76bca5f4-540c-46c8-a736-90fc5e21f1a8/univ-of-liverpool-sandwich.png",
            "publishedAt": "2019-04-11T12:00:14Z",
            "content": "Last summer, the New York Public Library wanted to make classic literature more enticing to young readers. You know, readers who are more likely to scroll through a text message than turn a page.\r\nSo the NYPL created \"Insta Novels,\" digitized versions of clas… [+6747 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gothamist.com"
            },
            "author": "Caroline Lewis",
            "title": "Park Slope Residents Raise Questions About Two New Homeless Shelters",
            "description": "When Mayor Bill de Blasio announced his plan to build 90 new homeless shelters across the city, critics pointed out that wealthier neighborhoods like Park Slope, where the mayor lived with his family before moving to Gracie Mansion, haven’t gotten their fair …",
            "url": "http://gothamist.com/2019/05/02/park_slope_homeless_shelters.php",
            "urlToImage": "http://gothamist.com/assets_c/2019/05/5219parkslope1-thumb-640xauto-1029124.jpg",
            "publishedAt": "2019-05-02T17:06:53Z",
            "content": "When Mayor Bill de Blasio announced his plan to build 90 new homeless shelters across the city, critics pointed out that wealthier neighborhoods like Park Slope, where the mayor lived with his family before moving to Gracie Mansion, haven’t gotten their fair … [+4549 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Complex.com"
            },
            "author": "Trace William Cowen",
            "title": "Footage Shows Cops Questioning Barber Giving Free Cuts to Homeless People in Philadelphia",
            "description": "Brennon Jones is known for his Haircut 4 Homeless project, which offers free haircuts and others services for Philly's homeless.",
            "url": "https://www.complex.com/life/2019/04/footage-cops-questioning-barber-giving-free-cuts-homeless-people",
            "urlToImage": "https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/ppelawun6lbkw1cn44kw/barber",
            "publishedAt": "2019-04-18T17:32:08Z",
            "content": "A Philadelphia area barber known for his Haircut 4 the Homeless initiative won't be discouraged by a recent encounter with police for which he says he still hasn't received a full explanation.\r\n\"Issues come and go,\" Brennon Jones, who was seen in recent viral… [+1732 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mindbodygreen.com"
            },
            "author": "Caroline Muggia",
            "title": "This New Unilever Brand Is Helping The Homeless Get Access To Showers",
            "description": "Here's how you can help today.",
            "url": "https://www.mindbodygreen.com/articles/this-new-unilever-brand-is-helping-the-homeless-get-access-to-showers",
            "urlToImage": "https://mindbodygreen-res.cloudinary.com/image/upload/c_crop,x_0,y_0,w_1500,h_1000/c_fill,w_720,h_378,g_auto,q_85,fl_lossy,f_jpg/org/hnrq38dvjjuwx5j6e.jpg",
            "publishedAt": "2019-04-25T17:45:00Z",
            "content": "Recent estimates on homelessness in America suggest that around 550,000 people are homeless on a given night in the United States. Depending on the circumstance, homeless people go without shelter, food, or space to shower or go to the bathroom.\r\nWhile we usu… [+899 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Meghan Dunn, CNN",
            "title": "Runaway teens don't qualify for foster care. So she created a solution.",
            "description": "More than a million young people in the United States can't get foster care because they chose to leave a situation rather than be removed by social services. To bridge that gap, Vicki Sokolik founded a nonprofit in Tampa, Florida, to help those ages 15 to 19…",
            "url": "https://www.cnn.com/2019/04/11/us/cnnheroes-vicki-sokolik-starting-right-now/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190411120807-cnnheroes-sokolik-with-jaheim-computer-super-tease.jpg",
            "publishedAt": "2019-04-11T20:39:57Z",
            "content": "Know someone who inspires you? Click here to nominate them as a CNN Hero.\r\nTampa, Florida (CNN)Jahiem Morgan knew he was too young to be living on his own at 15 years old, but he didn't have much of a choice.\r\nHis mother died when he was 12, his father was in… [+5460 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Jatindra Dash",
            "title": "India cyclone kills at least 33, hundreds of thousands homeless",
            "description": "Hundreds of thousands of people were left homeless after a cyclone packing winds of about 200 km per hour slammed into eastern India, ripping out tin roofs and destroying power and telecom lines, officials said on Sunday.",
            "url": "https://www.reuters.com/article/us-india-cyclone-idUSKCN1SB0AW",
            "urlToImage": "https://s2.reutersmedia.net/resources/r/?m=02&d=20190505&t=2&i=1383843225&w=1200&r=LYNXNPEF440CF",
            "publishedAt": "2019-05-05T11:17:24Z",
            "content": "PURI, India (Reuters) - Hundreds of thousands of people were left homeless after a cyclone packing winds of about 200 km per hour slammed into eastern India, ripping out tin roofs and destroying power and telecom lines, officials said on Sunday. \r\nAt least 33… [+2529 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketwatch.com"
            },
            "author": "Peter Morici",
            "title": "Peter Morici: Let the free market take America cashless",
            "description": "Market forces are taking America cashless but local politicos, like the luddites destroying machines that replaced craftsmen, are throwing up roadblocks.",
            "url": "https://www.marketwatch.com/story/let-the-free-market-take-america-cashless-2019-04-22",
            "urlToImage": "http://s.marketwatch.com/public/resources/MWimages/MW-GP633_grow_c_ZG_20180906144222.jpg",
            "publishedAt": "2019-04-22T12:28:53Z",
            "content": "Using a digital payment method is more convenient for customers and retailers alike. \r\nMarket forces are taking America cashless but local politicos, like the luddites destroying machines that replaced craftsmen, are throwing up roadblocks.\r\nMost folks purcha… [+4254 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Seattletimes.com"
            },
            "author": "The Seattle Times editorial board",
            "title": "Keep homeless-services providers accountable",
            "description": "Seattle's new enhanced shelter program is a move in the right direction.",
            "url": "https://www.seattletimes.com/opinion/editorials/keep-homeless-services-providers-accountable/",
            "urlToImage": "https://static.seattletimes.com/wp-content/uploads/2019/04/family-resources-474x711.jpg",
            "publishedAt": "2019-04-16T00:04:12Z",
            "content": "The city of Seattle’s latest approach to move homeless people off the street, the “enhanced” emergency shelter model that combines social services with 24-hour shelter, had some promising results last year.\r\nBut a recent update from the city’s Human Services … [+3148 chars]"
        }
      ]
    }
  }
  // Uncomment the code below to use NEWS API
  componentDidMount() {
    axios.get(`http://localhost:8000/api/news?topic=${this.props.currentTopic}`)
      .then((res) => {
        // console.log("newsfeed client: ", res.data)
        this.setState({
          articles: res.data
        })
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    return (
      <div onLoad={window.scrollTo(0,0)}>
        <h2 style={{textAlign:"center", borderBottom:"solid", borderColor:"#C4ADAE"}}>Newsfeed</h2>
        <div style={{overflowY:"scroll", width: "100%", height:"100vh", paddingRight: "1vw"}}>
          { this.state.articles.map((article, index)=>( 
            <NewsFeedItem article={article} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

export default Newsfeed;