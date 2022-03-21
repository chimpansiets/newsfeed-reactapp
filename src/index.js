import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Article(props) {
	return <div className="article_thumbnail">
		<img className="article_image" src={props.urlToImage}></img>
			<div className="article_text">
				<h3>{props.article_title}</h3>
				<h3 className="article_category">{props.article_category}</h3>
				<p className="article_subtext">{props.article_subtext}</p>
			</div>
  		</div>;
}

function Column1(props) {
	console.log(props.article2['urlToImage'])

	return <div className="column1">
		<Article urlToImage={props.article1['urlToImage']} 
		article_title={props.article1['title']} 
		article_category="Binnenland" 
		article_subtext={props.article1['description']}>
		</Article>
		<Article urlToImage={props.article2['urlToImage']} 
		article_title={props.article2['title']} 
		article_category="Binnenland" 
		article_subtext={props.article2['description']}>
		</Article>
	</div>;
}


var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=nl&' +
          'apiKey=59c89082598e49e69463d95c1cedf96d';

var req = new Request(url);

// const column1 = document.createElement("div");
// column1.id = "column1";
// document.body.appendChild(column1);

// const column2 = document.createElement("div");
// column2.id = "column2";
// document.body.app

fetch(req)
    .then(function(response) {
		response.json().then(
			function(actualJson) {
				ReactDOM.render(
					<Column1 article1={actualJson['articles'][0]}
						article2={actualJson['articles'][1]}></Column1>,
					document.getElementById('column1')
				  );
			}
		);
    },
);
  