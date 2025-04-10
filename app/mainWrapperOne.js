import HomeNewsSSR from './homeNewsComponent';
import RedditComponent from '../components/redditFeeds';

export default function HomeWrapperOne(){
  return (
    <>
      <RedditComponent />
      <HomeNewsSSR />
    </>
  );
};
