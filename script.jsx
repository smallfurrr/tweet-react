
class Tweet extends React.Component {

    render() {

        //based on passing in a single tweet, so later in Tweetfeed class or when rendering then create Tweets in a for loop
        let userDP = this.props.items.user.profile_image_url;
        let userName = this.props.items.user.name;
        let userDisplayName = this.props.items.user.screen_name;
        let tweetContent = this.props.items.text;
        let time = this.props.items.created_at;
        let retweets = this.props.items.retweet_count;
        let favorites = this.props.items.favorite_count;


        return (
          <div>
            <img src={userDP}/>
            <h2>{userName}</h2>
            <h3>@{userDisplayName}</h3>
            <p>{tweetContent}</p>
            <p>Tweeted: {time}</p>
            <div className="retweet-container">
                <img src="https://img.icons8.com/material-outlined/48/000000/retweet.png"/>
                <p>{retweets}</p>
            </div>
            <div className="favorite-container">
                <img src="https://img.icons8.com/material-outlined/48/000000/like.png"/>
                <p>{favorites}</p>
            </div>
          </div>
        );
    }
}

ReactDOM.render(
    <Tweet items={tweets[0]}/>,
    document.getElementById('root')
);