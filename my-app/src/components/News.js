import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles=[
    {
      "source": {
      "id": "bbc-sport",
      "name": "BBC Sport"
      },
      "author": null,
      "title": "Watkins nets hat-trick as Villa hit Hibs for five",
      "description": "Ollie Watkins' devastating hat-trick helps ruthless Aston Villa mark their return to European football with a first-leg Europa Conference League play-off demolition of Hibernian.",
      "url": "http://www.bbc.co.uk/sport/football/66573659",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1785C/production/_130884369_20837968.jpg",
      "publishedAt": "2023-08-23T19:07:22.0713635Z",
      "content": "Ollie Watkins' devastating hat-trick helped ruthless Aston Villa mark their return to European football with a first-leg Europa Conference League play-off demolition of Hibernian.\r\nHibs hero John McG… [+4187 chars]"
      },
      {
      "source": {
      "id": "fox-sports",
      "name": "Fox Sports"
      },
      "author": "RJ Young",
      "title": "College football 2023: Picking conference champions, CFP teams, title winner",
      "description": "RJ Young predicts who will win each Power 5 conference, which teams will make the College Football Playoff, and who will win it all.",
      "url": "http://www.foxsports.com/stories/college-football/college-football-2023-picking-conference-champions-cfp-teams-title-winner",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.23.23_RJs-CFP-Picks_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-08-23T18:58:19Z",
      "content": "Winning the national title is about following the recipe Big Mama kept on your icebox. She said you can prepare it in all manner of ways, and you've added a flourish since she passed. \r\nFrom January … [+5873 chars]"
      },
      {
      "source": {
      "id": "fox-sports",
      "name": "Fox Sports"
      },
      "author": null,
      "title": "Top 10 freshman seasons in college football since 2000",
      "description": "In 2004, Adrian Peterson had one of the most dominant freshman seasons ever, but where does his campaign rank among the best this century?",
      "url": "http://www.foxsports.com/stories/college-football/top-10-freshman-seasons-in-college-football-since-2000",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/08.18.23_best-freshman-seasons_horizontal.jpg?ve=1&tl=1",
      "publishedAt": "2023-08-23T14:14:46Z",
      "content": "With the 2023 college football\r\n season beginning this week with seven FBS games featured on the Week 0 slate, FOX Sports NFL Draft analyst Rob Rang took a look back at the five most talented college… [+8580 chars]"
      },
      {
      "source": {
      "id": "four-four-two",
      "name": "FourFourTwo"
      },
      "author": "Ryan Dabbs, Daniele Verri",
      "title": "‘It was mad’: Fabio Cannavaro says he had never seen anything like the atmosphere at Ibrox when he played there for Parma vs Rangers",
      "description": "Fabio Cannavaro has played in a World Cup final and at the biggest stadiums in football - but Ibrox is a place he's full of admiration for",
      "url": "https://www.fourfourtwo.com/news/it-was-mad-fabio-cannavaro-says-he-had-never-seen-anything-like-the-atmosphere-at-ibrox-when-he-played-there-for-parma-vs-rangers",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/ALJrioraH9XSd2T2pAUhcK-1200-80.jpg",
      "publishedAt": "2023-08-23T13:00:48Z",
      "content": "Fabio Cannavaro played in some of the most important games in world football during his career at some of the most iconic grounds on the globe, but he suggests the atmosphere at Ibrox was unrivalled … [+1918 chars]"
      },
      {
      "source": {
      "id": "bleacher-report",
      "name": "Bleacher Report"
      },
      "author": "Alex Kay",
      "title": "10 Players to Target or Avoid at Current ADP in 2023 Fantasy Football Drafts",
      "description": "Fantasy football draft season is finally upon us. Since most\nleagues use the gap between the final set of preseason contests and the start of\nthe 2023 NFL…",
      "url": "https://bleacherreport.com/articles/10086829-10-players-to-target-or-avoid-at-current-adp-in-2023-fantasy-football-drafts",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1692646770/mwhemfpkscwf7czjabs9.jpg",
      "publishedAt": "2023-08-23T11:00:00Z",
      "content": "Sarah Stier/Getty Images\r\nADP: 55\r\nThe New York Giants haven't had a quality pass-catching tight end in some time. That will change in 2023 thanks to their trade for Darren Waller.\r\nAlthough Waller's… [+1652 chars]"
      },
      {
      "source": {
      "id": "bleacher-report",
      "name": "Bleacher Report"
      },
      "author": "Adam Kramer",
      "title": "10 Hot Takes for the 2023 College Football Season",
      "description": "Football will be played this weekend, and every weekend for the foreseeable future after that.",
      "url": "https://bleacherreport.com/articles/10086925-10-hot-takes-for-the-2023-college-football-season",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1692729327/steqlazlvwceddbd2tyy.jpg",
      "publishedAt": "2023-08-23T11:00:00Z",
      "content": "Matthew Visinsky/Icon Sportswire via Getty Images\r\nFootball will be played this weekend, and every weekend for the foreseeable future after that.\r\nThe long, dormant offseason is over. Coaches have fo… [+638 chars]"
      },
      {
      "source": {
      "id": "bleacher-report",
      "name": "Bleacher Report"
      },
      "author": "Brad Shepard",
      "title": "Ranking the Top 10 2024 CFB Recruiting Classes After the Summer Surge",
      "description": "With NIL shaping the college football recruiting world and December giving us the vast majority of signings these days, by the time opening kickoff rolls…",
      "url": "https://bleacherreport.com/articles/10086732-ranking-the-top-10-2024-cfb-recruiting-classes-after-the-summer-surge",
      "urlToImage": "https://media.bleacherreport.com/image/upload/x_0,y_161,w_1800,h_1197,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1692574274/uezt8jmtu7h3e8qzqx7f.jpg",
      "publishedAt": "2023-08-23T11:00:00Z",
      "content": "Kirby SmartEzra Shaw/Getty Images\r\nCommitments:26 (four 5-stars, 17 4-stars, five 3-stars)\r\nMost Dynamic:Dylan Raiola, 5-star QB, Buford, Georgia\r\nThere may be some question about whether Raiola is t… [+1752 chars]"
      },
      {
      "source": {
      "id": "talksport",
      "name": "TalkSport"
      },
      "author": "161385360554578",
      "title": "Gerrard denies Greenwood links, Ajax reject West Ham bid, Doku to undergo Man City medical",
      "description": "talkSPORT.com brings you all the latest football news, transfer gossip and reaction to the biggest stories. Tune into talkSPORT here and follow our live blog below for regular updates throughout th…",
      "url": "https://talksport.com/football/1486182/football-news-live-transfers-gossip-premier-league/",
      "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/08/DK-TALKSPORT-BLOG-COMP-23RD.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      "publishedAt": "2023-08-23T07:37:53Z",
      "content": "Newcastle United have announced the signing of Chelsea defender Lewis Hall on a season-long loan.\r\nThe deal includes an obligation for the Magpies to make the transfer permanent next summer based on … [+1630 chars]"
      },
      {
      "source": {
      "id": "espn",
      "name": "ESPN"
      },
      "author": "Eric Karabell",
      "title": "Fantasy football 'do draft' list - Aaron Rodgers among undervalued players - ESPN",
      "description": "You've read Eric Karabell's \"Do Not Draft\" list. Now it's time to find out which players seem to be landing on his roster most often in fantasy football drafts this summer.",
      "url": "https://www.espn.com/fantasy/football/insider/story/_/id/38204116/2023-fantasy-football-draft-undervalued",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0811%2Fr1209299_1296x729_16%2D9.jpg",
      "publishedAt": "2023-08-21T12:30:00Z",
      "content": "Perhaps you heard the news, but future Hall of Fame QB Aaron Rodgers is no longer a member of the Green Bay Packers. He joined the New York Jets this offseason. It wasn't really in the news much, so … [+8581 chars]"
      },
      {
      "source": {
      "id": "espn-cric-info",
      "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
      }
  ]
  constructor(){
    super();
    console.log("Hi! I am constructor.")
    this.state = {
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,25)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
