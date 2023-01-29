import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {


// articles=[
//     {
//         "source": {
//             "id": "news24",
//             "name": "News24"
//         },
//         "author": "Lynn Butler",
//         "title": "Conrad sees SA20 as an 'ally' to Proteas: 'People in SA still very much in love with cricket'",
//         "description": "Shukri Conrad believes the SA20's success will only benefit the Proteas as they look to use that form ahead of their England ODI series.",
//         "url": "https://www.news24.com/sport/cricket/proteas/conrad-sees-sa20-as-an-ally-to-proteas-people-in-sa-still-very-much-in-love-with-cricket-20230126",
//         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/8158/201db5ef722349e89df2a2ce80ef6ff7.jpg",
//         "publishedAt": "2023-01-26T11:06:06+00:00",
//         "content": "<ul><li>Proteas ODI caretaker coach Shukri Conrad says he sees the successful SA20 as an ally ahead of this week's England ODIs.</li><li>The Proteas take on England in a three-match ODI series in Blo… [+3001 chars]"
//     },
//     {
//         "source": {
//             "id": "bbc-sport",
//             "name": "BBC Sport"
//         },
//         "author": null,
//         "title": "Stokes named ICC Men’s Test Cricketer of the Year",
//         "description": "Ben Stokes is named ICC Men's Test Cricketer of the Year and Nat Sciver wins the women's ODI award",
//         "url": "http://www.bbc.co.uk/sport/cricket/64406904",
//         "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/CFDC/production/_128421235_gettyimages-1448469922.jpg",
//         "publishedAt": "2023-01-26T09:22:34.0278674Z",
//         "content": "England won nine out of their 10 Tests under Ben Stokes' captaincy in 2022\r\nEngland Test captain Ben Stokes has been named ICC Men's Test Cricketer of the Year for 2022. \r\nAll-rounder Stokes, 31, too… [+2357 chars]"
//     },
//     {
//         "source": {
//             "id": "talksport",
//             "name": "TalkSport"
//         },
//         "author": "Robert Calcutt",
//         "title": "England cricket star Jofra Archer ‘had the best time being injured’ and reveals he bought FIVE dogs in fou...",
//         "description": "",
//         "url": "https://talksport.com/sport/cricket/1313848/jofra-archer-dogs-rehab-england-south-africa-odi-series/",
//         "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/01/england-bowler-jofra-archer-relaxes-791093554.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
//         "publishedAt": "2023-01-26T08:24:00Z",
//         "content": "England fast bowler Jofra Archer has revealed that he called upon the help of some canine friends to help him through his rehab.\r\nArcher’s last appearance on the international stage came way back in … [+2970 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//         "publishedAt": "2020-04-27T11:41:47Z",
//         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//         "publishedAt": "2020-03-30T15:26:05Z",
//         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
// ]

 constructor(){
    super()
    

    this.state={
        articles: [],
        loading: false,
        page:1,             
       

    }
    console.log(this.state.articles)
 }

 async componentDidMount(){
    console.log("Cdm")
   let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=945895608b4e41aeab5835c4538cf927&page=1&pageSize=12";
   let data=await fetch(url);
   let parsedData=await data.json();
   console.log(parsedData);
   this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults });

 }


 handlePrevClick=async ()=>{
 console.log("prev");
 
 


 let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=945895608b4e41aeab5835c4538cf927&page=${this.state.page}&pageSize=12`;
   let data=await fetch(url);
   let parsedData=await data.json();
   console.log(parsedData);
   this.setState({articles:parsedData.articles  });
 this.setState({
    page:this.state.page-1,
    
})

 
 }

 handleNextClick=async ()=>{
console.log("next");
if(this.state.page+1>Math.ceil(this.state.totalResults/12)){

}
else{
let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=945895608b4e41aeab5835c4538cf927&page=${this.state.page}&pageSize=12`;
   let data=await fetch(url,{
    mode: 'cors'
   });
   let parsedData=await data.json();
   console.log(parsedData);
   this.setState({articles:parsedData.articles  });
this.setState({
    page:this.state.page+1,
})
 }
 }

  render() {
    console.log("this is render")

    return (
        
      <div className='container my-3 '>
       <h2>NewsMonkey - Top Head Lines</h2>


      
        <div className='row '> 
        {this.state.articles?.map((element)=>{
            return  <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
        })}
        
        </div>
        
     <div className="container d-flex justify-content-between">
      
     <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
     <button type="button" className="btn btn-dark"onClick={this.handleNextClick}>Next &raquo;</button>
        
     </div>

      </div>
    )
  }
}
